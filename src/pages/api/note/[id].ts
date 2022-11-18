import { NextApiRequest, NextApiResponse } from "next";
import PocketBase from "pocketbase";
import DBController from "helpers/DBConnection";
import DBConnection from "helpers/DBConnection";
import { errorMsg } from "helpers/messages";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console;
  switch (req.method) {
    case "GET": {
      await handleGet(req, res);
      break;
    }
    case "DELETE": {
      await handleDelete(req, res);
      break;
    }
  }
  res.end()
};

const handleDelete = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = await DBConnection();
  try {
    const code = await db?.records.delete("notes", req.query.id as string);
    res.status(200).json({ code });
  } catch (err: any) {
    errorMsg("Something went wrong during deleting a note", err, res)
  }
};

const handleGet = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ id: req.query.id });
};

export default handler;
