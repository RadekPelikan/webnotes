"use client";

import React, { useState } from "react";
import { ImBin2 } from "react-icons/im";
import {
  DeleteNoteIconProps,
  CreateNoteProps,
} from "global/types";
import axios from "axios";
import { useRouter } from "next/navigation";

export const DeleteNoteIcon = ({ id, serverIP }: DeleteNoteIconProps) => {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const res = await axios.delete(`${serverIP}/api/note/${id}`);
      const { data } = res;
      console.log(data);
    } catch (err) {
      console.error(err);
    }
    router.refresh();
  };

  return (
    <button className="hover:text-red-600" onClick={handleDelete}>
      <ImBin2 />
    </button>
  );
};

export const CreateNote = ({ serverIP }: CreateNoteProps) => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handlePost = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setTitle("");
    setContent("");

    try {
      const res = await axios.post(`${serverIP}/api/note`, {
        title,
        content,
      });
      const { data } = res;
      console.log(data);
    } catch (err) {
      console.error(`Something went wrong during creating a note:\n${err}`)
    }
    router.refresh();
  };

  return (
    <div className="grid gap-4 justify-items-center max-w-xl">
      <input
        type="text"
        className="w-full focus:outline-none"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <textarea
        className="resize-none w-full focus:outline-none"
        onChange={(e) => setContent(e.target.value)}
        value={content}
      ></textarea>
      <button
        type="submit"
        className="px-5 py-1 border-2 border-primary border-solid rounded"
        onClick={handlePost}
      >
        CREATE
      </button>
    </div>
  );
};
