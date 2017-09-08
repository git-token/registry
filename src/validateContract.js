import GitTokenContract from 'gittoken-contracts/build/contracts/GitToken.json'
import Promise, { join } from 'bluebird'

const { abi } = JSON.parse(GitTokenContract)

export default function validateContract({ address }) {
  return new Promise((resolve, reject) => {
    const contract = this.eth.contract(abi).at(address)

    join(
      contract.getRewardDetails.call('milestone', 'closed'),
      contract.name.call(),
      contract.organization.call(),
      contract.decimals.call(),
      contract.symbol.call(),
    ).then((details) => {
      const decimals = details[3].toNumber()

      // TODO: Better validation for GitToken Contract
      if (
        details[0][0].toNumber() * Math.pow(10, decimals) != 250 ||
        details[0][1].toNumber() * Math.pow(10, decimals) != 40000
      ) {
        reject(new Error(`
          Invalid GitToken Contract!
          getRewardDetails returned unexepected result
        `))
      } else {
        resolve({
          address,
          decimals,
          name: details[1].toString(),
          organization: details[2].toString(),
          symbol: details[4].toString(),
          date: new Date().getTime()
        })
      }
    }).catch((error) => {
      reject(error)
    })
  })
}
