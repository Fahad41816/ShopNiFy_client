/* eslint-disable @typescript-eslint/no-explicit-any */
import { Outlet } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer"; 
import  { Toaster } from 'react-hot-toast';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { replaceCartWithNewProducts, retainCurrentCart } from "../../Redux/feature/Cart/CartSlice";

const Layout = () => {
  
  const {cart} : any = useSelector(state => state)
  const dispatch = useDispatch()
 

  useEffect(() => {
    if(cart.warning){
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: cart?.warning?.message,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "retain the current items",
        cancelButtonText: "replace the cart",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(retainCurrentCart())
          swalWithBootstrapButtons.fire({
            title: "done!",
            text: "Your cart retain the current items.",
            icon: "success"
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          dispatch(replaceCartWithNewProducts(cart?.warning?.product))
          swalWithBootstrapButtons.fire({
            title: "done.",
            text: "replace the cart With New Product",
            icon: "success"
          });
        }
      });
    }
 
  }, [dispatch, cart.warning])
  

  return (
    <div>
      <Navbar />
       <Toaster/>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
