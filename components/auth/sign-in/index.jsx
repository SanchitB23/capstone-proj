import React from "react";
import { Form, Formik } from "formik";
import { SigninSchema } from "../../../utils/yup";
import FormInputComponent from "../form-input";
import styles from "./sign-in.module.scss";
import Button, { BUTTON_TYPE_CLASSES } from "../../button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const router = useRouter();

  const onSubmit = async (values, { resetForm }) => {
    try {
      const res = await signIn("credentials", {
        redirect: false,
        callbackUrl: "/",
        ...values,
      });
      if (!res.error) {
        resetForm({ values: defaultFormFields });
        await router.push("/");
      } else {
        alert(res.error);
      }
    } catch (error) {
      alert(error.response.data);
    }
  };

  return (
    <div className={styles["sign-in-container"]}>
      <h2>Already have an account?</h2>
      <span>Sign in with email and password</span>
      <Formik
        initialValues={defaultFormFields}
        onSubmit={onSubmit}
        validationSchema={SigninSchema}
      >
        {({ isSubmitting, values }) => (
          <Form>
            <FormInputComponent
              type={"email"}
              name="email"
              placeholder="Email"
              values={values}
            />
            <FormInputComponent
              type={"password"}
              name="password"
              placeholder="Password"
              values={values}
            />
            <div className={styles.buttonContainer}>
              <Button type="Submit" disabled={isSubmitting}>
                Sign In
              </Button>
              <Button
                button_type={BUTTON_TYPE_CLASSES.google}
                onClick={() => signIn("google", { callbackUrl: "/" })}
              >
                Sign In with Google
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignInForm;
