import Home from './pages/Home';
import Header from "./components/Header";
import { Route, Routes } from 'react-router-dom';
import './assets/css/style.css'
import "slick-carousel/slick/slick.css";
import Sign from './components/Sign';
import Signup from './components/Signup';
import Footer from './components/Footer';
import ProductList from './pages/ProductList';
import Product from './components/Product';
import Addcart from './pages/Addcart';
import Wishlist from './components/Whishlist';
import Profile from './components/Profile';
import EditProfile from './components/EditProfile';
import ManageAddress from './components/ManageAddress';
import ChangePassword from './components/ChangePassword';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign' element={<Sign />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/product-listing-page/:slug' element={<ProductList />} />
        <Route path="/product/:slug/:id" element={<Product />} />
        <Route path='/my-cart' element={<Addcart />} />
        <Route path='/profile/wishList' element={<Wishlist />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/profile/edit' element={<EditProfile />} />
        <Route path='/profile/manage_address' element={<ManageAddress />} />
        <Route path='/profile/change-password' element={<ChangePassword />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
