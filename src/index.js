import express from 'express'
import net from 'net'
import cors from 'cors'
import bodyParser from 'body-parser'
import mysql from 'mysql'
import chalk from 'chalk'

import GitTokenSignerClient from 'gittoken-signer/dist/signerClient'
import validateContract from './validateContract'
import handleRegistration from './handleRegistration'
import getRegistered from './getRegistered'

export default class GitTokenRegistry extends GitTokenSignerClient {
  constructor({
    port,
    recoveryShare,
    signerIpcPath,
    web3Provider,
    mysqlHost,
    mysqlUser,
    mysqlRootPassword,
    mysqlDatabase
  }) {
    super({ signerIpcPath })

    this.web3Provider = web3Provider
    this.web3 = new Web3(new Web3.providers.HttpProvider(this.web3Provider))
    this.eth = Promise.promisifyAll(this.web3.eth)

    this.mysql = mysql.createConnection({
      host: mysqlHost,
      user: mysqlUser,
      password: mysqlRootPassword,
      database: mysqlDatabase,
    })

    this.validateContract = validateContract.bind(this)
    this.handleRegistration = handleRegistration.bind(this)
    this.getRegistered = getRegistered.bind(this)

    // Express Application
    this.app = express()

    this.app.use(cors())
    this.app.use(bodyParser.json()) // handle json data
    this.app.use(bodyParser.urlencoded({ extended: true })) // handle URL-encoded data
    this.app.post('/', this.handleRegistration)
    this.app.get('/', this.getRegistered)

    this.app.listen(port, () => {
      console.log(chalk.hex('#210b49').bgHex('#cc5333')(`GitToken Registry Listening for Events on Port ${port}`))
    })
  }
}