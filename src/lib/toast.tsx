"use client"
import {toast , ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

export const showSuccess = (message : string) => toast.success(message)
export const showError = (message : string) => toast.error(message)

const ToastContainerWrapper = () => (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      closeOnClick
      pauseOnHover
      draggable
      theme="light"
    />
  );
  
  export default ToastContainerWrapper;