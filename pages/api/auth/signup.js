import {createAuthWithEmailAndPassword, createUserDocumentFromAuth,} from '../../../utils/firebase';
import {getCsrfToken} from "next-auth/react";
import axios from "axios";

async function handler(req, res) {
  if (req.method !== 'POST') {
    return;
  }
  const data = req.body;

  const {email, password, name} = data;
  let status, message
  try {
    const {user} = await createAuthWithEmailAndPassword(email, password);
    await createUserDocumentFromAuth(user, {name});
    const crsfToken = await getCsrfToken({req})
    await axios.post(`http://${req.headers.host}/api/auth/signin/credentials`, {
      email, password, crsfToken, callbackUrl: `http://${req.headers.host}`
    })
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      status = 422
      message = 'Cannot create user, email already in use'
    } else {
      console.log("error signup", error)
      status = 500
      message = 'user creation encountered an error'
    }
  } finally {
    res.status(status ?? 201).json(message ?? "User created")
  }

}

export default handler;
