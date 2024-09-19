import React from 'react';
import { View, Text, Image } from 'react-native';
import { sleepingTimeCardStyles } from '../styles/components/SleepingTimeCardStyles';

const SleepingTimeCard = () => {
  return (
    <View style={sleepingTimeCardStyles.sleepingCard}>
      <Image
        style={sleepingTimeCardStyles.sleepingTimeImage}
        source={{
          uri: 'https://img.icons8.com/plasticine/100/000000/owl.png', // Placeholder owl image
        }}
      />
      <View style={sleepingTimeCardStyles.sleepingInfo}>
        <Text style={sleepingTimeCardStyles.sleepingText}>Sleeping Time</Text>
        <Text style={sleepingTimeCardStyles.timeText}>
          10:00 PM - 04:00 AM
        </Text>
      </View>
    </View>
  );
};

export default SleepingTimeCard;
