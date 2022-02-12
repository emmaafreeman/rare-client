import React, { useEffect, useState, useContext } from "react";
import  { getUnapprovedPosts, approvePost } from "./PostManager";

export const UnapprovedPostsList = () => {
  const [ unapprovedPosts, setUnapprovedPosts] = useState([])

  useEffect(() => {
    getUnapprovedPosts().then(postsData => setUnapprovedPosts(postsData))
  }, [])

  return(
      <>
    {
        <div>
            {
                unapprovedPosts.length > 0 ?
                unapprovedPosts.map(post => {
                    return (
                    <>
                    <ul>
                        <li key={post.id}>
                            <div key={`/posts/${post.id}`}>{post.title}</div>
                            <img src={post.image_url} alt='post_image' className='post_detail_img'/>
                            <div key={`/posts/${post.id}`}>{post.publication_date}</div>
                            <p className='post_detail_date'>Posted on {post.content}</p>
                            <p className='post_detail_user'>Posted by user {post?.author?.user?.username}</p>
                        </li>
                        <button onClick={() => {
                            approvePost(
                                {
                                    id: post.id,
                                    author: post.author,
                                    title: post.title,
                                    category_id: post.category_id,
                                    publication_date: post.publication_date,
                                    image_url: post.image_url,
                                    content: post.content,
                                    user_id: post.author.user.id
                                }
                            ).then(() => {
                                getUnapprovedPosts().then(postsData => setUnapprovedPosts(postsData))
                            })
                        }}>Approve</button>
                    </ul>
                    </>
                    )
                })
                : <h2>🛑 You're not an admin. Access Denied</h2>
            }
        </div>
    }
    </>
  )
}