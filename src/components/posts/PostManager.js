
export const getPosts = () => {
  return fetch("http://localhost:8001/posts", {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("rare_user_id")}`
    }
  })
    .then(res => res.json())
}

export const addPost = post => {
  return fetch("http://localhost:8001/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("rare_user_id")}`
    },
    body: JSON.stringify(post)
  })
    .then(getPosts)
}

export const getPostById = (id) => {
  return fetch(`http://localhost:8001/posts/${id}`,{
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("rare_user_id")}`
    }
  })
      .then(res => res.json())
}

export const editPost = post => {
  return fetch(`http://localhost:8001/posts/${post.id}`, {
      method: "PUT",
      headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${localStorage.getItem("rare_user_id")}`
      },
      body: JSON.stringify(post)
  })
      .then(getPosts)
}