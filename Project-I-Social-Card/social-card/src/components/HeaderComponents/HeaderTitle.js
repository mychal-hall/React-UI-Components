import React from "react";
import "./Header.css";

import HeaderContent from "./HeaderContent";

function HeaderTitle() {
  return (
    <div className="headTitle">
      <h2 className="authorID">Lambda School</h2>
      <p className="accountDate">@LambdaSchool ∙ 26 jan</p>
      <HeaderContent />
    </div>
  );
}

export default HeaderTitle;
