export const getTags = () => {
    return fetch("http://localhost:8000/tags", {
        method: "GET",
        headers: {
          "Authorization": `Token ${localStorage.getItem("rare_user_id")}`,
        }
    })
        .then(res => res.json())
}

export const addTag = tag => {
    return fetch("http://localhost:8000/tags", {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("rare_user_id")}`,
            "Content-Type": "application/json"
        },
        body:JSON.stringify(tag)
    })
        .then(res => res.json())
}

export const deleteTag = (tag_id) => {
    return fetch(`http://localhost:8000/tags/${tag_id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Token ${localStorage.getItem("rare_user_id")}`,
          "Content-Type": "application/json"  
        },
    })
        .then(getTags)
}
  
export const editTags = (tag) => {
    return fetch(`http://localhost:8000/tags/${tag.id}`, {
        method: 'PUT',
        headers: {
            "Authorization": `Token ${localStorage.getItem("rare_user_id")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tag)
    })
        // .then(res => res.json())  204--server didn't sent anything back
}