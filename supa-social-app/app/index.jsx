import { View, Text , Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { Screen } from 'expo-router/build/views/Screen';
import ScreenWrapper from '../components/ScreenWrapper';

const index = () => {
    const router = useRouter();
  return (
    <ScreenWrapper>
      <Text>index</Text>
      <Button title="welcome" onPress={()=>router.push('welcome')}/>
    </ScreenWrapper>
  )
}

export default index
