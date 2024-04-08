import { useState } from "react";

import css from "./RecentlyViewed.module.css";

import happyHoursImg from "/images/happyhours.jpg";

import RecentlyViewedCard from "../../../../Cards/RecentlyViewedCard/RecentlyViewedCard";

import UserProfileNoData from "../../UserProfileNoData/UserProfileNoData";

const RecentlyViewed = ({ hashId }) => {
  let [data, setData] = useState([
    {
      id: 1,
      imgSrc: happyHoursImg,
      name: "Mirch Masala",
      ratingsDining: 4.2,
      ratingsDelivery: 4.6,
      address: "C G Road, Ahmedabad",
      link: "#"
    },
    {
      id: 2,
      imgSrc: happyHoursImg,
      name: "Mirch Masala",
      ratingsDining: 4.2,
      ratingsDelivery: 4.6,
      address: "Kukatpally, Hyd",
      link: "#"
    },
    {
      id: 3,
      imgSrc: happyHoursImg,
      name: "Mirch Masala",
      ratingsDining: 4.2,
      ratingsDelivery: 4.6,
      address: "Kukatpally, Hyd",
      link: "#"
    },
    {
      id: 4,
      imgSrc: happyHoursImg,
      name: "Mirch Masala",
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
