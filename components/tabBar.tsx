import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import Colors from '@/constants/Colors';
import Entypo from '@expo/vector-icons/Entypo';
import Octicons from '@expo/vector-icons/Octicons';
import ScheduleIconLight from '@/assets/images/plusbutton.png';
import ScheduleIconDark from '@/assets/images/plusbutton-white.png';
import { useColorScheme } from 'react-native';

type Props = BottomTabBarProps & {
  onSchedulePress: () => void;
};

const CustomTabBar = ({ state, descriptors, navigation, onSchedulePress }: Props) => {
  const colorScheme = useColorScheme() ?? 'light';

  return (
    <View style={{ flexDirection: 'row', height: 60, borderTopWidth: 0.5, borderColor: '#ccc' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        // Ensure label is a string
        let label: string;
        if (typeof options.tabBarLabel === 'string') {
          label = options.tabBarLabel;
        } else if (typeof options.title === 'string') {
          label = options.title;
        } else {
          label = route.name;
        }

        const onPress = () => {
          if (route.name === 'schedule') {
            // Intercept the press for 'schedule'
            onSchedulePress();
          } else {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          }
        };

        let icon;
        if (route.name === 'index') {
          icon = (
            <Entypo
              name="home"
              size={24}
              color={isFocused ? Colors[colorScheme].tint : '#666'}
            />
          );
        } else if (route.name === 'schedule') {
          const plus = colorScheme === 'dark' ? ScheduleIconDark : ScheduleIconLight;
          icon = <Image source={plus} style={{ width: 24, height: 24 }} />;
        } else if (route.name === 'profile') {
          icon = (
            <Octicons
              name="person"
              size={24}
              color={isFocused ? Colors[colorScheme].tint : '#666'}
            />
          );
        }

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            onPress={onPress}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
          >
            {icon}
            <Text
              style={{
                color: isFocused ? Colors[colorScheme].tint : '#666',
                fontFamily: 'sans-b',
              }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTabBar;
