import React, { useEffect, useState } from "react";
import  {getComments, createNewComment} from "./CommentManager";

export const CommentList = ({postId}) => {
  const [ comments, setComments] = useState([])
  const [ theComments, setTheComments] = useState([])
  const [ comment, setComment ] = useState({})
  const [ commentInput, setCommentInput ] = useState(false) 

  useEffect(() => {
    getComments().then((data)=> setComments((data)))
  }, [])

  useEffect(() => {
    const relatedComments = comments.filter(comment => comment.post.id === postId )
    setTheComments(relatedComments)
  },[comments, postId])

  const handleInputChange = (event) => {
    const newComment = {...comment}
    newComment[event.target.name] = event.target.value
    setComment(newComment)
  }

  return(
    <div>
      <h2>Comments</h2>
      <ul>
        { 
        theComments.length > 0?
          theComments.map(comment => {
            return <section key={comment.id}>
              <li>
                <p>{comment.content} <i><small>Posted by {comment?.author?.user?.first_name}</small></i></p>
              </li>
            </section>
          }):""
        }
      </ul>
      <button onClick={() => {setCommentInput(!commentInput)}}>Add Comment</button>
        {commentInput? <div><input type="text" name="content" value={comment.content} onChange={handleInputChange}/>
                         <button onClick={() => {
                           createNewComment({
                             content: comment.content,
                             postId: postId
                           }).then(() => {getComments().then((data)=> setComments((data)))})                        
                         }}>Submit Comment</button>

                       </div> : ""}
    </div>
  )
}