import React from 'react'
import { useEffect, useState } from 'react'
import { client } from '../lib/sanityClient'
import { useContext } from 'react'
import { TransactionContext } from '../context/TransactionContext'
import { FiArrowUpRight } from 'react-icons/fi'

 

const TransactionHistory = () => {
  const { isLoading, currentAccount } = useContext(TransactionContext)
  const [transactionHistory, setTransactionHistory] = useState([])

  useEffect(() => {
    (async () => {
      if (!isLoading && currentAccount) {
        const query = `
          *[_type=="users" && _id == "${currentAccount}"] {
            "transactionList": transactions[]->{amount, toAddress, timestamp, txHash}|order(timestamp desc)[0..4]
          }
        `

        const clientRes = await client.fetch(query)

        setTransactionHistory(clientRes[0].transactionList)
      }
    })()
  }, [isLoading, currentAccount])

  return (
  <>

     <div class="back_re">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="title">
                     <h2>Transaction History</h2>
                  </div>
               </div>
            </div>
         </div>
      </div>

       <div  class="our_room">
         <div class="container">
          
            <div class="row">

        {transactionHistory &&
          transactionHistory.map((transaction, index) => (
               <div class="col-md-4 col-sm-6">
                  <div id="serv_hover"  class="room">
                     <div class="room_img">
                       <a
                         href={`https://rinkeby.etherscan.io/tx/${transaction.txHash}`}
                         target='_blank'
                         rel='noreferrer'
                       >
                          View on Etherscan
                         <FiArrowUpRight />
                      </a>
                        
                     </div>
                     <div class="bed_room">
                         <h3>
                            {transaction.amount} Ξ sent to{' '} {transaction.toAddress.substring(0, 6)}...
                         </h3>
                         <p>
                            {new Date(transaction.timestamp).toLocaleString('en-US', {
                              timeZone: 'PST',
                              hour12: true,
                              timeStyle: 'short',
                              dateStyle: 'long',
                             })}
                         </p>
                     </div>
                  </div>
                </div>
          ))}


            </div>
         </div>
      </div>
 
  </>
  )
}

export default TransactionHistory