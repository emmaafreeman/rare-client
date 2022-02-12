import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { deleteTag, getTags } from "./TagManager"



export const TagList = () => {

    const [tags, setTags] = useState([])
    
    const handleDelete = (id) => {
        deleteTag(id)
        .then(() => {
            const remainingTags = tags.filter( tag => tag.id !== id )
            setTags(remainingTags)
        })
    }

    useEffect(() => {
        getTags().then((data) => setTags(data))
    }, [])

    const history = useHistory()

    return(
        <>
        <div className='tags' style={{border: '1px solid lightgray', padding: '.5em 2em', margin: '-2em 6em'}}>
            <h1 className='tags_title'>Tags</h1>
            <button style={{ padding: '3px'}} onClick={() => history.push("/tags/create")}>
                Create Tag
            </button>
            <ul className='tags_list'>
                {
                tags.map(tag => {
                    return (
                        <li style={{padding: '5px 0', textDecoration: 'none'}}>
                          {tag.label}
                          <button className='tags_edit' 
                          style={{marginLeft: '20px', padding: '3px'}} 
                          onClick={() => {history.push(`/tags/edit/${tag.id}`)}}>Edit Tag</button>
                          <button style={{marginLeft: '10px', padding: '3px'}} onClick={() => {handleDelete(tag.id)}}>Delete Tag</button>
                        </li>
                    )
                })
                }
            </ul>
        </div>
    </>
    )
}