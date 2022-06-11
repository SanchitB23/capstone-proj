import Link from "next/link";
import React, { Fragment } from "react";
import styles from "./nav.module.scss";
import { signIn, signOut, useSession } from "next-auth/react";
import CrwnLogo from "../../assets/crown.svg";

const NavigationBar = () => {
  const { status, data } = useSession();
  console.log("nav", data, status);
  return (
    <Fragment>
      <nav className={styles.navigation}>
        <Link href={"/"}>
          <CrwnLogo className={styles.logo} />
        </Link>
        <div className={styles.navLinkContainer}>
          <Link href={"/li"}>
            <div className={styles.link}>Shop</div>
          </Link>
          {status === "authenticated" ? (
            <div
              onClick={() => signOut({ redirect: false, callbackUrl: "/" })}
              className={styles.link}
            >
              SignOut
            </div>
          ) : (
            <div onClick={() => signIn()} className={styles.link}>
              SignIn
            </div>
          )}
        </div>
      </nav>
    </Fragment>
  );
};

export default NavigationBar;
