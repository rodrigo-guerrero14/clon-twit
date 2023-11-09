import React from "react";
import { AuthButtonServer } from "../components/auth-button-server";

const Login = () => {
  return (
    <section className="grid place-content-center min-h-screen">
      <h1 className="text-xl font-bold">Inicia Session en Clon de Twitter</h1>
      <AuthButtonServer />
    </section>
  );
};

export default Login;
