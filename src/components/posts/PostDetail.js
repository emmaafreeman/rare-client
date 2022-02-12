import React from "react";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { getPostById } from "./PostManager";
import { CommentList } from "../comments/CommentList";
import { deletePost } from "./PostManager";

export const PostDetail = () => {
  const [post, setPost] = useState({});
  const { postId } = useParams();
  const history = useHistory();

  useEffect(() => {
    getPostById(postId).then((data) => {
      setPost(data);
    });
  }, []);

  return (
    <>
      {/* <div className="post_detail">
        <h3 className="post_detail_title">{post.title}</h3>
        <img
          src={post.image_url}
          alt="post_image"
          className="post_detail_img"
        />
        <p className="post_detail_date">Posted on {post.publication_date}</p>
        <p className="post_detail_user">
          Posted by user {post?.author?.user?.username}
        </p>

        <button
          onClick={() => {
            history.push(`/posts/edit/${post.id}`);
          }}
        >
          Edit{" "}
        </button>
        <button
          onClick={() => {
            deletePost(parseInt(postId)).then(history.push(`/posts`));
          }}
        >
          Delete{" "}
        </button>
        <div className="post_detail_comments">
          <CommentList postId={parseInt(postId)} />
        </div>
      </div> */}

      <div
        style={{
          border: "1px solid lightgray",
          padding: ".5em 2em",
          margin: "-2em 6em",
        }}
      >
        <h2 style={{ display: 'flex', justifyContent: 'center', }}>Expanded View of '{post.title}' Post</h2>

        <div style={{ display: 'flex', justifyContent: 'center', }}>
        <img
          src={post.image_url}
          alt="post_image"
          className="post_detail_img"
        />
        </div>

        <h3 className="post_detail_title" style={{ marginBottom: "-15px" }}>
          {post.title}
        </h3>
        <p
          className="post_detail_user"
          style={{ fontSize: "15px", color: "gray" }}
        >
          Posted by RareUser: {post?.author?.user?.first_name}{" "}
          {post?.author?.user?.last_name} on {post.publication_date}
        </p>
        <p>{post?.content}</p>

        <div>
          <button style={{ marginRight: '10px'}}
            onClick={() => {
              history.push(`/posts/edit/${post.id}`);
            }}
          >
            Edit{" "}
          </button>
          
          <button
            onClick={() => {
              deletePost(parseInt(postId)).then(history.push(`/posts`));
            }}
          >
            Delete{" "}
          </button>
          <div  style={{ fontSize: "12px", color: "blue" }} className="post_detail_comments">
            <CommentList postId={parseInt(postId)} />
          </div>

        </div>
      </div>
    </>
  );
};
