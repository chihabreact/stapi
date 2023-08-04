import "./HomePage.style.scss";

import UseFetching from "../../hooks/UseFetching";
import { Link } from "react-router-dom";
const HomePage = () => {
  const { loading, error, data } = UseFetching(
    "http://localhost:1337/api/reviews"
  );
  if (loading) {
    return <p>loading...</p>;
  }
  if (error) {
    return <p>error</p>;
  }
  console.log(data);
  return (
    <div>
      {data.map((review) => {
        return (
          <div key={review.id} className="review-card">
            <div className="rating">{review.attributes.rating}</div>
            <div className="title">{review.attributes.title}</div>

            <small>console list</small>

            <p>{review.attributes.body}</p>
            <Link to={`/details/${review.id}`}>read more</Link>
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
