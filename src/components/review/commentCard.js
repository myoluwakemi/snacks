import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import Customer from '../../assests/customer.jpg'
import '../review/commentCard.css'

const CommentCard = ({ comment, customerName }) => {
  return (
    <div className="comment-card">
      <div className="customer-comment">
        <FontAwesomeIcon icon={faQuoteLeft} />
        <p>{comment}</p>
        <p className="customer-name">{customerName}</p>
      </div>
      <div className="customerImg">
          <img src={Customer} alt="customer"/>
      </div>
    </div>
  );
};
export default CommentCard;
