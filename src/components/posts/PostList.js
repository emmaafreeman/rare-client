import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import  {getPosts} from "./PostManager";

export const PostList = () => {
  const [ posts, setPosts] = useState([])
  const history = useHistory()

  useEffect(() => {
    getPosts().then(postsData => setPosts(postsData))
  }, [])

  return(
    <div style={{border: '1px solid lightgray', padding: '.5em 2em', margin: '-2em 6em'}}>
    <h1>Posts</h1>
      <article>
        {
          posts.filter(post => post.approved === true)
          .map(post => {
            return <section key={post.id}>
              <ul>
                <Link 
                style={{textDecoration: 'none'}}
                to={`/posts/${post.id}`}>{post.title}</Link><br/>
              </ul>
            </section>
          })
        }
      </article>
      <button style={{padding: '3px'}} onClick={() => history.push("/posts/create")}>Create Post</button>
    </div>
  )
}