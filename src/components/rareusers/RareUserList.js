import React, { useContext, useEffect } from "react";
import { RareUserContext } from "./RareUserProvider";
import { ProfileContext } from "../auth/AuthProvider";
import "./rareuser.css";

export const RareUserList = () => {
  const { rareUsers, getRareUsers } = useContext(RareUserContext);
  const { profile, getProfile } = useContext(ProfileContext)

  useEffect(() => {
      getProfile()
  }, [])

  useEffect(() => {
    getRareUsers();
  }, []);

  const listFilter = (rareuser) => {
    return (
      <>
        {
            <div key={`userProfileDiv--${rareuser.id}`} className="allUserList">
              <div>
                <img
                  style={{ height: "150px", marginRight: "20px" }}
                  src={
                    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  }
                  alt="profile icon"
                  key={`userProfilePic--${rareuser.id}`}
                />
              </div>
              <div key={`userName--${rareuser.id}`}>
                <p>{rareuser.user.first_name} {rareuser.user.last_name}</p>
                <p>{rareuser.user.email}</p>
                <p>{rareuser.user.is_staff ? '🚔 Is staff' : 'Not staff'}</p>
              </div>
            </div>
        }
      </>
    );
  };

  return (
    <>
    { profile?.rareuser?.user?.is_staff ?  
      <div className="userListWrapper">
        <h2>
          <b>RareUser List</b>
        </h2>
        {rareUsers.map((rareuser) => {
        return listFilter(rareuser);
      })}
      </div>
    
    : <h2>🛑 You're not an admin. Access Denied</h2> }
    </>
  );
};
