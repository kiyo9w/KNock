import React from 'react';
import { Animated, View, Text } from 'react-native';
import { dailyPlanStyles } from '../styles/components/DailyPlanStyles';
import { usePanResponder } from '../hooks/usePanResponder';
import MeditationCard from './MeditationCard';

const DailyPlan = () => {
  const { panHandlers, panY, sheetHeight } = usePanResponder();

  return (
    <Animated.View
      style={[
        dailyPlanStyles.dailyPlanContainer,
        {
          transform: [
            {
              translateY: panY.interpolate({
                inputRange: [0, sheetHeight],
                outputRange: [0, sheetHeight],
                extrapolate: 'clamp',
              }),
            },
          ],
        },
      ]}
      {...panHandlers}
    >
      <View style={dailyPlanStyles.dragHandle} />

      <View style={dailyPlanStyles.dailyPlanHeader}>
        <Text style={dailyPlanStyles.dailyPlanTitle}>Daily Plan</Text>
        <Text style={dailyPlanStyles.showMore}>Show more</Text>
      </View>

      {/* Meditation Section */}
      <MeditationCard />
    </Animated.View>
  );
};

export default DailyPlan;
