import React, { useState } from "react";
import PocketBase, { Record } from "pocketbase";
import Link from "next/link";
import { Main, DeleteNoteIcon, CreateNote } from "components";
import DBConnection from "helpers/DBConnection";
import { note } from "global/types";
import { errorMsg } from "helpers/messages";

export const dynamic = "auto",
  dynamicParams = true,
  revalidate = 0,
  fetchCache = "auto",
  runtime = "nodejs",
  prefferredRegion = "auto";

const getNotes = async () => {
  const db = await DBConnection();
  try {
    const data = await db?.records.getList("notes");
    return await data?.items;
  } catch (err) {
    errorMsg("Something went wrong during getting notes", err)    
  }
};

const serverIP = process.env.SERVER_IP as string;

const NotesPage = async () => {
  const notes = await getNotes();

  return (
    <Main>
      <div className="grid grid-flow-col p-4 grid-cols-6 gap-4">
        <div className="grid gap-5 text-primary-i col-span-2">

          {notes?.map((note) => (
            <Note note={note} key={note.id}/>
          ))}
        </div>
        <div className="col-span-3">
          <CreateNote serverIP={serverIP} />
        </div>
      </div>
    </Main>
  );
};

const Note = ({ note }: any) => {
  const { id, title, content, created } = note || {};

  return (
    <>
      <div className="px-5 py-3 bg-primary shadow rounded overflow-hidden h-fit" id={id} >
        <Link href={`/notes/${id}`}>
          <h2 className="text-xl font-semibold hover:underline inline">{title}</h2>
        </Link>
        <p className="text-ellipsis overflow-hidden line-clamp-3">{content}</p>
        <div className="flex justify-between">
          <p>
            <time dateTime={created} />
            Created:{" "}
            <span>
              {new Date(created).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </p>
          <DeleteNoteIcon id={id} serverIP={serverIP} />
        </div>
      </div>
    </>
  );
};

export default NotesPage;
