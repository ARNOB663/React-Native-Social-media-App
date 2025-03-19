import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from '../assets/icons/Home.jsx'
import { theme } from '../constants/theme.js'
import Icon from '../assets/icons/index.jsx'

const login = () => {
  return (
    <View>
      <Text>login</Text>
      <Icon name="home" color="red" />
    </View>
  )
}
export default login

const styles = StyleSheet.create({})