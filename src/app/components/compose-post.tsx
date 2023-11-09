import React from "react";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { Avatar } from "@nextui-org/react";
import ComposeTextArea from "./compose-text-area";

const ComposePost = ({ userAvatarUrl }: { userAvatarUrl: string }) => {
  const addPost = async (formData: FormData) => {
    "use server";
    const content = formData.get("content");
    if (content === null) return;
    const supabase = createServerActionClient({ cookies });
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user === null) return;
    await supabase.from("posts").insert({ content, user_id: user.id });

    revalidatePath("/");
  };
  return (
    <form
      className="flex flex-row text-white space-x-4 p-4 border-b border-white/20"
      action={addPost}
    >
      <Avatar radius="full" size="md" src={userAvatarUrl} />
      <div className="flex flex-1 flex-col gap-y-4">
        <ComposeTextArea />
        <button
          className="bg-sky-500 text-sm font-bold rounded-full px-5 py-2 self-end text-white"
          type="submit"
        >
          Postear
        </button>
      </div>
    </form>
  );
};

export default ComposePost;
