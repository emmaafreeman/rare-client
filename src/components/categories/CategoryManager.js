export const getCategories = () => {
    return fetch("http://localhost:8000/categories", {
        method: "GET",
        headers: {
          "Authorization": `Token ${localStorage.getItem("rare_user_id")}`,
        }
    })
        .then(res => res.json())
}

export const addCategory = category => {
    return fetch("http://localhost:8000/categories", {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("rare_user_id")}`,
            "Content-Type": "application/json"
        },
        body:JSON.stringify(category)
    })
        .then(res => res.json())
}

export const deleteCategory = (category_id) => {
    return fetch(`http://localhost:8000/categories/${category_id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Token ${localStorage.getItem("rare_user_id")}`,
          "Content-Type": "application/json"  
        },
    })
        .then(getCategories)
}
  
export const editCategories = (category) => {
    return fetch(`http://localhost:8000/categories/${category.id}`, {
        method: 'PUT',
        headers: {
            "Authorization": `Token ${localStorage.getItem("rare_user_id")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(category)
    })
        .then(getCategories)
        // .then(res => res.json())  204--server didn't sent anything back
}