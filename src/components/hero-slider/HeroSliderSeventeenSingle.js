import PropTypes from "prop-types";
import React from "react";
// import { Link } from "react-router-dom";

const HeroSliderSeventeenSingle = ({ data, sliderClass }) => {

  return (
    <div
      className={`single-slider-2 slider-height-2 d-flex align-items-center bg-img ${sliderClass ? sliderClass : ""
        }`}
      style={{ backgroundImage: `url(${process.env.REACT_APP_API + "/static/components/" + data.image})`, backgroundColor: '#cccccc' }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-7 col-md-8 col-12">
            <div className="slider-content-2 slider-animated-1">
              {/* <h3 className="animated no-style">{data.title}</h3>
              <h1
                className="animated"
                dangerouslySetInnerHTML={{ __html: data.subtitle }}
              /> */}
              <h3
                className="animated no-style"
                dangerouslySetInnerHTML={{ __html: `${data.title}` }}
              >
              </h3>
              <h1
                className="animated"
                dangerouslySetInnerHTML={{ __html: `${data.subtitle}` }}
              >
              </h1>
              {/* <div className="slider-btn slider-btn--style2 btn-hover">
                <Link
                  className="animated rounden-btn"
                  to={process.env.PUBLIC_URL + data.url}
                >
                  SHOP NOW
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

HeroSliderSeventeenSingle.propTypes = {
  data: PropTypes.object,
  sliderClass: PropTypes.string
};

export default HeroSliderSeventeenSingle;
