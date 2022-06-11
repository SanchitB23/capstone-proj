import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { googleProviderConfig } from "../../../constants";
import {
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../../utils/firebase";

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  // https://next-auth.js.org/providers/overview
  providers: [
    GoogleProvider(googleProviderConfig),
    CredentialsProvider({
      name: "Sign in with Email - Password",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter Email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter Password",
        },
      },
      async authorize(credentials) {
        console.log("authorize 1", credentials);
        const { email, password } = credentials;
        try {
          const { user } = await signInAuthUserWithEmailAndPassword(
            email,
            password
          );
          console.log("authorize 2", user);
          return user;
        } catch (error) {
          console.log("authorize 3", error);
          throw new Error(error);
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        return await createUserDocumentFromAuth({
          uid: profile.sub,
          name: profile.name,
          email: profile.email,
        });
      }
      return true; // Do different verification for other providers that don't have `email_verified`
    },
  },
  pages: {
    signIn: "/auth",
  },
});
