import React, { useEffect, useState, useContext} from "react";
import { getPostsByAuthor } from "./PostManager";
import { ProfileContext } from "../auth/AuthProvider";

export const MyPosts = () => {
    const [posts, setPosts] = useState([])
    const { profile, getProfile } = useContext(ProfileContext)
    const [authorId, setAuthorId] = useState(0)

    useEffect(() => {
        getProfile().then(setAuthorId(profile.rareuser.user.id))
    }, [])

    useEffect(() => {
        getPostsByAuthor(authorId).then((data) => {setPosts(data)})
    }, [])

    return (
        <div className='myPosts'>
            {
            posts.map(post => {
                return (
                    <div className='myPosts_post'>
                        <h3>{post?.title}</h3>
                        <img src={post?.image_url} alt='post_image'/>
                        <p>Posted on {post?.publication_date}</p>
                        <p>Posted by user {post?.author?.user?.username}</p>
                    </div>
                )
            })
            }
        </div>
    )
}