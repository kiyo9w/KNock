import React from 'react'
import Register from '@/components/Register'
import { Stack } from 'expo-router'

const RegisterModal = () => {
  return (
    <>
      <Stack.Screen options={{ title: 'Register' }} />
      <Register />
    </>
  )
}

export default RegisterModal
