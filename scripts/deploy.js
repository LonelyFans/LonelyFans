async function main() {
    const [deployer] = await ethers.getSigners();
    console.log(`­deploying contracts with the account ${deployer.address}`);

    const balance = await deployer.getBalance();
    console.log(`deployer's balance :${balance.toString()}`);

    const LonelyFans = await ethers.getContractFactory('LonelyFans');
    const lonelyFans = await LonelyFans.deploy();
    console.log(`Contract adress : ${lonelyFans.address}`);
}

main()
    .then(() => {process.exit(0)})
    .catch(error => {
        console.error(error);
        process.exit(1);
    })