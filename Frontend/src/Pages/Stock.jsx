import { Link, useSearchParams } from "react-router-dom";
import { sneakers, upcoming, womensSneakers } from "../data/sneakers.js";
import "../Styles/InfoPages.css";
import "../Styles/Stock.css";

function SneakerCard({ sneaker, isWomens = false }) {
  return (
    <Link
      className={`sneaker-card${isWomens ? ` sneaker-card-women sneaker-tone-${sneaker.tone}` : ""}`}
      to={`/sneakers/${sneaker.id}`}
      aria-label={`${sneaker.brand} ${sneaker.name}, $${sneaker.price}`}
    >
      <div className="sneaker-card-image-wrap">
        {isWomens && <span className="sneaker-gender-tag">Women&apos;s edit</span>}
        <img
          className="sneaker-card-image"
          src={sneaker.image}
          alt={`${sneaker.brand} ${sneaker.name} in ${sneaker.colorway}`}
          loading="lazy"
        />
        <div className="sneaker-style-tip">
          <span className="sneaker-style-label">Style tip</span>
          <p>{sneaker.tip}</p>
        </div>
      </div>
      <div className="sneaker-card-details">
        <div className="sneaker-card-title">
          <div>
            <p className="sneaker-brand">{sneaker.brand}</p>
            <h2>{sneaker.name}</h2>
            <p className="sneaker-colorway">{sneaker.colorway}</p>
          </div>
          <p className="sneaker-price">${sneaker.price}</p>
        </div>
        <div className="sneaker-sizes">
          <span>Available sizes (US)</span>
          <ul aria-label="Available sizes">
            {sneaker.sizes.map((size) => (
              <li key={size}>{size}</li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
}

function Stock({ availability }) {
  const isUpcoming = availability === "upcoming";
  const [searchParams] = useSearchParams();
  const searchTerm = (searchParams.get("search") || "").trim();
  const search = searchTerm.toLowerCase();

  const menWords = ["men", "mens", "men's", "male"];
  const womenWords = ["women", "womens", "women's", "female"];

  function matchesSearch(sneaker, gender) {
    if (menWords.includes(search)) {
      return gender === "men";
    }
    if (womenWords.includes(search)) {
      return gender === "women";
    }
    const text = (sneaker.brand + " " + sneaker.name + " " + sneaker.colorway).toLowerCase();
    return text.includes(search);
  }

  const filteredSneakers = sneakers.filter((sneaker) => matchesSearch(sneaker, "men"));
  const filteredWomenSneakers = womensSneakers.filter((sneaker) => matchesSearch(sneaker, "women"));

  if (isUpcoming) {
    return (
      <main className="info-page stock-page upcoming-page">
        <section className="stock-content">
          <header className="stock-heading upcoming-heading">
            <p className="info-page-eyebrow upcoming-eyebrow">
              <span aria-hidden="true" className="upcoming-badge-dot" />
              Drop radar is active
            </p>
            <h1>Next up: heat.</h1>
            <p className="info-page-description">
              Fresh pairs are on the horizon. Get a first look, pick your
              favorite, and keep your rotation ready.
            </p>
            <div className="upcoming-count">
              <span className="upcoming-count-number">
                {String(upcoming.length).padStart(2, "0")}
              </span>
              <span>
                <strong>pairs on the radar</strong>
                <small>Release details coming soon</small>
              </span>
            </div>
          </header>
          <div className="upcoming-grid">
            {upcoming.map((sneaker, index) => (
              <Link
                className={`upcoming-card upcoming-card-${sneaker.theme}`}
                key={sneaker.id}
                to={`/sneakers/${sneaker.id}`}
              >
                <div className="upcoming-card-image-wrap">
                  <span className="upcoming-badge">
                    <span aria-hidden="true" className="upcoming-badge-dot" />
                    Coming soon
                  </span>
                  <span className="upcoming-card-number">
                    DROP {String(index + 1).padStart(2, "0")}
                  </span>
                  <img
                    className="upcoming-card-image"
                    src={sneaker.image}
                    alt={`${sneaker.brand} ${sneaker.name}`}
                    loading="lazy"
                  />
                  <span aria-hidden="true" className="upcoming-image-glow" />
                </div>
                <div className="upcoming-card-details">
                  <p className="upcoming-card-brand">{sneaker.brand}</p>
                  <h2>{sneaker.name}</h2>
                  <p className="upcoming-card-colorway">{sneaker.colorway}</p>
                  <p className="upcoming-card-description">{sneaker.detail}</p>
                  <p className="upcoming-release">
                    <span>Release</span>
                    {sneaker.release}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <Link className="info-page-link upcoming-shop-link" to="/in-stock">
            Shop in-stock sneakers
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="info-page stock-page">
      <section className="stock-content">
        <header className="stock-heading">
          <p className="info-page-eyebrow">Ready when you are</p>
          <h1>In-stock sneakers</h1>
          <p className="info-page-description">
            Browse by name, or search &quot;men&quot;, &quot;women&quot;, or
            &quot;female&quot; to filter by collection. Hover a pair for a
            styling tip, or open it for the full details.
          </p>
          <p className="stock-collection-count">
            {sneakers.length + womensSneakers.length} pairs in the collection
          </p>
          {searchTerm && (
            <p className="info-page-search">
              Search: <strong>{searchTerm}</strong>
            </p>
          )}
        </header>

        {filteredSneakers.length > 0 && (
          <section className="stock-collection">
            <h2 className="stock-collection-heading">
              Men&apos;s rotation <span>{filteredSneakers.length} pairs</span>
            </h2>
            <div className="sneaker-grid">
              {filteredSneakers.map((sneaker) => (
                <SneakerCard key={sneaker.name} sneaker={sneaker} />
              ))}
            </div>
          </section>
        )}

        {filteredWomenSneakers.length > 0 && (
          <section className="stock-collection stock-women-collection">
            <h2 className="stock-collection-heading stock-women-heading">
              The women&apos;s edit <span>{filteredWomenSneakers.length} pairs</span>
            </h2>
            <p className="stock-women-intro">
              Fresh pastels, pretty pinks, and everyday favorites.
            </p>
            <div className="sneaker-grid">
              {filteredWomenSneakers.map((sneaker) => (
                <SneakerCard
                  key={sneaker.name}
                  sneaker={sneaker}
                  isWomens
                />
              ))}
            </div>
          </section>
        )}

        {filteredSneakers.length === 0 && filteredWomenSneakers.length === 0 && (
          <div className="info-page-empty stock-no-results" role="status">
            <p className="info-page-empty-title">No sneakers found.</p>
            <p>Try searching by sneaker name, Nike, Jordan, color, men, or women.</p>
          </div>
        )}
      </section>
    </main>
  );
}

export default Stock;
