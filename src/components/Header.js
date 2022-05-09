import React from 'react'
import { useEffect, useState, useContext } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { AiOutlineDown } from 'react-icons/ai'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import { TransactionContext } from '../context/TransactionContext'
import { Link } from 'react-router-dom'
//import { client } from '../lib/sanityClient'
 

const Header = () => {
  const [selectedNav, setSelectedNav] = useState('swap')
  const [userName, setUserName] = useState()
  const { connectWallet, currentAccount } = useContext(TransactionContext)

  // useEffect(() => {
  //   if (currentAccount) {
  //     ;(async () => {
  //       const query = `
  //       *[_type=="users" && _id == "${currentAccount}"] {
  //         userName,
  //       }
  //       `
  //       const clientRes = await client.fetch(query)

  //       if (!(clientRes[0].userName == 'Unnamed')) {
  //         setUserName(clientRes[0].userName)
  //       } else {
  //         setUserName(
  //           `${currentAccount.slice(0, 7)}...${currentAccount.slice(35)}`,
  //         )
  //       }
  //     })()
  //   }
  // }, [currentAccount])


  useEffect(() => {
    if(!currentAccount) return
    setUserName(`${currentAccount.slice(0, 7)}...${currentAccount.slice(35)}`,)
  }, [currentAccount])

  return (
    <>
        <header>
          <div class="header">
            <div class="container">
               <div class="row">
                  <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                     <div class="full">
                        <div class="center-desk">
                           <div class="logo">
                             <Link to="/" class="nav-link"><img src="images/logo.png" alt="#" /></Link>
                              <a></a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                     <nav class="navigation navbar navbar-expand-md navbar-dark ">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarsExample04">
                           <ul class="navbar-nav mr-auto">
                              <li class="nav-item active">
                                 <Link to="/" class="nav-link">Home</Link>
                              </li>
                              <li class="nav-item">
                                <Link to="/transactionhistory" class="nav-link">Transaction history</Link>
                              </li>
                       

                              {currentAccount ? (
                               <>
                                <li class="nav-item">
                                      <a class="nav-link" >
                                      {currentAccount.slice(0, 6)}...{currentAccount.slice(39)}
                                      </a>
                                </li>

                                <li class="nav-item">
                                  <button
                                      class="bk_btn"
                                      onClick={() => connectWallet()}
                                      >
                                      Logout
                                   </button>
                                </li>
 
                              </>
                             ) : (
                               <li class="nav-item">
                                 <button
                                     class="bok_btn"
                                     onClick={() => connectWallet()}
                                     >
                                     Connect Wallet
                                  </button>
                              </li>
                             )}
                              
 
                           </ul>
                        </div>
                     </nav>
                  </div>
               </div>
            </div>
         </div>
      </header>
    </>
  )
}

export default Header