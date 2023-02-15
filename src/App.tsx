import {Route, Routes} from 'react-router-dom'
import './App.css'

function App() {

  return (
      <>
          <Routes>
              <Route path='/' />
              <Route path='/cart'/>
              <Route path='/login'/>
              <Route path='/payment_result'/>
              <Route path='/products' children='/:id'/>
              <Route path='/purchase'/>
              <Route path='/dashboard'>
                  <Route path='/inventory'/>
                  <Route path='/products_manage'/>
                  <Route path='/order'/>
              </Route>
              <Route path='*'/>
          </Routes>
          </>
  )


}

export default App
