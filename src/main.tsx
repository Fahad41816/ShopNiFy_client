import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./pages/Layout/Layout.tsx";
import Home from "./pages/Home/Home.tsx";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import LoginPage from "./pages/Login/LoginPage.tsx";
import Registration from "./pages/Registration/Registration.tsx";
import CartPage from "./pages/AddToCartPage/CartPage.tsx";
import WishListPage from "./pages/Wishlist/WishListPage.tsx";
import Comparepage from "./pages/ComparePage/Comparepage.tsx";
import ContactusPage from "./pages/Contact/ContactusPage.tsx";
import CollectionsPage from "./pages/AllCollections/CollectionsPage.tsx";
import AboutusPage from "./pages/Aboutus/AboutusPage.tsx";
import { Provider } from "react-redux";  
import { PersistGate } from "redux-persist/integration/react";
import Store, { persistor } from "./Redux/store.ts";
import MyProfilePage from "./pages/MyProfile/MyProfile.tsx";
import MyordersPage from "./pages/MyOrders/Myorders.tsx";
import RecentViewProduct from "./pages/RecentViewPdt/RecentViewProduct.tsx";
import DashboardLayour from "./pages/Dashboard/DashboardLayout/DashboardLayour.tsx";
import DashboardHome from "./pages/Dashboard/DashboardHome/DashboardHome.tsx";
import MyShop from "./pages/Dashboard/MyShop/MyShop.tsx";
import VendorOrders from "./pages/Dashboard/VendorOrders/VendorOrders.tsx";
import AddProductPage from "./pages/Dashboard/AddProduct/AddProductPage.tsx"; 
import ProductDetails from "./pages/ProductDetails/ProductDetails.tsx";
import CartAlertShowProvider from "./context/CartAlertShowProvider/CartAlertShowProvider.tsx";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage.tsx";
import PaymentSuccess from "./pages/PaymentSuccess/PaymentSuccess";
import CollectionsProducts from "./pages/CollectionProducts/CollectionsProducts.tsx";
import ShopsPage from "./pages/AllShops/ShopsPage.tsx";
import ShopPage from "./pages/Shoppage/ShopPage.tsx";
// ..
AOS.init();
// eslint-disable-next-line react-refresh/only-export-components
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <CartAlertShowProvider><Home></Home></CartAlertShowProvider>,
      },
      {
        path: "/Login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/Registration",
        element: <Registration></Registration>,
      },  
      {
        path: "/product/:shopName/:productName",
        element: <ProductDetails></ProductDetails>,
        loader : ({params}) =>{return params}
      },
      {
        path: "/Compares",
        element: <Comparepage></Comparepage>,
      },
      {
        path: "/Wishlist",
        element: <WishListPage></WishListPage>,
      },
      {
        path: "/Cart",
        element: <CartPage></CartPage>,
      },
      {
        path: "/Checkout",
        element: <CheckoutPage></CheckoutPage>,
      },
      {
        path: "/Contact",
        element: <ContactusPage></ContactusPage>,
      },
      {
        path: "/About",
        element: <AboutusPage></AboutusPage>,
      },
      {
        path: "/Collections",
        element: <CollectionsPage></CollectionsPage>,
      },
      {
        path: "/Collections/:categoryName",
        element: <CollectionsProducts></CollectionsProducts>,
        loader: ({params}) => { return params }
      },
      {
        path: "/MyProfile",
        element: <MyProfilePage></MyProfilePage>,
      },
      {
        path: "/MyOrder",
        element: <MyordersPage></MyordersPage>,
      },
      {
        path: "/ViewProduct",
        element: <RecentViewProduct></RecentViewProduct>,
      },
      {
        path: "/PaymentSuccess",
        element: <PaymentSuccess></PaymentSuccess>,
      },
      {
        path: "/shops",
        element: <ShopsPage></ShopsPage>,
      },
      {
        path: "/shop/:shopName",
        element: <ShopPage></ShopPage>,
        loader: ({params}) => {return params}
      },
    ],
  },
  // dashboard section 
  {
    path: '/Dashboard',
    element: <DashboardLayour></DashboardLayour>,
    children: [
      {
        path: "/Dashboard",
        element: <DashboardHome/>
      },
      {
        path: "/Dashboard/MyShop",
        element: <MyShop/>
      },
      {
        path: "/Dashboard/vendor/Orders",
        element: <VendorOrders/>
      },
      {
        path: "/Dashboard/AddProduct",
        element: <AddProductPage/>
      },
    ]
  }
]);

createRoot(document.getElementById("root")!).render( 
  <Provider store={Store}>
    <PersistGate persistor={persistor}>
    <RouterProvider router={Router} />
    </PersistGate>
  </Provider> 
);
