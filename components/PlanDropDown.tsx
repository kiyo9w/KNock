import React from 'react';
import { Animated, View, Text, TouchableOpacity, FlatList} from 'react-native';
import { useRouter } from 'expo-router';
import { dailyPlanStyles } from '@/styles/components/DailyPlanStyles';
import { usePanResponder } from '@/hooks/usePanResponder';
import { Plan } from '@/types/PlanTypes';

const dummyPlans: Plan[] = [
  {
    id: '1',
    title: 'Sleep at night',
    startTime: '10:00 PM',
    endTime: '06:00 AM',
    backgroundImage: 'https://example.com/sleep.jpg',
    type: 'sleep',
  },
  {
    id: '2',
    title: 'Meditation',
    startTime: '07:00 AM',
    endTime: '07:20 AM',
    backgroundImage: 'https://example.com/meditation.jpg',
    type: 'meditation',
  },
  // Add more dummy plans as needed
];

const PlanDropDown = () => {
  const { panHandlers, panY, sheetHeight } = usePanResponder();
  const router = useRouter();

  const handleShowMore = () => {
    router.push('/schedule');
  };

  const handlePlanPress = (plan: Plan) => {
    router.push({ pathname: '/fullScreenPlan', params: { plan: JSON.stringify(plan) } });
  };

  const renderPlanCard = ({ item }: { item: Plan }) => (
    <TouchableOpacity onPress={() => handlePlanPress(item)} style={dailyPlanStyles.planCard}>
      <Text style={dailyPlanStyles.planTitle}>{item.title}</Text>
      <Text style={dailyPlanStyles.planTime}>{`${item.startTime} - ${item.endTime}`}</Text>
    </TouchableOpacity>
  );

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
        <TouchableOpacity onPress={handleShowMore}>
          <Text style={dailyPlanStyles.showMore}>Show more</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={dummyPlans}
        renderItem={renderPlanCard}
        keyExtractor={(item) => item.id}
      />
    </Animated.View>
  );
};

export default PlanDropDown;
