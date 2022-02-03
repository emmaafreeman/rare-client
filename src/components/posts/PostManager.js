
export const getPosts = () => {
  return fetch("http://localhost:8000/posts", {
    method: "GET",
    headers: {
      "Authorization": `Token ${localStorage.getItem("rare_user_id")}`,
    }
  })
    .then(res => res.json())
}

export const getPostsByAuthor = (authorId) => {
  return fetch(`http://localhost:8000/posts?authorId=${authorId}`, {
    method: "GET",
    headers: {
      "Authorization": `Token ${localStorage.getItem("rare_user_id")}`,
    }
  })
    .then(res => res.json())
}

export const addPost = post => {
  return fetch("http://localhost:8000/posts", {
    method: "POST",
    headers: {
      "Authorization": `Token ${localStorage.getItem("rare_user_id")}`,
      "Content-Type": "application/json"  
    },
    body: JSON.stringify(post)
  })
    .then(getPosts)
}

export const getPostById = (id) => {
  return fetch(`http://localhost:8000/posts/${id}`, {
    method: "GET",
    headers: {
      "Authorization": `Token ${localStorage.getItem("rare_user_id")}`,
      "Content-Type": "application/json"  
    }
  })
  .then(res => res.json())
}

export const editPost = post => {
  return fetch(`http://localhost:8000/posts/${post.id}`, {
    method: "PUT",
    headers: {
        "Authorization": `Token ${localStorage.getItem("rare_user_id")}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(post)
  })
      .then(getPosts)
}

export const deletePost = (post_id) => {
  return fetch(`http://localhost:8000/posts/${post_id}`, {
      method: "DELETE",
      headers: {
          "Authorization": `Token ${localStorage.getItem("rare_user_id")}`,
      }
  })
      .then(getPosts)
}