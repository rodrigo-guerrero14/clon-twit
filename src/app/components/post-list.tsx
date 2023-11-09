import React from "react";
import PostCard from "./post-card";
import { type Post } from "../types/posts";

const PostList = ({ posts }: { posts: Post[] | null }) => {
  return (
    <>
      {posts?.map((post) => {
        const { id, user, content } = post;

        const {
          username: userName,
          name: userFullName,
          avatar_url: avatarUrl,
        } = user;

        return (
          <PostCard
            key={id}
            userName={userName}
            userFullName={userFullName}
            avatarUrl={avatarUrl}
            content={content}
          />
        );
      })}
    </>
  );
};

export default PostList;
