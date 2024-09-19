import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import FullScreenPlan from '@/components/Post/FullScreenPlan';
import { Plan } from '@/types/PlanTypes';
import { Stack } from 'expo-router';

const FullScreenPlanPage = () => {
  const { plan } = useLocalSearchParams<{ plan: string }>();
  const planObject: Plan = JSON.parse(plan);

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <FullScreenPlan plan={planObject} />
    </>
  );
};

export default FullScreenPlanPage;