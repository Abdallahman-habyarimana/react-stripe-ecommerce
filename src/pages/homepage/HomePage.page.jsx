
import Navbar from '../../components/navigation/Navbar.component';
import ProductContainer from '../../components/products/productContainer.component';
import './header.css';
import './homePage.css'

const Home = () => {
  return (
    <>
    <div className="home-page">
      <ProductContainer />
    </div>
    </>
  )
}

export default Home