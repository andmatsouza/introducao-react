import React from "react";
import Avatar from "../Avatar";
import UserInfo from "../UserInfo";

function Comment(props) {

  function formatDate(date){
    return date.toLocaleDateString();
  }
  return(
    <div>
      <hr />
      <Avatar user={props.author}/><br />
      <UserInfo user={props.author} /> <br /><br />
      <span>{props.text}</span><br />
      <span>{formatDate(props.date)}</span><br />

      <hr />
    </div>
  )
}

export default Comment;