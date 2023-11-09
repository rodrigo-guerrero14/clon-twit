"use client";
import React, { useRef, useEffect } from "react";
import { useFormStatus } from "react-dom";

const ComposeTextArea = () => {
  const { pending } = useFormStatus();
  const alreadySent = useRef(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textAreaRef.current === null) return;
    if (pending && !alreadySent.current) {
      alreadySent.current = false;
      textAreaRef.current.value = "";
      return;
    }
    alreadySent.current = pending;
  }, [pending]);
  return (
    <textarea
      ref={textAreaRef}
      name="content"
      rows={4}
      placeholder="¿que está pasando?"
      className="w-full text-2xl bg-black placegolder-gray-500 p-2"
    ></textarea>
  );
};

export default ComposeTextArea;
