
import './App.css';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import ProductDetail from './components/ProductDetail'
import ProductListing from './components/ProductListing';
// import ProductComponent from './components/ProductComponent'
import NotFound from './components/NotFound'

function App() {
  return (
    <div className="App">
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<ProductListing/>} /> 
        <Route path="/product/:productId" element={<ProductDetail/>} />
        <Route path='*' element ={<NotFound/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
