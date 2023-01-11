import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useInView } from 'react-intersection-observer';
import loader from '../../data/loader-1.gif';

const ProductGridSingle = ({
  product,
  sliderClassName,
  spaceBottomClass
}) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "100px 0px",
    triggerOnce: true
  });

  return (
    <Fragment>
      <div
        className={`col-xl-3 col-md-6 col-lg-4 col-sm-6 ${sliderClassName ? sliderClassName : ""}`}
        ref={ref}
      >
        <div
          className={`product-wrap ${spaceBottomClass ? spaceBottomClass : ""}`}
        >
          <div className="product-img">
            <Link to={process.env.PUBLIC_URL + "/product/" + product?.id}>

              {(inView && isLoading) && <img
                alt=""
                src={loader}
              />}

              {inView && <img
                alt=""
                src={process.env.REACT_APP_SERVER_API + "/static/productimages/" + product?.productDetails[0]?.image}
                onLoad={() => { setIsLoading(false) }}
                style={{ visibility: isLoading ? 'hidden' : 'visible' }}
              />}

              {(inView && !isLoading && product?.productDetails?.length > 1) ? (
                <img
                  alt=""
                  src={process.env.REACT_APP_SERVER_API + "/static/productimages/" + product?.productDetails[1]?.image}
                  className="hover-img"
                />
              ) : (
                ""
              )}
            </Link>

            <div className="product-action">
              <div className="pro-same-action pro-wishlist">
              </div>
              <div className="pro-same-action pro-cart">
                <Link to={`${process.env.PUBLIC_URL}/product/${product?.id}`}>
                  Details
                </Link>
              </div>
              <div className="pro-same-action pro-quickview">
              </div>
            </div>
          </div>
          <div className="product-content text-center">
            <h3>
              <Link to={process.env.PUBLIC_URL + "/product/" + product?.id}>
                {product?.productName}
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

ProductGridSingle.propTypes = {
  product: PropTypes.object,
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string,
};

export default ProductGridSingle;
