export const getComments = () => {
    return fetch("http://localhost:8000/comments", {
        method: "GET",
        headers: {
            "Authorization": `Token ${localStorage.getItem("rare_user_id")}`,
        }
    })
        .then(res => res.json())
}

export const getCommentById = (id) => {
    return fetch("http://localhost:8000/comments", {
        method: "GET",
        headers: {
            "Authorization": `Token ${localStorage.getItem("rare_user_id")}`,
        }
    })
        .then(res => res.json())
}

export const createNewComment = comment => {
    return fetch("http://localhost:8000/comments", {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("rare_user_id")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(comment)
    })
        .then(getComments)
}

export const editComment = (comment) => {
    return fetch(`http://localhost:8000/comments/${comment.id}`, {
        method: 'PUT',
        headers: {
            "Authorization": `Token ${localStorage.getItem("rare_user_id")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(comment)
    })
}

export const deleteComment = (comment_id) => {
    return fetch(`http://localhost:8000/comments/${comment_id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("rare_user_id")}`,
        }
    })
        .then(getComments)
}










