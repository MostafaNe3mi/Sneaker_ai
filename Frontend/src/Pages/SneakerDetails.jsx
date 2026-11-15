import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getRelatedSneakers, getSneakerById } from "../data/sneakers.js";
import "../Styles/InfoPages.css";
import "../Styles/SneakerDetails.css";

function SneakerDetails() {
  const { id } = useParams();
  const sneaker = getSneakerById(id);
  const [selectedSize, setSelectedSize] = useState(null);

  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = sneaker
      ? `${sneaker.brand} ${sneaker.name} | Kicks With Style`
      : "Sneaker not found | Kicks With Style";
  }, [id, sneaker]);

  if (!sneaker) {
    return (
      <main className="info-page">
        <section className="info-page-content">
          <p className="info-page-eyebrow">Error 404</p>
          <h1>Sneaker not found.</h1>
          <p className="info-page-description">
            We couldn&apos;t find a pair called &quot;{id}&quot;. It may have sold out
            or the link might be wrong.
          </p>
          <div className="info-page-actions">
            <Link className="info-page-link" to="/in-stock">Browse in-stock pairs</Link>
            <Link className="info-page-link info-page-link-secondary" to="/upcoming">
              See upcoming drops
            </Link>
          </div>
        </section>
      </main>
    );
  }

  const isUpcoming = sneaker.status === "upcoming";
  const isWomens = sneaker.gender === "women";
  const collection = isUpcoming
    ? { label: "Upcoming", to: "/upcoming" }
    : { label: "In Stock", to: "/in-stock" };
  const related = getRelatedSneakers(sneaker);
  const fullName = `${sneaker.brand} ${sneaker.name}`;

  const contactLink = isUpcoming
    ? `/contact?topic=request&sneaker=${encodeURIComponent(fullName)}`
    : `/contact?topic=sizing&sneaker=${encodeURIComponent(fullName)}&size=${selectedSize ?? ""}`;

  return (
    <main className={`sneaker-page${isWomens ? " sneaker-page-women" : ""}`}>
      <div className="sneaker-page-inner">
        <nav className="sneaker-breadcrumb" aria-label="Breadcrumb">
          <Link to={collection.to}>{collection.label}</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{sneaker.name}</span>
        </nav>

        <section className="sneaker-detail">
          <div className={`sneaker-detail-media${isUpcoming ? " sneaker-detail-media-upcoming" : ""}`}>
            {isUpcoming && (
              <span className="sneaker-detail-badge">
                <span aria-hidden="true" className="sneaker-detail-badge-dot" />
                Coming soon
              </span>
            )}
            {isWomens && <span className="sneaker-detail-badge sneaker-detail-badge-women">Women&apos;s edit</span>}
            <img src={sneaker.image} alt={`${fullName} in ${sneaker.colorway}`} />
          </div>

          <div className="sneaker-detail-info">
            <p className="sneaker-detail-brand">{sneaker.brand}</p>
            <h1>{sneaker.name}</h1>
            <p className="sneaker-detail-colorway">{sneaker.colorway}</p>

            {isUpcoming ? (
              <>
                <p className="sneaker-detail-release">
                  <span>Release</span>
                  {sneaker.release}
                </p>
                <p className="sneaker-detail-copy">{sneaker.detail}</p>
                <div className="sneaker-detail-actions">
                  <Link className="sneaker-detail-button" to={contactLink}>
                    Get notified
                  </Link>
                  <Link className="sneaker-detail-button sneaker-detail-button-secondary" to="/upcoming">
                    All upcoming drops
                  </Link>
                </div>
              </>
            ) : (
              <>
                <p className="sneaker-detail-price">${sneaker.price}</p>

                <fieldset className="sneaker-size-picker">
                  <legend>
                    Select size (US)
                    <span>{sneaker.sizes.length} sizes available</span>
                  </legend>
                  <div className="sneaker-size-options">
                    {sneaker.sizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        className={
                          selectedSize === size ? "sneaker-size-option selected" : "sneaker-size-option"
                        }
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <div className="sneaker-detail-actions">
                  {selectedSize ? (
                    <Link className="sneaker-detail-button" to={contactLink}>
                      Ask about size {selectedSize}
                    </Link>
                  ) : (
                    <button className="sneaker-detail-button" type="button" disabled>
                      Pick a size
                    </button>
                  )}
                  <Link
                    className="sneaker-detail-button sneaker-detail-button-secondary"
                    to={collection.to}
                  >
                    Back to collection
                  </Link>
                </div>

                <div className="sneaker-detail-tip">
                  <span>Style tip</span>
                  <p>{sneaker.tip}</p>
                </div>
              </>
            )}

            <dl className="sneaker-detail-specs">
              <div>
                <dt>Brand</dt>
                <dd>{sneaker.brand}</dd>
              </div>
              <div>
                <dt>Collection</dt>
                <dd>{isUpcoming ? "Upcoming drop" : isWomens ? "Women's edit" : "Men's rotation"}</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>{isUpcoming ? "Coming soon" : "In stock"}</dd>
              </div>
            </dl>
          </div>
        </section>

        {related.length > 0 && (
          <section className="sneaker-related" aria-labelledby="related-title">
            <h2 id="related-title">You might also like</h2>
            <div className="sneaker-related-grid">
              {related.map((other) => (
                <Link
                  className="sneaker-related-card"
                  key={other.id}
                  to={`/sneakers/${other.id}`}
                  onClick={() => setSelectedSize(null)}
                >
                  <div className="sneaker-related-image">
                    <img src={other.image} alt="" loading="lazy" />
                  </div>
                  <div className="sneaker-related-info">
                    <p>{other.brand}</p>
                    <h3>{other.name}</h3>
                    <span>{other.status === "upcoming" ? "Coming soon" : `$${other.price}`}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

export default SneakerDetails;
