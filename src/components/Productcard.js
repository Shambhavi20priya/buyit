import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link,useLocation } from "react-router-dom";
const Productcard = (props) => {
  const {grid}=props
  let location=useLocation();
  return (
    <>
    <div className={`${location.pathname==="/store"?`gr-${grid}`:"col-3"}`}>
      <Link className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link><img src="images/wish.svg" alt="wishlist" /></Link>
        </div>
        <div className="product-image">
          <img className="img-fluid" src="images/watch.jpg" alt="product" />
          <img className="img-fluid" src="images/watch-1.jpg" alt="product" />
        </div>
        <div className="product-details">
          <h6 className="brand">Titan</h6>
          <h5 className="product-title">Elegant looking smartwatches</h5>
          <ReactStars
            count={5}
            size={24}
            activeColor={"#ffd700"}
            value="3"
            edit={false}
          />
          <p className={`description ${grid===12 ? "d-block":"d-none"}`}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat voluptate tempore quam velit quisquam amet voluptatibus numquam atque fugiat dolorum blanditiis, facere modi architecto accusantium doloribus temporibus excepturi repudiandae delectus.
          </p>
          <p className="price">Rs. 800</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link>
              <img src="images/prodcompare.svg" alt="compare" />
            </Link>
            <Link>
              <img src="images/view.svg" alt="view" />
            </Link>
            <Link>
              <img src="images/add-cart.svg" alt="cart" />
            </Link>
      
          </div>
        </div>
      </Link>
    </div>
    <div className={`${location.pathname==="/store"?`gr-${grid}`:"col-3"}`}>
      <Link className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link><img src="images/wish.svg" alt="wishlist" /></Link>
        </div>
        <div className="product-image">
          <img className="img-fluid" src="images/watch.jpg" alt="product" />
          <img className="img-fluid" src="images/watch-1.jpg" alt="product" />
        </div>
        <div className="product-details">
          <h6 className="brand">Titan</h6>
          <h5 className="product-title">Elegant looking smartwatches</h5>
          <ReactStars
            count={5}
            size={24}
            activeColor={"#ffd700"}
            value="3"
            edit={false}
          />
          <p className={`description ${grid===12 ? "d-block":"d-none"}`}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat voluptate tempore quam velit quisquam amet voluptatibus numquam atque fugiat dolorum blanditiis, facere modi architecto accusantium doloribus temporibus excepturi repudiandae delectus.
          </p>
          <p className="price">Rs. 800</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link>
              <img src="images/prodcompare.svg" alt="compare" />
            </Link>
            <Link>
              <img src="images/view.svg" alt="view" />
            </Link>
            <Link>
              <img src="images/add-cart.svg" alt="cart" />
            </Link>
      
          </div>
        </div>
      </Link>
    </div>
    </>
  );
};

export default Productcard;
