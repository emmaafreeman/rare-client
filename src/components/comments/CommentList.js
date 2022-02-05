import React, { useEffect, useState, useContext } from "react";
import  {getComments, createNewComment, deleteComment} from "./CommentManager";
import { ProfileContext } from "../auth/AuthProvider";

export const CommentList = ({postId}) => {
  const [ comments, setComments] = useState([])
  const [ theComments, setTheComments] = useState([])
  const [ comment, setComment ] = useState({})
  const [ commentInput, setCommentInput ] = useState(false) 

  const { profile, getProfile } = useContext(ProfileContext)

  useEffect(() => {
      getProfile()
  }, [])

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
                {(comment?.author?.id === profile?.rareuser?.id)?<button onClick={() => {deleteComment(comment.id)
                  .then(() => {getComments().then((data)=> setComments((data)))})}}>Delete</button>:""}
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