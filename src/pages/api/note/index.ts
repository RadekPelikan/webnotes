import DBController from "helpers/DBConnection";
import { errorMsg } from "helpers/messages";
import { NextApiRequest, NextApiResponse } from "next";
import PocketBase from "pocketbase";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console;
  switch (req.method) {
    case "POST": {
      await handlePost(req, res);
      break;
    }
  }
  res.end()
};

const handlePost = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = await DBController();
  try {
    const result = await db?.records.create("notes", req.body);
    res.status(200).json({result});
  } catch (err:any) {
    errorMsg("Something went wrong during creating a note", err, res)
  }
};

export default handler;
