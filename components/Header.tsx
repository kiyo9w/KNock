import React from 'react';
import { View, Text, Image } from 'react-native';
import { headerStyles } from '@/styles/components/HeaderStyles';

const Header = () => {
  return (
    <View style={headerStyles.header}>
      <Image
        style={headerStyles.profilePic}
        source={{
          uri: 'https://i.pravatar.cc/300', // Placeholder image
        }}
      />
      <Text style={headerStyles.headerText}>
        Let’s start the morning meditation
      </Text>
    </View>
  );
};

export default Header;
