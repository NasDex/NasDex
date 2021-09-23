// @ts-ignore
import {ethers} from "hardhat";
import {expect} from "chai";
import {advanceBlockTo} from "./utils";
import exp = require("constants");

describe("MasterChef", function () {
    before(async function(){
        this.PerBlock = 100
        this.StartBlock = 1000
        this.MaxMint = 100000

        this.signers = await ethers.getSigners()
        this.alice = this.signers[0]
        this.bob = this.signers[1]
        this.admin = this.signers[2]

        this.NSDXToken = await ethers.getContractFactory("NSDXToken")
        this.MasterChef = await ethers.getContractFactory("MasterChef")
        this.NSDXVault = await ethers.getContractFactory("NSDXVault")
    })

    beforeEach(async function(){
        // deploy nsdx token and mint token to test account
        this.nsdx = await this.NSDXToken.deploy()
        await this.nsdx['mint(address,uint256)'](this.alice.address, 1000)
        await this.nsdx['mint(address,uint256)'](this.bob.address, 1000)

        // deploy MasterChef contract
        this.chef = await this.MasterChef.deploy(
            this.nsdx.address,
            this.PerBlock,
            this.StartBlock,
            this.MaxMint
        )
        await this.nsdx.transferOwnership(this.chef.address)

        // deploy NSDXVault contract
        this.vault = await this.NSDXVault.deploy(
            this.nsdx.address,
            this.chef.address,
            this.admin.address,
            this.admin.address,
        )
    })

    // setAdmin
    it("Should be set admin ok", async function () {
        await this.vault.setAdmin(this.alice.address)
        const admin = await this.vault.admin()
        expect(admin).to.equal(this.alice.address)
        await expect(this.vault.connect(this.bob).setAdmin(this.admin.address)).to.be.revertedWith("Ownable: caller is not the owner")
    })

    // setTreasury
    it ("Should be set treasury ok", async function () {
        await this.vault.setTreasury(this.alice.address)
        const treasury = await this.vault.treasury()
        expect(treasury).to.equal(this.alice.address)
        await expect(this.vault.connect(this.bob).setTreasury(this.admin.address)).to.be.revertedWith("Ownable: caller is not the owner")
    })


    // setPerformanceFee
    it ("Should be set performance fee ok", async function () {
        await this.vault.connect(this.admin).setPerformanceFee(100)
        const performanceFee = await this.vault.performanceFee()
        expect(performanceFee).to.equal(100)
        await expect(this.vault.connect(this.bob).setPerformanceFee(200))
            .to.be.revertedWith("admin: wut?")
        await expect(this.vault.connect(this.admin).setPerformanceFee(600)).
            to.be.revertedWith("performanceFee cannot be more than MAX_PERFORMANCE_FEE")
    })

    // setCallFee
    it ("Should be set call fee ok", async function () {
        await this.vault.connect(this.admin).setCallFee(100)
        const callFee= await this.vault.callFee()
        expect(callFee).to.equal(100)
        await expect(this.vault.connect(this.bob).setCallFee(50))
            .to.be.revertedWith("admin: wut?")
        await expect(this.vault.connect(this.admin).setCallFee(200)).
        to.be.revertedWith("callFee cannot be more than MAX_CALL_FEE")
    })

    // setWithdrawFee
    it ("Should be set withdraw fee ok", async function () {
        await this.vault.connect(this.admin).setWithdrawFee(50)
        const withdrawFee = await this.vault.withdrawFee()
        expect(withdrawFee).to.equal(50)
        await expect(this.vault.connect(this.bob).setWithdrawFee(60))
            .to.be.revertedWith("admin: wut?")
        await expect(this.vault.connect(this.admin).setWithdrawFee(200)).
        to.be.revertedWith("withdrawFee cannot be more than MAX_WITHDRAW_FEE")
    })

    // setWithdrawFeePeriod
    it ("Should be set withdraw fee period ok", async function () {
        await this.vault.connect(this.admin).setWithdrawFeePeriod(24 * 3600)
        const withdrawFeePeriod = await this.vault.withdrawFeePeriod()
        expect(withdrawFeePeriod).to.equal(24 * 3600)
        await expect(this.vault.connect(this.bob).setWithdrawFeePeriod(48 * 3600))
            .to.be.revertedWith("admin: wut?")
        await expect(this.vault.connect(this.admin).setWithdrawFeePeriod(96 * 3600)).
        to.be.revertedWith("withdrawFeePeriod cannot be more than MAX_WITHDRAW_FEE_PERIOD")
    })

    // deposit
    it ("Should be deposit ok", async function () {
        await this.nsdx.connect(this.alice).approve(this.vault.address, 1000)
        await this.vault.connect(this.alice).deposit(500)
        const chefBal = await this.nsdx.balanceOf(this.chef.address)
        const valutInfo = await this.chef.userInfo(0, this.vault.address)
        const userInfo = await this.vault.userInfo(this.alice.address)
        const totalShares = await this.vault.totalShares()
        expect(chefBal).to.equal(500)
        expect(valutInfo.amount).to.equal(500)
        expect(valutInfo.rewardDebt).to.equal(0)
        expect(userInfo.shares).to.equal(500)
        expect(totalShares).to.equal(500)
        await advanceBlockTo(1010)
        await this.vault.connect(this.alice).deposit(500)
        const afterChefBal = await this.nsdx.balanceOf(this.chef.address)
        const afterValutInfo = await this.chef.userInfo(0, this.vault.address)
        const afterUserInfo = await this.vault.userInfo(this.alice.address)
        const afterTotalShares = await this.vault.totalShares()
        const afterVaultBal = await this.nsdx.balanceOf(this.vault.address)
        expect(afterChefBal).to.equal(1000)
        expect(afterValutInfo.amount).to.equal(1000)
        expect(afterUserInfo.shares).to.equal(1000)
        expect(afterTotalShares).to.equal(1000)
        expect(afterVaultBal).to.equal(1100)
    })

    // withdraw
    it ("Should be withdraw ok", async function () {
        await this.nsdx.connect(this.alice).approve(this.vault.address, 1000)
        await advanceBlockTo(1020)
        await this.vault.connect(this.alice).deposit(500)
        await advanceBlockTo(1030)
        const pendingVault = await this.chef.pendingNSDX(0, this.vault.address)
        await this.vault.connect(this.alice).withdraw(100)
        await advanceBlockTo(1040)
        await this.vault.connect(this.alice).withdraw(400)
        const aliceBal = await this.nsdx.balanceOf(this.alice.address)
        const treasuryBal = await this.nsdx.balanceOf(this.admin.address)
        const vaultBal = await this.nsdx.balanceOf(this.vault.address)
        expect(aliceBal).to.equal(1999)
        expect(treasuryBal).to.equal(1)
    })

    // harvest
    it ("Should be harvest ok", async function () {
        await this.nsdx.connect(this.alice).approve(this.vault.address, 1000)
        await advanceBlockTo(1050)
        await this.vault.connect(this.alice).deposit(500)
        await advanceBlockTo(1060)
        await this.vault.connect(this.bob).harvest()
        const bobBal = await this.nsdx.balanceOf(this.bob.address)
        const chefBal = await this.nsdx.balanceOf(this.chef.address)
        expect(bobBal).to.equal(1002)
        expect(chefBal).to.equal(1478)
    })
    // calculateHarvestNSDXReward
    // calculateTotalPendingNSDXReward
    // getPricePerFullShare
    // emergencyWithdraw
    // inCaseTokenGetStuck
    // pause
    // unpause
})
