import Link from "next/link";
import React, { Fragment, useState } from "react";
import styles from "./nav.module.scss";
import { signIn, signOut, useSession } from "next-auth/react";
import CrwnLogo from "../../assets/crown.svg";
import CartIcon from "../cart-icon";
import CartDropdown from "../cart-dropdown";

const NavigationBar = () => {
  const { status } = useSession();
  const [isCartDropDownOpen, setIsCartDropDownOpen] = useState(false);
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
              <CartIcon openCart={setIsCartDropDownOpen} />
            </>
          ) : (
            <div onClick={() => signIn()} className={styles.link}>
              SignIn
            </div>
          )}
        </div>
        {isCartDropDownOpen && <CartDropdown />}
      </nav>
    </Fragment>
  );
};

export default NavigationBar;
