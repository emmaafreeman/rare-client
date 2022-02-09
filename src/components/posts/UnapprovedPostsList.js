import React, { useEffect, useState, useContext } from "react";
import  {getPosts} from "./PostManager";
import { ProfileContext } from "../auth/AuthProvider";
import { editPost } from "./PostManager";


export const UnapprovedPostsList = () => {
  const [ posts, setPosts ] = useState([])
  const [ unapprovedPosts, setUnapprovedPosts] = useState([])

  useEffect(() => {
    getPosts().then(postsData => setPosts(postsData))
  }, [])

  useEffect(() => {
    if(posts){
        const filteredPosts = posts.filter(post => post.approved === false)
        setUnapprovedPosts(filteredPosts)
    }
  }, [posts])

  const { profile, getProfile } = useContext(ProfileContext)

  useEffect(() => {
      getProfile()
  }, [])

  return(
      <>
    {
    profile?.rareuser?.user?.is_staff ?  
        <div>
            <h2>Unapproved Posts</h2>
            <ul>
                {
                unapprovedPosts.map(post => {
                    return (
                    <div>
                        <li key={post.id}>
                            <div key={`/posts/${post.id}`}>{post.title}</div>
                            <img src={post.image_url} alt='post_image' className='post_detail_img'/>
                            <div key={`/posts/${post.id}`}>{post.publication_date}</div>
                            <p className='post_detail_date'>Posted on {post.content}</p>
                            <p className='post_detail_user'>Posted by user {post?.author?.user?.username}</p>
                        </li>
                        <button>Approve</button>
                    </div>
                    )
                })
                }
            </ul>
        </div>
    : <h2>🛑 You're not an admin. Access Denied</h2>
    }
    </>
  )
}