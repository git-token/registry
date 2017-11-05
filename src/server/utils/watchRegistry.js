
/**
 * [watchRegistry description]
 * @return {[type]} [description]
 */
export default function watchRegistry({ fromBlock=0, toBlock='latest'}) {

  return this.registry.allEvents({ fromBlock: 0, toBlock: 'latest' }, (error, log) => {
    if (error) { console.log('error', error) }
    Promise.resolve(log).then(({ event, args }) => {
      switch(event) {
        case 'TokenRegistered':
          return this.createRelayContract({ ...args })
          break;
        default:
          console.log('Unhandled Contract Event')
      }
    }).then(() => {

    }).catch((error) => {
      console.log(error)
    })

  })

}
