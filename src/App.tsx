import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import {Dashboard} from "./pages/Dashboard/Dashboard"
import {SignUp} from "./pages/SignUp/SignUp";
import {Header} from "./layouts/Header/Header";
import {Products} from "./pages/Products/Products";
import {Homepage} from "./pages/HomePage/HomePage";
import {Login} from "./pages/Login/Login"
import {Footer} from "./layouts/Footer/Footer";
import{ToastContainer} from 'react-toastify'
import {ProductDesPage} from "./pages/ProductDesPage/ProdoctDesPage";


function App() {

  return (
      <>
              <Header />
              <ToastContainer />
              <Routes>
                  <Route path='/' element={<Homepage />}/>
              {/*    <Route path='/cart'/>*/}
                  <Route path='/login' element={<Login />}/>
                  <Route path='/signup' element={<SignUp />}/>
              {/*    <Route path='/payment_result'/>*/}
                  <Route path='/products' element={<Products/>}>
                      <Route path='/:category' element={<Products/>}>
                          <Route path='/:id' element={<ProductDesPage />} />
                      </Route>
                  </Route>
              {/*    <Route path='/purchase'/>*/}
                  <Route path='/dashboard' element={<Dashboard />} />
              {/*    <Route path='*'/>*/}
              </Routes>
              <Footer />
          </>
  )


}

export default App
