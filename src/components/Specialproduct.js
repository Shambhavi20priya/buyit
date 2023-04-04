import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
const Specialproduct = () => {
  return (
    <div className="col-4">
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          <div>
            <img src="images/watch.jpg" className="img-fluid" alt="watch" />
          </div>
          <div className="special-product-content">
            <h5 className="brand">Titan</h5>
            <h6 className="title">
              Helix analog, round dial, elegant looking watch...
            </h6>
            <ReactStars
              count={5}
              size={24}
              activeColor={"#ffd700"}
              value="3"
              edit={false}
            />
            <p className="price">
              <span className="red-p">Rs.1500</span>&nbsp;
              <strike>Rs.3200</strike>
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
              <p className="mb-0">
                <b>5</b> Days
              </p>
              <div className="d-flex gap-10 align-items-center">
                <span className="badge rounded-circle p-3 bg-danger">1</span>:
                <span className="badge rounded-circle p-3 bg-danger">1</span>:
                <span className="badge rounded-circle p-3 bg-danger">1</span>
              </div>
            </div>
            <div className="prod-count my-3">
              <p>Products: 5</p>
              <div class="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-label="Basic example"
                  style={{ width: "25%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <Link className="button">Add to cart</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialproduct;
