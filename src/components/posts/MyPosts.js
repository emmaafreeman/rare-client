import React, { useEffect, useState, useContext} from "react";
import { getPostsByAuthor } from "./PostManager";
import { ProfileContext } from "../auth/AuthProvider";

export const MyPosts = () => {
    const [myPosts, setMyPosts] = useState([])
    const { profile, getProfile } = useContext(ProfileContext)

    useEffect(() => {
        getProfile()
    }, [])

    useEffect(() => {
        const authorId = profile?.rareuser?.id
        getPostsByAuthor(authorId).then((data) => {setMyPosts(data)})
    }, [])

    return (
        <div className='myPosts'>
            {
            myPosts.map(post => {
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