"use client";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ToastProvider({ children }) {
  return (
    <>
      {children}
      <ToastContainer position={toast.POSITION.BOTTOM_RIGHT}/>
    </>
  );
}