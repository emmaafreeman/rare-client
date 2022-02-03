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
        if (profile.rareuser){
            getPostsByAuthor(profile.rareuser.id).then((data) => {setMyPosts(data)})
        }
    }, [profile])

    return (
        <div className='myPosts'>
            { myPosts.length > 0?
            myPosts.map(post => {
                return (
                    <div className='myPosts_post'>
                        <h3>{post?.title}</h3>
                        <img src={post?.image_url} alt='post_image'/>
                        <p>Posted on {post?.publication_date}</p>
                        <p>Posted by user {post?.author?.user?.username}</p>
                    </div>
                )
            }) : <h3>You don't have any posts yet!</h3>}
        </div>
    )
}