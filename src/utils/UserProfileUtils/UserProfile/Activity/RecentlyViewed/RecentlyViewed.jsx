import { useState } from "react";

import css from "./RecentlyViewed.module.css";

import image1 from "/images/Pizzaimage1.jpg";
import image2 from "/images/Pizzaimage2.jpg";
import image3 from "/images/Pizzaimage3.jpg";
import image4 from "/images/Pizzaimage4.jpg";
import image5 from "/images/Pizzaimage5.jpg";
import image6 from "/images/Pizzaimage6.jpg";
import image7 from "/images/Pizzaimage7.jpg";
import image8 from "/images/Pizzaimage8.jpg";
import image9 from "/images/Pizzaimage9.jpg";
import image10 from "/images/Pizzaimage10.jpg";
import happyHoursImg from "/images/happyhours.jpg";

import RecentlyViewedCard from "../../../../Cards/RecentlyViewedCard/RecentlyViewedCard";

import UserProfileNoData from "../../UserProfileNoData/UserProfileNoData";

const RecentlyViewed = ({ hashId }) => {
  let [data, setData] = useState([
    {
      id: 1,
      imgSrc: image1,
      name: "Margherita Pizza",
      ratingsDining: 4.2,
      ratingsDelivery: 4.6,
      address: "Kukatpally, Hyd",
      link: "#"
    },
    {
      id: 2,
      imgSrc: image2,
      name: "Veggie Pizza",
      ratingsDining: 4.2,
      ratingsDelivery: 4.6,
      address: "Kukatpally, Hyd",
      link: "#"
    },
    {
      id: 3,
      imgSrc: image3,
      name: "Pizza al taglio",
      ratingsDining: 4.2,
      ratingsDelivery: 4.6,
      address: "Kukatpally, Hyd",
      link: "#"
    },
    {
      id: 4,
      imgSrc: image4,
      name: "Caprese Pizza",
      ratingsDining: 4.2,
      ratingsDelivery: 4.6,
      address: "Kukatpally, Hyd",
      link: "#"
    },
    {
      id: 5,
      imgSrc: image5,
      name: "Pizzette",
      ratingsDining: 4.2,
      ratingsDelivery: 4.6,
      address: "Kukatpally, Hyd",
      link: "#"
    },
    {
      id: 6,
      imgSrc: image6,
      name: "Pizza alla diavola",
      ratingsDining: 4.2,
      ratingsDelivery: 4.6,
      address: "Kukatpally, Hyd",
      link: "#"
    },
    {
      id: 7,
      imgSrc: image7,
      name: "Miami Pizza",
      ratingsDining: 4.2,
      ratingsDelivery: 4.6,
      address: "Kukatpally, Hyd",
      link: "#"
    },
    {
      id: 8,
      imgSrc: image8,
      name: "Mexico Pizza0",
      ratingsDining: 4.2,
      ratingsDelivery: 4.6,
      address: "Kukatpally, Hyd",
      link: "#"
    },
    {
      id: 9,
      imgSrc: image9,
      name: "Pizza al padellino",
      ratingsDining: 4.2,
      ratingsDelivery: 4.6,
      address: "Kukatpally, Hyd",
      link: "#"
    },
    {
      id: 10,
      imgSrc: image10,
      name: "Grilled Pizza",
      ratingsDining: 4.2,
      ratingsDelivery: 4.6,
      address: "Kukatpally, Hyd",
      link: "#"
    },
    {
      id: 11,
      imgSrc: image1,
      name: "St. Louis-Style Pizza",
      ratingsDining: 4.2,
      ratingsDelivery: 4.6,
      address: "Kukatpally, Hyd",
      link: "#"
    },
    {
      id: 12,
      imgSrc: image2,
      name: "Australian Pizza",
      ratingsDining: 4.2,
      ratingsDelivery: 4.6,
      address: "Kukatpally, Hyd",
      link: "#"
    },
    {
      id: 13,
      imgSrc: image3,
      name: "Pizza al tonno",
      ratingsDining: 4.2,
      ratingsDelivery: 4.6,
      address: "Kukatpally, Hyd",
      link: "#"
    },
    {
      id: 14,
      imgSrc: image4,
      name: "Pizza boscaiola",
      ratingsDining: 4.2,
      ratingsDelivery: 4.6,
      address: "Kukatpally, Hyd",
      link: "#"
    },
  ]);
  let [isData, setIsData] = useState(true);

  return (
    <div className={css.outerDiv}>
      {isData ? (
        <div className={css.innerDiv}>
          {data.map((item) => {
            return <RecentlyViewedCard udata={item} key={item?.id} />;
          })}
        </div>
      ) : (
        <UserProfileNoData hashId={hashId} />
      )}
    </div>
  );
};

export default RecentlyViewed;
