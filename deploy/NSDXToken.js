module.exports = async function ({ ethers, getNamedAccounts, deployments }) {
    const { deploy } = deployments
    const { deployer } = await getNamedAccounts()

    const supplyInit = ethers.BigNumber.from('60000000000000000000000000') // 6000 0000 ** 18

    await deploy("NSDXToken", {
        from: deployer,
        log: true,
        deterministicDeployment: false,
    })

    const nsdx = await ethers.getContract("NSDXToken", deployer)
    const balance = await nsdx.balanceOf(deployer)
    if (balance < supplyInit) {
        const owner = await nsdx.owner()
        if (owner === deployer) {
            console.log("mint NSDX token to deployer amount:", supplyInit.sub(balance).toString())
            await nsdx['mint(address,uint256)'](deployer, supplyInit.sub(balance))
        } else {
            console.log("the NSDX token owner is not deployer, mint failed")
        }
    }
}
module.exports.tags = ["NSDXToken"]