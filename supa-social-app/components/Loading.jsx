import { View, Text } from 'react-native'
import React from 'react'
import { theme } from '../constants/theme'
import { ActivityIndicator } from 'react-native-web'

const Loading = ({size="large",color=theme.colors.primary}) => {
  return (
    <View style={{justifyContent:'center',alignItems: 'center'}}>
        <ActivityIndicator size={size} color={color} /> 
      <Text>Loading</Text>
    </View>
  )
}

export default Loading