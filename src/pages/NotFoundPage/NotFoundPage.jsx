import { Link } from "react-router-dom";
import "./NotFoundPage.scss";

export default function NotFoundPage() {
  return (
    <div className="notfound">
      <h1 className="notfound__title">404 Not Found</h1>
      <p className="notfound__message">
              Oops, something went wrong. The page you are looking for does not exist.
      </p>
          <p className="notfound__emoji">:(</p>
          <Link to="/" className="notfound__back">
        <p>Go back</p>
      </Link> 
    </div>
  );
}
