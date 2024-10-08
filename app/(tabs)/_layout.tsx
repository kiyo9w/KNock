import { View, Text, Image } from 'react-native';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import React, { useContext } from 'react';
import { Tabs } from 'expo-router';
import Colors from '@/constants/Colors';
import { useColorScheme } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Octicons from '@expo/vector-icons/Octicons';
import Entypo from '@expo/vector-icons/Entypo';
import ScheduleIconLight from '@/assets/images/plusbutton.png';
import ScheduleIconDark from '@/assets/images/plusbutton-white.png';
import CustomTabBar from '@/components/tabBar';
import { DailyPlanContext } from '@/context/DailyPlanContext';


const Layout = () => {
    const colorScheme = useColorScheme() ?? 'light';
    const { toggleDailyPlan } = useContext(DailyPlanContext);
    
    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: Colors[colorScheme].tint,
                    headerShown: false,
                    tabBarLabelStyle: {
                        fontFamily: 'sans-b',
                    }
                }}
                tabBar={(props) => (
                  <CustomTabBar {...props} onSchedulePress={toggleDailyPlan} />
                )}
              >
                <Tabs.Screen
                    name="index"
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <Entypo name="home" size={size} color={color} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="schedule"
                    options={{
                        tabBarLabel: 'Schedule',
                        tabBarIcon: ({ color, size }) => {
                            const plus = colorScheme === 'dark' ? ScheduleIconDark : ScheduleIconLight;
                            return (
                                <Image source={plus} style={{ width: size, height: size }} />
                            );
                        },
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ color, size }) => (
                            <Octicons name="person" size={size} color={color} />
                        ),
                    }}
                />
            </Tabs>
        </ThemeProvider>
    );
};

export default Layout;
