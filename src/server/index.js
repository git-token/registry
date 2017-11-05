import express from 'express'
import net from 'net'
import cors from 'cors'
import bodyParser from 'body-parser'
import mysql from 'mysql'
import chalk from 'chalk'
import Web3 from 'web3'
import Promise, { promisifyAll } from 'bluebird'

import GitTokenSignerClient from 'gittoken-signer/dist/client/index'
import GitTokenRegistryContract from 'gittoken-contracts/build/contracts/GitTokenRegistry.json'
import GitTokenContract from 'gittoken-contracts/build/contracts/GitToken.json'

const { abi, unlinked_binary } = JSON.parse(GitTokenRegistryContract)

import {
  validateContract,
  validateAdmin,
  watchRegistry,
  createRelayContract,
} from './utils/index'

import {
  handleRegistration,
  getRegistered
} from './controllers/index'

import {
  verifyOrganization
} from './middleware/index'

import {
  apiRouter
} from './routers/index'

import {
  insertIntoRegistry
} from './sql'

export default class GitTokenRegistry extends GitTokenSignerClient {
  constructor({
    port,
    recoveryShare,
    signerIpcPath,
    ethereumProvider,
    torvaldsProvider,
    registryAddress
    // mysqlHost,
    // mysqlUser,
    // mysqlRootPassword,
    // mysqlDatabase
  }) {
    super({ signerIpcPath })

    this.registryAddress  = registryAddress
    this.ethereumProvider = ethereumProvider
    this.torvaldsProvider = torvaldsProvider
    this.ethereumNetwork  = new Web3(new Web3.providers.HttpProvider(this.ethereumProvider))
    this.torvaldsNetwork  = new Web3(new Web3.providers.HttpProvider(this.torvaldsProvider))

    this.registry = this.ethereumNetwork.eth.contract(abi).at(this.registryAddress)

    // Bind Methods
    this.watchRegistry = watchRegistry.bind(this)
    this.createRelayContract = createRelayContract.bind(this)
    this.apiRouter = apiRouter.bind(this)
    this.validateAdmin = validateAdmin.bind(this)
    this.verifyOrganization = verifyOrganization.bind(this)

    // Execute methods
    this.watchRegistry({ fromBlock: 0, toBlock: 'latest' })

    // Express Application
    this.app = express()

    this.app.use(cors())
    this.app.use(require('cookie-parser')());
    this.app.use(bodyParser.json()) // handle json data
    this.app.use(bodyParser.urlencoded({ extended: true })) // handle URL-encoded data
    this.app.use('/', express.static(`${process.cwd()}/node_modules/gittoken-registry-ui/`))
    this.app.use('/api/v1', this.apiRouter())

    this.app.listen(port, () => {
      console.log(chalk.hex('#210b49').bgHex('#cc5333')(`GitToken Registry Listening for Events on Port ${port}`))
    })
  }
}
