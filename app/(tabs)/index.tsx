import React, { useContext } from 'react';
import { View, ScrollView, Button } from 'react-native';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import PlanDropDown from '@/components/PlanDropDown';
import { globalStyles } from '@/styles/globalStyles';
import { DailyPlanContext } from '@/context/DailyPlanContext';

const Page = () => {
  const { showDailyPlan, toggleDailyPlan } = useContext(DailyPlanContext);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={globalStyles.container}>
        <Header />
        <SearchBar />
        <Button title="Schedule" onPress={toggleDailyPlan} />
      </ScrollView>
      {showDailyPlan && <PlanDropDown />}
    </View>
  );
};

export default Page;
