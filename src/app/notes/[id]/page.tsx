import { Main } from "components";
import { NotePageProps } from "global/types";
import DBConnection from "helpers/DBConnection";
import { errorMsg } from "helpers/messages";
import React from "react";

export const dynamic = "auto",
  dynamicParams = true,
  revalidate = 0,
  fetchCache = "auto",
  runtime = "nodejs",
  prefferredRegion = "auto";


const getNote = async (id: string) => {
  const db = await DBConnection();
  try {
    const data = await db?.records.getOne("notes", id);
    return data as any;
  } catch (err) {
    errorMsg("Something went wrong during getting a note", err);
  }
};

const NotePage = async ({ params }: NotePageProps) => {
  const id = params?.id;
  const { title, content, created, updated } = await getNote(id);

  return (
    <Main className="container mx-auto px-20">
      <h2 className="text-2xl mt-5 text-center">{title}</h2>
      <p>{content}</p>
    </Main>
  );
};

export default NotePage;
