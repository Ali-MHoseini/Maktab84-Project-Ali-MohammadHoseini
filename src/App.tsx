import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import {Header} from "./layouts/Header/Header";
import {Products} from "./pages/Products/Products";
import {Homepage} from "./pages/HomePage/HomePage";
import {Footer} from "./layouts/Footer/Footer";
import {ProductDesPage} from "./pages/ProductDesPage/ProdoctDesPage";


function App() {

  return (
      <>
          <BrowserRouter>
              <Header />
              <Routes>
                  <Route path='/' element={<Homepage />}/>
              {/*    <Route path='/cart'/>*/}
              {/*    <Route path='/login'/>*/}
              {/*    <Route path='/payment_result'/>*/}
                  <Route path='/products' element={<Products/>}>
                      {/*<Route path='/:category' element={<Products/>}>*/}
                      {/*    <Route path='/:id' element={<ProductDesPage />} />*/}
                      {/*</Route>*/}
                  </Route>
              {/*    <Route path='/purchase'/>*/}
              {/*    <Route path='/dashboard'>*/}
              {/*        <Route path='/inventory'/>*/}
              {/*        <Route path='/products_manage'/>*/}
              {/*        <Route path='/order'/>*/}
              {/*    </Route>*/}
              {/*    <Route path='*'/>*/}
              </Routes>
              <Footer />
          </BrowserRouter>
          </>
  )


}

export default App
