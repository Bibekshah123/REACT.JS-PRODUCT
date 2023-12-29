import {Route,Routes} from 'react-router-dom';
import Products from './pages/product/product';
import {Home} from './pages/home/home'
import {Nav} from './components/nav'



function App() {
return (
  <div>
    <Nav/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/products' element={<Products/>}/>
</Routes>
</div>
)
}

export default App;
