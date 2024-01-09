const hre = require('hardhat');

async function main() {
  const counter = await hre.ethers.deployContract('Counter');

  await counter.waitForDeployment();

  console.log(` deployed to ${counter.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
