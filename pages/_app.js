import NavigationBar from "../components/navbar";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { CategoriesProvider } from "../context/categories.context";
import { CartProvider } from "../context/cart.context";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <CategoriesProvider>
        <CartProvider>
          <NavigationBar />
          <Component {...pageProps} />
        </CartProvider>
      </CategoriesProvider>
    </SessionProvider>
  );
}

export default MyApp;
