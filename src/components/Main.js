import React from 'react'
import { RiSettings3Fill } from 'react-icons/ri'
import { AiOutlineDown } from 'react-icons/ai'
import { useContext } from 'react'
import { TransactionContext } from '../context/TransactionContext'
import Modal from 'react-modal'


 

const Main = () => {
  const { formData, handleChange, sendTransaction } = useContext(TransactionContext)
 
  const handleSubmit = async (e) => {
    const { addressTo, amount } = formData
    e.preventDefault()

    if (!addressTo || !amount) return

    sendTransaction()
  }

  return (


<section class="banner_main">
    <div id="myCarousel" class="carousel slide banner" data-ride="carousel">
       <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
       </ol>
       <div class="carousel-inner">
          <div class="carousel-item active">
             <img class="first-slide" src="images/banner1.jpg" alt="First slide"/>
             <div class="container">
             </div>
          </div>
          <div class="carousel-item">
             <img class="second-slide" src="images/banner2.jpg" alt="Second slide"/>
          </div>
          <div class="carousel-item">
             <img class="third-slide" src="images/banner3.jpg" alt="Third slide"/>
          </div>
       </div>
       <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
       <span class="carousel-control-prev-icon" aria-hidden="true"></span>
       <span class="sr-only">Previous</span>
       </a>
       <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
       <span class="carousel-control-next-icon" aria-hidden="true"></span>
       <span class="sr-only">Next</span>
       </a>
    </div>
    <div class="booking_ocline">
       <div class="container">
          <div class="row">
             <div class="col-md-5">
                <div class="book_room">
                   <h1>Send your donation</h1>
                   <form class="book_now">
                      <div class="row">
                         <div class="col-md-12">
                            <span>Amount</span>
                             <input 
                                class="online_book" 
                                placeholder="0.0" 
                                type='text'
                                onChange={e => handleChange(e, 'amount')}
                                />
                         </div>
                         <div class="col-md-12">
                            <span>Address</span>
                             <input 
                                 class="online_book" 
                                 placeholder="0x..." 
                                 type='text'
                                 onChange={e => handleChange(e, 'addressTo')}
                                  />
                         </div>
                         <div class="col-md-12">
                            <button 
                               onClick={e => handleSubmit(e)}
                               class="book_btn">Confirm
                             </button>
                         </div>
                      </div>
                   </form>
                </div>
             </div>
          </div>
       </div>
    </div>
 </section>
 
 
  )
}

export default Main