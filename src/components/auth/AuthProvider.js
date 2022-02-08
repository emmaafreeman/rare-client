import React, { useState } from "react"
export const ProfileContext = React.createContext()

export const ProfileProvider = (props) => {
    const [profile, setProfile] = useState({events:[]})
    const [users, setUsers] = useState([])


    const getProfile = () => {
        return fetch("http://localhost:8000/myprofile", {
            method: "GET",
            headers: {
                "Authorization": `Token ${localStorage.getItem("rare_user_id")}`
            }
        })
            .then(response => response.json())
            .then(setProfile)
    }

    const getUsers = () => {
        return fetch("http://localhost:8088/rareusers", {
            method: "GET",
            headers: {
                "Authorization": `Token ${localStorage.getItem("rare_user_id")}`
            }
        })
            .then(res => res.json())
            .then(setUsers)
    }


    const getUserById = (user_id) => {
		return fetch(`http://localhost:8088/rareusers/${user_id}`, {
            method: "GET",
            headers: {
              "Authorization": `Token ${localStorage.getItem("rare_user_id")}`,
            }
        })
			.then(res => res.json())
    }

    const addUsers = (userObj) => {
        return fetch("http://localhost:8088/rareusers", {
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("rare_user_id")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userObj)
        })
        .then(getUsers)
    }

    const updateUser = (user) => {
        return fetch((`http://localhost:8088//items/${user.id}`), {
            method: "PUT",
            headers: {
                "Authorization": `Token ${localStorage.getItem("rare_user_id")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(getUsers)
    }

    const deleteUser = (userId) => {
        return fetch((`http://localhost:8088/posts/${userId}`), {
            method: "DELETE",
            headers: {
              "Authorization": `Token ${localStorage.getItem("rare_user_id")}`,
              "Content-Type": "application/json"  
            },
        })
            .then(getUsers)
    }

    return (
        <ProfileContext.Provider value={{
            profile, getProfile, users, setUsers, getUsers, addUsers, getUserById, updateUser, deleteUser
        }}>
            {props.children}
        </ProfileContext.Provider>
    )
}
