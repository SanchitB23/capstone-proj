import React from "react";
import SignUpForm from "../../components/auth/sign-up";
import SignInForm from "../../components/auth/sign-in";
import { getSession } from "next-auth/react";
import styles from "./auth.module.scss";

const Auth = () => {
  return (
    <div className={styles.container}>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};
export const getServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req });
  if (session && res) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};

export default Auth;
