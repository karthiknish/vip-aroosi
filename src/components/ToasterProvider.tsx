"use client";
import { Toaster } from "react-hot-toast";

export default function ToasterProvider() {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 4000,
        style: { fontSize: "14px" },
        success: { iconTheme: { primary: "#16a34a", secondary: "white" } },
        error: { iconTheme: { primary: "#dc2626", secondary: "white" } },
      }}
    />
  );
}
