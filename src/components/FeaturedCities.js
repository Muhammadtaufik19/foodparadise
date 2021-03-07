import React from "react";
import CityCard from "./CityCard";

const FeaturedCities = (props) => (
  <>
    <div className="row">
      <div className="col-12">
        <h3>Features Cities</h3>
      </div>
    </div>
    <div className="row">
      {props.citiesDummy.map((city) => (
        <CityCard key={city.name} city={city} />
      ))}
    </div>
  </>
);

export default FeaturedCities;
