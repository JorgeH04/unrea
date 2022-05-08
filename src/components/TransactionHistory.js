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

  </>
  )
}

export default TransactionHistory