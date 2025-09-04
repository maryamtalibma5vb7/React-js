import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faComment, faShare } from "@fortawesome/free-solid-svg-icons";

function FbPosts({ p1img, p1cap }) {
  return (
    <div>
      <div style={{ border: "1px solid black", padding: "10px", margin: "40px auto", width: "50%" }}>
        <img style={{ width: "100%" }} src={p1img} alt="Post" />
        <p>{p1cap}</p>
        <div style={{ display: "flex", justifyContent: "space-around", marginTop: "10px" }}>
          <FontAwesomeIcon icon={faThumbsUp} />
          <FontAwesomeIcon icon={faComment} />
          <FontAwesomeIcon icon={faShare} />
        </div>
      </div>
    </div>
  );
}

export default FbPosts;
