import React, { useContext } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { Plan } from '../types/PlanTypes';
import { Ionicons } from '@expo/vector-icons';
import { DailyPlanContext } from '@/context/DailyPlanContext';
import PlanDropDown from '@/components/PlanDropDown';
import { postFullScreenStyles, getRandomPastelColor } from '@/styles/components/PostFullScreenStyles';

interface FullScreenPlanProps {
  plan: Plan;
}

const FullScreenPlan: React.FC<FullScreenPlanProps> = ({ plan }) => {
  const { showDailyPlan, toggleDailyPlan } = useContext(DailyPlanContext);

  const backgroundStyle = plan.backgroundImage
    ? { uri: plan.backgroundImage }
    : { backgroundColor: getRandomPastelColor() };

  return (
    <View style={postFullScreenStyles.container}>
      <ImageBackground source={backgroundStyle} style={postFullScreenStyles.background}>
        <View style={postFullScreenStyles.overlay}>
          <Text style={postFullScreenStyles.title}>{plan.title}</Text>
          <Text style={postFullScreenStyles.time}>{`${plan.startTime} - ${plan.endTime}`}</Text>
        </View>
    </ImageBackground>
      <TouchableOpacity style={postFullScreenStyles.addButton} onPress={toggleDailyPlan}>
        <Ionicons name="add-circle" size={32} color="white" />
        <Text style={postFullScreenStyles.buttonText}>Add Activity</Text>
      </TouchableOpacity>
      {showDailyPlan && <PlanDropDown />}
    </View>
  );
};

export default FullScreenPlan;