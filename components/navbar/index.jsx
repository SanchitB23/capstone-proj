import Link from "next/link";
import React, { Fragment, useContext } from "react";
import styles from "./nav.module.scss";
import { signIn, signOut, useSession } from "next-auth/react";
import CrwnLogo from "../../assets/crown.svg";
import CartIcon from "../cart/cart-icon";
import CartDropdown from "../cart/cart-dropdown";
import { CartContext } from "../../context/cart.context";

const NavigationBar = () => {
  const { status } = useSession();
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <nav className={styles.navigation}>
        <Link href={"/"}>
          <CrwnLogo className={styles.logo} />
        </Link>
        <div className={styles.navLinkContainer}>
          <Link href={"/shop"}>
            <div className={styles.link}>Shop</div>
          </Link>
          {status === "authenticated" ? (
            <>
              <div
                onClick={() => signOut({ redirect: false, callbackUrl: "/" })}
                className={styles.link}
              >
                SignOut
              </div>
              <CartIcon />
            </>
          ) : (
            <div onClick={() => signIn()} className={styles.link}>
              SignIn
            </div>
          )}
        </div>
        {isCartOpen && <CartDropdown />}
      </nav>
    </Fragment>
  );
};

export default NavigationBar;
