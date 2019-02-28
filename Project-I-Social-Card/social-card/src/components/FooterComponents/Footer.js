import React from "react";
import "./Footer.css";


function commentClicked(){
    console.log('you clicked me');
}

function shareClicked(){
    console.log('you clicked me');
}

function heartClicked(){
    console.log('you clicked me');
}

function mailClicked(){
    console.log('you clicked me');
}

function Footer() {
  return (
    <div className="footerBar">
      <i onClick={commentClicked} className="far fa-comment-alt" />
      <i onClick={shareClicked} className="fas fa-sync-alt" />
      <i onClick={heartClicked} className="far fa-heart" />
      <i onClick={mailClicked} className="far fa-envelope" />
    </div>
  );
}
export default Footer;
