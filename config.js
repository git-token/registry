
/**
 * NOTE If running the server using NodeJS instead of docker-compose, uncomment the line
 * below to read the .env file and map to config
 */

 require('dotenv').config({ path: `${process.cwd()}/.env`})

/**
 * Configuration file for GitToken Registry instance
 * This file parses the environment variable passed to the docker-compose.yml
 * env_file field, then exports the configuration to be used in the application.
 * @type {Object}
 */


const config = {
  port:              process.env['REGISTRY_PORT'],
  recoveryShare:     process.env['RECOVERY_SHARE'],
  signerIpcPath:     process.env['SIGNER_IPC_PATH'],
  web3Provider:      process.env['WEB3_PROVIDER'],
  torvaldsProvider:  process.env['TORVALDS_PROVIDER'],
  registryAddress:   process.env['REGISTRY_ADDRESS']
}

module.exports = config
