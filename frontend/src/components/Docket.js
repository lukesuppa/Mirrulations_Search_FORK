import React from "react";
import "../styles/Docket.css"; // Import the CSS file
import Button from "./Button";

const Docket = ({
 title,
 id,
 link,
 docket_type,
 docket_agency,
 documents_containing,
 total_documents,
 comment_date_range,
 comments_containing,
 total_comments,
}) => {
 return (
  <div className="search-result">
   <div className="header">
    <div className="h-row1">
     <div className="h-col1">
      <p>
       {docket_agency} - {docket_type} -{" "}
       <a href={link} target="_blank" rel="noopener noreferrer">
        {id}
       </a>
      </p>
     </div>
     <div className="h-col2">
      <Button />
     </div>
    </div>
    <div className="h-row2">
     <p>{title}</p>
    </div>
   </div>
   <div className="content">
    <div className="c-col1"></div>
    <div className="c-col2"></div>
    <div className="c-col3"></div>
    <div className="c-col4"></div>
   </div>
  </div>
 );
};

export default Docket;
