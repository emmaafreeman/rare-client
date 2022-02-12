import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { deleteCategory, getCategories } from "./CategoryManager"
// import "./Categories.css"


export const CategoryList = () => {

    const [categories, setCategories] = useState([])
    
    const handleDelete = (id) => {
        deleteCategory(id)
        .then(() => {
            const remainingCategories = categories.filter( category => category.id !== id )
            setCategories(remainingCategories)
        })
    }

    useEffect(() => {
        getCategories().then((data) => setCategories(data))
    }, [])

    const history = useHistory()

    return(
        <>
        <div className='categories' style={{border: '1px solid lightgray', padding: '.5em 2em', margin: '-2em 6em'}}>
            <h1 className='categories_title'>Categories</h1>
            <button style={{ padding: '3px'}} onClick={() => history.push("/categories/create")}>
                Create Category
            </button>
            <ul className='categories_list'>
                {
                categories.map(category => {
                    return (
                        <li style={{padding: '5px 0', textDecoration: 'none'}}>
                          {category.label}
                          <button className='categories_edit' 
                          style={{marginLeft: '20px', padding: '3px'}} 
                          onClick={() => {history.push(`/categories/edit/${category.id}`)}}>Edit</button>
                          <button style={{marginLeft: '10px', padding: '3px'}} onClick={() => {handleDelete(category.id)}}>Delete Category</button>
                        </li>
                    )
                })
                }
            </ul>
        </div>
    </>
    )
}