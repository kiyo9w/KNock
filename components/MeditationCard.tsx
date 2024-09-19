import React from 'react';
import { View, Text, Image } from 'react-native';
import { meditationCardStyles } from '../styles/components/MeditationCardStyles';

const MeditationCard = () => {
  return (
    <View style={meditationCardStyles.meditationCard}>
      <Image
        style={meditationCardStyles.meditationImage}
        source={{
          uri: 'https://img.icons8.com/plasticine/100/000000/yoga.png', // Placeholder meditation image
        }}
      />
      <View style={meditationCardStyles.meditationInfo}>
        <Text style={meditationCardStyles.meditationText}>Meditation</Text>
        <Text style={meditationCardStyles.meditationSubText}>
          Today's topic: meditation & relaxation, 20 mins.
        </Text>
      </View>
    </View>
  );
};

export default MeditationCard;
