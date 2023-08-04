import React from "react";
import UseFetching from "../../hooks/UseFetching";
import { useParams } from "react-router-dom";

const ReviewDetails = () => {
  const { id } = useParams();
  const { loading, error, data } = UseFetching(
    `http://localhost:1337/api/reviews/` + id
  );
  if (loading) {
    return <p>loading...</p>;
  }
  if (error) {
    return <p>error</p>;
  }
  return (
    <div className="review-card">
      <div className="rating">{data.attributes.rating}</div>
      <div className="title">{data.attributes.title}</div>
      <small>console list</small>

      <p>{data.attributes.body}</p>
    </div>
  );
};

export default ReviewDetails;
