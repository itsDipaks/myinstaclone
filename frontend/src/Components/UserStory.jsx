import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AllUsersProfile} from "../ReduxStore/Profile/profile.action";
import "../CompliedSassCss/css/userstory.css";
import { baseUrl } from "../utils/Baseurl";
const UserStory = () => {
  const dispatch = useDispatch();

  const {data} = useSelector((store) => store.Profile);

  console.log(data);
  useEffect(() => {
    dispatch(AllUsersProfile());
  }, []);

  return (
    <>
      <div className="container">
<div className="story-container">
{ data && data.map((el)=>
        <div className="content">
          <div className="img-container">
            <img
              src={`${baseUrl}/static/${el.profileImagePath}`}
              alt="dd"
            />
          </div>
          <div className="text-container">{el.username}</div>
        </div>
          ) 
        }
        </div>
      </div>
    </>
  );
};

export default UserStory;
