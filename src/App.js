import axios from 'axios';
import { useEffect, useState } from "react";
import ProductCard from "./Components/ProductCard";
import NavBar from "./Components/NavBar";
import SideBar from "./Components/Sidebar";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, Bounce, toast } from 'react-toastify';

function App() {

  const [productData, setproductData] = useState([])
  const [cart, movetoCart] = useState([])
  const [cartOpen, setcartOpen] = useState(true)


  async function getData() {
    const response = await axios
      .get("https://fakestoreapi.com/products");

    setproductData(response.data)
  }

  function addtoCart(title, imageUrl, price) {
    console.log(title, imageUrl, price);
    const itemIndex = cart.findIndex((item) => item.title === title)
    if (itemIndex >= 0) {
      movetoCart(cart.map((_, index) => { if (index === itemIndex) _.quantity += 1; return _ }));
    } else {
      movetoCart([...cart, { title, imageUrl, price, quantity: 1 }])
    }

    toast.success('Added to Cart', {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  }

  function removefromCart(title) {
    const itemIndex = cart.findIndex((item) => item.title === title)
    if (itemIndex >= 0 && cart[itemIndex].quantity > 1) {
      movetoCart(cart.map((_, index) => { if (index === itemIndex) _.quantity -= 1; return _ }));
    } else {
      movetoCart(cart.slice(0, itemIndex).concat(cart.slice(itemIndex + 1)))
    }

    toast.error('Item removed to cart', {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="flex flex-col items-center relative overflow-y-hidden h-screen">
      <NavBar cart={cart} toggleCartOpen={() => setcartOpen(!cartOpen)} />
      <SideBar cart={cart} isOpen={cartOpen} toggleCartOpen={() => setcartOpen(!cartOpen)} addtoCart={addtoCart} removefromCart={removefromCart} />
      <div className="p-3 h-full overflow-y-auto no-scrollbar grid place-items-center gap-3 gap-y-[20px] lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
        {
          productData.map(
            (item, index) => {
              const itemIndex = cart.findIndex((cartItem) => cartItem.title === item.title)
              return <ProductCard {...item} addtoCart={addtoCart} count={itemIndex >= 0 ? cart[itemIndex].quantity : 0} key={index} removefromCart={removefromCart} />
            }
          )
        }
      </div>
      <ToastContainer
        stacked
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </div>
  );
}

export default App;