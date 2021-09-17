// @ts-ignore
import {ethers} from "hardhat";
import {expect} from "chai";

describe ("NSDXToken", function () {
    before(async function() {
        this.NSDXToken = await ethers.getContractFactory("NSDXToken")
        this.signers = await ethers.getSigners()
        this.alice = this.signers[0]
        this.bob = this.signers[1]
    })

    beforeEach(async function() {
        this.nsdx = await this.NSDXToken.deploy()
    })

    it("should have correct name and symbol and decimal", async function () {
        const name = await this.nsdx.name()
        const symbol = await this.nsdx.symbol()
        const decimal = await this.nsdx.decimals()
        expect(name, "NSDXToken")
        expect(symbol, "NSDX")
        expect(decimal, "18")
    })

    it("should only allow owner to mint token", async function () {
        await this.nsdx['mint(address,uint256)'](this.alice.address, 1000)
        await this.nsdx['mint(address,uint256)'](this.bob.address, 1000)
        // @ts-ignore
        await expect(this.nsdx.connect(this.bob)['mint(address,uint256)'](this.bob.address, 1000)).to.be.revertedWith(
            "Ownable: caller is not the owner"
        )
        const totalSupply = await this.nsdx.totalSupply()
        const aliceBal = await this.nsdx.balanceOf(this.alice.address)
        const bobBal = await this.nsdx.balanceOf(this.bob.address)
        expect(totalSupply).to.equal("2000")
        expect(aliceBal).to.equal("1000")
        expect(bobBal).to.equal("1000")
    })

    it("should be token transfer properly", async function () {
        await this.nsdx['mint(address,uint256)'](this.alice.address, 1000)
        await this.nsdx['mint(address,uint256)'](this.bob.address, 1000)
        await this.nsdx.connect(this.alice).transfer(this.bob.address, 500)

        const totalSupply = await this.nsdx.totalSupply()
        const aliceBal = await this.nsdx.balanceOf(this.alice.address)
        const bobBal = await this.nsdx.balanceOf(this.bob.address)
        expect(totalSupply).to.equal("2000")
        expect(aliceBal).to.equal("500")
        expect(bobBal).to.equal("1500")
    })

    it("should fail if try to do bad transfers", async function () {
        await this.nsdx['mint(address,uint256)'](this.alice.address, 1000)
        await this.nsdx['mint(address,uint256)'](this.bob.address, 1000)
        // @ts-ignore
        await expect(this.nsdx.connect(this.alice).transfer(this.bob.address, 1100)).to.be.revertedWith(
        "ERC20: transfer amount exceeds balance"
        )

        const totalSupply = await this.nsdx.totalSupply()
        const aliceBal = await this.nsdx.balanceOf(this.alice.address)
        const bobBal = await this.nsdx.balanceOf(this.bob.address)
        expect(totalSupply).to.equal("2000")
        expect(aliceBal).to.equal("1000")
        expect(bobBal).to.equal("1000")
    })

    it("shoud be token transferFrom properly", async function () {
        await this.nsdx['mint(address,uint256)'](this.alice.address, 1000)
        await this.nsdx['mint(address,uint256)'](this.bob.address, 1000)
        await this.nsdx.connect(this.alice).approve(this.bob.address, 1000)
        await this.nsdx.connect(this.bob).transferFrom(this.alice.address, this.bob.address, 500)

        const totalSupply = await this.nsdx.totalSupply()
        const aliceBal = await this.nsdx.balanceOf(this.alice.address)
        const bobBal = await this.nsdx.balanceOf(this.bob.address)
        expect(totalSupply).to.equal("2000")
        expect(aliceBal).to.equal("500")
        expect(bobBal).to.equal("1500")
    })

    it("shoud fail if try to do bad transferFroms", async function () {
        await this.nsdx['mint(address,uint256)'](this.alice.address, 1000)
        await this.nsdx['mint(address,uint256)'](this.bob.address, 1000)
        // @ts-ignore
        await expect(this.nsdx.connect(this.bob).transferFrom(this.alice.address, this.bob.address, 500)).to.be.revertedWith(
            "ERC20: transfer amount exceeds allowance"
        )

        const totalSupply = await this.nsdx.totalSupply()
        const aliceBal = await this.nsdx.balanceOf(this.alice.address)
        const bobBal = await this.nsdx.balanceOf(this.bob.address)
        expect(totalSupply).to.equal("2000")
        expect(aliceBal).to.equal("1000")
        expect(bobBal).to.equal("1000")
    })
})