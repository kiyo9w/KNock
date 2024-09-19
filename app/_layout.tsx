import React from 'react';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import { ThemeProvider } from '@react-navigation/native';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { DailyPlanProvider } from '../context/DailyPlanContext';

export { ErrorBoundary } from 'expo-router';
export const unstable_settings = {
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'sans': require('../assets/fonts/PublicaSansRound-Rg.ttf'),
    'sans-b': require('../assets/fonts/PublicaSansRound-Bd.ttf'),
    'sans-m': require('../assets/fonts/PublicaSansRound-Md.ttf'),
    'sans-ul': require('../assets/fonts/PublicaSansRound-UlLt.ttf'),
    'sans-xl': require('../assets/fonts/PublicaSansRound-XLt.ttf'),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <DailyPlanProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      </DailyPlanProvider>
    </ThemeProvider>
  );
}
