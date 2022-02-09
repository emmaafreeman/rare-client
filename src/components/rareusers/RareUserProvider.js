import React, { useState } from "react"
export const RareUserContext = React.createContext()

export const RareUserProvider = (props) => {
    const [rareUsers, setRareUsers] = useState([])
   

    const getRareUsers = () => {
        return fetch("http://localhost:8000/rareusers", {
            method: "GET",
            headers: {
                "Authorization": `Token ${localStorage.getItem("rare_user_id")}`
            }
        })
            .then(res => res.json())
            .then(setRareUsers)
    }


    const getRareUserById = (rareuser_id) => {
		return fetch(`http://localhost:8000/rareusers/${rareuser_id}`, {
            method: "GET",
            headers: {
              "Authorization": `Token ${localStorage.getItem("rare_user_id")}`,
            }
        })
			.then(res => res.json())
    }

    const addRareUsers = (rareuserObj) => {
        return fetch("http://localhost:8000/rareusers", {
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("rare_user_id")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(rareuserObj)
        })
        .then(getRareUsers)
    }

    const updateRareUser = (rareuser) => {
        return fetch((`http://localhost:8000//items/${rareuser.id}`), {
            method: "PUT",
            headers: {
                "Authorization": `Token ${localStorage.getItem("rare_user_id")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(rareuser)
        })
            .then(getRareUsers)
    }

    const deleteRareUser = (rareuserId) => {
        return fetch((`http://localhost:8000/posts/${rareuserId}`), {
            method: "DELETE",
            headers: {
              "Authorization": `Token ${localStorage.getItem("rare_user_id")}`,
              "Content-Type": "application/json"  
            },
        })
            .then(getRareUsers)
    }

    return (
        <RareUserContext.Provider value={{
            rareUsers, setRareUsers, getRareUsers, addRareUsers, getRareUserById, updateRareUser, deleteRareUser
        }}>
            {props.children}
        </RareUserContext.Provider>
    )
}
