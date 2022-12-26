import React from 'react';
import TodayDeals from './TodayDeals';
import TodayDeal_Three from './todayDeal_three/TodayDeal_Three';
import TodayDeal_Two from './TodayDeal_Two';
import RecommendedForYou from "./RecommendedForYou/RecommendedForYou";


const TodayDealContainer = () => {
  return (
    <>
      <TodayDeals />
      {/* I reuse this component for sponspoerd product */}
      <RecommendedForYou desc="Sponsored Products" flexColumn oneColumn />
      <TodayDeal_Two />
      <RecommendedForYou desc="Recommended For You" review />
      <TodayDeal_Three />
    </>
  );
}

export default TodayDealContainer