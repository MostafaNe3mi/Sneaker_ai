import { Link } from "react-router-dom";
import "../Styles/Feed.css";

function Feed() {
  return (
    <main>
      <section className="feed-hero">
        <div className="feed-hero-content">
          <p className="feed-hero-eyebrow">Kicks With Style</p>
          <h1>Make every step count.</h1>
          <p className="feed-hero-description">
            Find your next favorite pair and stay one step ahead of every drop.
          </p>
          <div className="feed-hero-actions">
            <Link className="feed-hero-button feed-hero-button-primary" to="/in-stock">
              Shop in stock
            </Link>
            <Link className="feed-hero-button feed-hero-button-secondary" to="/upcoming">
              Explore upcoming
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Feed;
