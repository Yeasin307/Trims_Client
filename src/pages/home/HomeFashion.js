import React, { Fragment, useEffect } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderSeventeen from "../../wrappers/hero-slider/HeroSliderSeventeen";
import FeatureIcon from "../../wrappers/feature-icon/FeatureIcon";
import TabProduct from "../../wrappers/product/TabProduct";
import { getComponent } from "../../redux/actions/componentActions";
import { useDispatch } from "react-redux";

const HomeFashion = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComponent());
  }, [dispatch])

  return (
    <Fragment>
      <MetaTags>
        <title>Trims | Home</title>
        <meta
          name="description"
          content="Home page of trim tex bd."
        />
      </MetaTags>
      <LayoutOne
        headerTop="visible"
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-1"
      >
        {/* hero slider */}
        <HeroSliderSeventeen />

        {/* featured icon */}
        <FeatureIcon spaceTopClass="pt-40" />

        {/* tab product */}
        <TabProduct spaceBottomClass="pb-60" category="" />

      </LayoutOne>
    </Fragment>
  );
};

export default HomeFashion;
