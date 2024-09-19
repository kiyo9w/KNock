import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import SleepingTimeCard from '@/components/SleepingTimeCard';
import DailyPlan from '@/components/DailyPlan';
import { globalStyles } from '@/styles/globalStyles';

type DailyPlanProps = {
  onClose: () => void;
};

const Page = () => {
  const [showDailyPlan, setShowDailyPlan] = useState(false);

  // Function to toggle the visibility
  const toggleDailyPlan = () => {
    setShowDailyPlan(!showDailyPlan);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={globalStyles.container}>
        <Header />
        <SearchBar />
        <SleepingTimeCard />
      </ScrollView>
      {showDailyPlan && <DailyPlan />}
    </View>
  );
};

export default Page;
