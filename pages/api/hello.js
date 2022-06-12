// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { addCollectionAndDocs } from "../../utils/firebase";
import SHOP_DATA from "../../data/shop-data";

export default function handler(req, res) {
  addCollectionAndDocs("categories", SHOP_DATA).then(() =>
    console.log("data added")
  );
  res.status(200).json("ok");
}
