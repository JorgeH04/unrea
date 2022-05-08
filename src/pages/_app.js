import React from 'react'
import '../styles/globals.css'
import { TransactionProvider } from '../context/TransactionContext'
import PropTypes from "prop-types";

function MyApp({ Component, pageProps }) {
  return (
    <TransactionProvider>
      <Component {...pageProps} />
    </TransactionProvider>
  )
}

export default MyApp


MyApp.propTypes = {
  Component: PropTypes.string,
  pageProps: PropTypes.string
};