import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header'
import Main from './components/Main'
import TransactionHistory from './components/TransactionHistory'

const App = () => {
  return (
     <Router>


        <Header />
        <Main />
        <TransactionHistory />  

        <Route   path="/">
          
        </Route>



 
        <Route path="/transactionhistory" component={TransactionHistory}  />
      </Router>

   )
}

 

export default App;
