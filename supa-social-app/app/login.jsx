import { StyleSheet, Text, TextInputComponent, View } from 'react-native'
import React from 'react'
import Home from '../assets/icons/Home.jsx'
import { theme } from '../constants/theme.js'
import Icon from '../assets/icons/index.jsx'
import ScreenWrapper from '../components/ScreenWrapper.jsx'
import { StatusBar } from 'expo-status-bar'
import BackButton from '../components/BackButton.jsx'
import { useRouter } from 'expo-router'
import {hp , wp} from '../helpers/common.js'
import { TextInput } from 'react-native'
import Input from '../components/Input.jsx'


const login = () => {

  const router = useRouter();
  return (
    <ScreenWrapper>
          <StatusBar style='dark'/>
          <View style={styles.container}>

            <BackButton router={router} />
            {/* welcome */}
            <View>
              <Text style={styles.welcomeText} >Hey,</Text>
              <Text style={styles.welcomeText} >Welcome Back,</Text>
            </View>
            {/* form */}
            <View style={styles.form}>
               <Text style={{fontSize: hp(1.5), color: theme.colors.text}}>
                Please login to continue
               </Text>
               <Input
               Icon={<Icon name="mail" size={26} strokeWidth={1.6} />} 
               placeholder='Enter Your email'
               onChangeTex={value=>{}}
               
               />
            </View>
            
          </View>
    </ScreenWrapper>
  )
}
export default login

const styles = StyleSheet.create({
 container:{
  flex:1,
  gap:45,
  paddingHorizontal:wp(5),
 },
 welcomeText:{
   fontSize:hp(4),
   fontWeight:theme.fonts.bold,
   color:theme.colors.text,
 },
 form:{
  gap:25,
 },


})