import NavigationBar from "../components/navbar";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { ProductsProvider } from "../context/product.context";
import { CartProvider } from "../context/cart.context";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <ProductsProvider>
        <CartProvider>
          <NavigationBar />
          <Component {...pageProps} />
        </CartProvider>
      </ProductsProvider>
    </SessionProvider>
  );
}

export default MyApp;
