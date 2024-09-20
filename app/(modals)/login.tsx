import React from 'react'
import Login from '@/components/Login'
import { Stack } from 'expo-router'

const LoginModal = () => {
  return (
    <>
      <Stack.Screen options={{ title: 'Login' }} />
      <Login />
    </>
  )
}

export default LoginModal
