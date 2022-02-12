import React, { useEffect, useState, useContext } from "react";
import { getPostsByAuthor } from "./PostManager";
import { ProfileContext } from "../auth/AuthProvider";

export const MyPosts = () => {
  const [myPosts, setMyPosts] = useState([]);
  const { profile, getProfile } = useContext(ProfileContext);

  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    if (profile.rareuser) {
      getPostsByAuthor(profile.rareuser.id).then((data) => {
        setMyPosts(data);
      });
    }
  }, [profile]);

  return (
    <div className="myPosts">
      <div
        style={{
          border: "1px solid lightgray",
          padding: ".5em 2em",
          margin: "-2em 6em",
        }}
      >
        <h1>My Posts</h1>
        {myPosts.length > 0 ? (
          myPosts.map((post) => {
            return (
              <>
                <h2
                  className="post_detail_title"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  {post?.title}
                </h2>

                <div style={{ display: "flex", justifyContent: "center" }}>
                  <img
                    src={post?.image_url}
                    style={{ maxHeight: "350px", justifyContent: "center" }}
                    alt="post_image"
                    className="post_detail_img"
                  />
                </div>

                <p
                  className="post_detail_user"
                  style={{ fontSize: "15px", color: "gray" }}
                >
                  Posted by RareUser {post?.author?.user?.first_name}{" "}
                  {post?.author?.user?.last_name} on {post?.publication_date}
                </p>

                <p>{post?.content}</p>
              </>
            );
          })
        ) : (
          <h3>You don't have any posts yet!</h3>
        )}
      </div>
    </div>
  );
};
