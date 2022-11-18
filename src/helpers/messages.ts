import { NextApiResponse } from "next";

export const errorMsg = (
  msg: string,
  err: any,
  res?: NextApiResponse
) => {
  console.error(`${msg}:\n${err}`);
  if (res === undefined) return;
  res.status(err.status).json({ msg, err });
};
