import React, { useEffect, useContext } from "react"
import { ProfileContext } from "./AuthProvider.js"
import "./Profile.css"


export const Profile = (props) => {
    const { profile, getProfile } = useContext(ProfileContext)

    useEffect(() => {
        getProfile()
    }, [])

    return (
        <article className="profile">
            <header>
                <h1>Your Profile</h1>
            </header>
            <section className="profile__info">
                <header className="profile__header">
                    <h3>Your Info</h3>
                </header>
                <div className="profile__name">
                    Welcome: {profile.rareuser && profile.rareuser.user.first_name} {profile.rareuser && profile.rareuser.user.last_name}
                </div>
                <div className="profile__username">Username: {profile.rareuser && profile.rareuser.user.username}</div>
                <div className="profile__bio">About you: {profile.rareuser && profile.rareuser.bio}</div>
            </section>
        </article>
    )
}