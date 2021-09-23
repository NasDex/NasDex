// @ts-ignore
import {ethers} from "hardhat";
import {expect} from "chai";
import {advanceBlockTo} from "./utils";

describe("MasterChef", function () {
    before(async function(){
        this.PerBlock = 100
        this.StartBlock = 1000
        this.MaxMint = 100000

        this.signers = await ethers.getSigners()
        this.alice = this.signers[0]
        this.bob = this.signers[1]

        this.NSDXToken = await ethers.getContractFactory("NSDXToken")
        this.MasterChef = await ethers.getContractFactory("MasterChef")
        this.ERC20Mock = await ethers.getContractFactory("ERC20Mock")
    })

    beforeEach(async function() {
        this.nsdx = await this.NSDXToken.deploy()
        this.chef = await this.MasterChef.deploy(
            this.nsdx.address,
            this.PerBlock,
            this.StartBlock,
            this.MaxMint
        )
        this.mtoken = await this.ERC20Mock.deploy(
            "ERC20MockToken",
            "EMT",
            "100000000"
        )

        await this.nsdx['mint(address,uint256)'](this.alice.address, 1000)
        await this.nsdx['mint(address,uint256)'](this.bob.address, 1000)

        await this.nsdx.transferOwnership(this.chef.address)
    })

    it("should be set correct state variables", async function () {
        const nsdx = await this.chef.nsdx()
        const poolLength = await this.chef.poolLength()
        const nsdxPool = await this.chef.poolInfo(0)
        const owner = await this.chef.owner()
        const startBlock = await this.chef.startBlock()
        const maxMint = await this.chef.nsdxMaxMint()
        const perBlock = await this.chef.nsdxPerBlock()


        expect(nsdx).to.equal(this.nsdx.address)
        expect(poolLength).to.equal(1)
        expect(owner).to.equal(this.alice.address)
        expect(startBlock).to.equal(this.StartBlock)
        expect(perBlock).to.equal(this.PerBlock)
        expect(maxMint).to.equal(this.MaxMint)
        expect(nsdxPool.lpToken).to.equal(this.nsdx.address)
    })

    it("should be update max mint ok", async function () {
        await this.chef.setMaxMint(this.MaxMint * 2)
        const maxMint = await this.chef.nsdxMaxMint()
        expect(maxMint).to.equal(this.MaxMint * 2)
    })

    it("should be add pool ok", async function () {
        await this.chef.add(1000, this.mtoken.address, true)
        const poolInfo = await this.chef.poolInfo(1)
        expect(poolInfo.lpToken).to.equal(this.mtoken.address)
        expect(poolInfo.allocPoint).to.equal(1000)
    })

    it("should be set pool ok", async function () {
        await this.chef.set(0, 500, true)
        const poolInfo = await this.chef.poolInfo(0)
        expect(poolInfo.lpToken).to.equal(this.nsdx.address)
        expect(poolInfo.allocPoint).to.equal(500)
    })

    it("should be deposit pool ok", async function () {
        await this.nsdx.connect(this.alice).approve(this.chef.address, 1000)
        await this.nsdx.connect(this.bob).approve(this.chef.address, 1000)

        await this.chef.connect(this.alice).deposit(0, 1000)
        await this.chef.connect(this.bob).deposit(0, 1000)

        const chefBalance = await this.nsdx.balanceOf(this.chef.address)

        expect(chefBalance).to.equal(2000)
    })

    it("should be get pending nsdx ok", async function () {
        await this.nsdx.connect(this.alice).approve(this.chef.address, 1000)
        await this.nsdx.connect(this.bob).approve(this.chef.address, 1000)

        await this.chef.connect(this.alice).deposit(0, 1000)
        await this.chef.connect(this.bob).deposit(0, 1000)

        await advanceBlockTo(1010)

        const alicePending = await this.chef.pendingNSDX(0, this.alice.address)
        const bobPending = await this.chef.pendingNSDX(0, this.bob.address)

        expect(alicePending).to.equal(500)
        expect(bobPending).to.equal(500)
    })

    it("should be withdraw pool ok", async function () {
        await this.nsdx.connect(this.alice).approve(this.chef.address, 1000)
        await this.nsdx.connect(this.bob).approve(this.chef.address, 1000)

        await this.chef.connect(this.alice).deposit(0, 1000)
        await this.chef.connect(this.bob).deposit(0, 1000)

        await this.chef.connect(this.alice).withdraw(0, 1000)
        await this.chef.connect(this.bob).withdraw(0, 1000)

        const aliceBal = await this.nsdx.balanceOf(this.alice.address)
        const bobBal = await this.nsdx.balanceOf(this.bob.address)

        expect(aliceBal).to.equal(1150)
        expect(bobBal).to.equal(1150)
    })

    it("should be harvest pool ok", async function () {
        await this.nsdx.connect(this.alice).approve(this.chef.address, 1000)
        await this.nsdx.connect(this.bob).approve(this.chef.address, 1000)

        await this.chef.connect(this.alice).deposit(0, 1000)
        await this.chef.connect(this.bob).deposit(0, 1000)

        // withdraw with zero equal harvest
        await this.chef.connect(this.alice).withdraw(0, 0)
        await this.chef.connect(this.bob).withdraw(0, 0)

        const aliceBal = await this.nsdx.balanceOf(this.alice.address)
        const bobBal = await this.nsdx.balanceOf(this.bob.address)

        expect(aliceBal).to.equal(150)
        expect(bobBal).to.equal(100)
    })

    it("should be emergency withdraw ok", async function () {
        await this.nsdx.connect(this.alice).approve(this.chef.address, 1000)
        await this.nsdx.connect(this.bob).approve(this.chef.address, 1000)

        await this.chef.connect(this.alice).deposit(0, 1000)
        await this.chef.connect(this.bob).deposit(0, 1000)

        // withdraw with zero equal harvest
        await this.chef.connect(this.alice).emergencyWithdraw(0)
        await this.chef.connect(this.bob).emergencyWithdraw(0)

        const aliceBal = await this.nsdx.balanceOf(this.alice.address)
        const bobBal = await this.nsdx.balanceOf(this.bob.address)

        expect(aliceBal).to.equal(1000)
        expect(bobBal).to.equal(1000)
    })
})