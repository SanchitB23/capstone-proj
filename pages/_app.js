import NavigationBar from "../components/navigation";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { ProductsProvider } from "../context/product.context";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <NavigationBar />
      <ProductsProvider>
        <Component {...pageProps} />
      </ProductsProvider>
    </SessionProvider>
  );
}

export default MyApp;
