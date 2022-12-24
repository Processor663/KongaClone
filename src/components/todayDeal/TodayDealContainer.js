import React from 'react';
import TodayDeals from './TodayDeals';
import TodayDeal_Three from './todayDeal_three/TodayDeal_Three';
import TodayDeal_Two from './TodayDeal_Two';

const TodayDealContainer = () => {
  return (
    <>
      <TodayDeals />
      <TodayDeal_Two />
      <TodayDeal_Three />
    </>
  );
}

export default TodayDealContainer