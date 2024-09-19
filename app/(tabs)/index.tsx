import React, { useContext } from 'react';
import { View, ScrollView, Button } from 'react-native';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import SleepingTimeCard from '@/components/SleepingTimeCard';
import DailyPlan from '@/components/DailyPlan';
import { globalStyles } from '@/styles/globalStyles';
import { DailyPlanContext } from '@/context/DailyPlanContext';

const Page = () => {
  const { showDailyPlan, toggleDailyPlan } = useContext(DailyPlanContext);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={globalStyles.container}>
        <Header />
        <SearchBar />
        <SleepingTimeCard />
        <Button title="Schedule" onPress={toggleDailyPlan} />
      </ScrollView>
      {showDailyPlan && <DailyPlan />}
    </View>
  );
};

export default Page;
