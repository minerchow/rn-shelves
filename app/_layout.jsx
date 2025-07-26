import { View, Text, useColorScheme, StatusBar } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Colors } from '../constants/Colors'
const RootLayout = () => {
  const colorTheme = useColorScheme();  
  const theme = Colors[colorTheme] ?? Colors.light;
  return (
    <>
        <StatusBar value="auto" /> 
        <Stack screenOptions={{headerStyle:{backgroundColor:theme.navBackground},headerTintColor:theme.title}} >
            <Stack.Screen name="index" options={{title:'首页'}} />
            <Stack.Screen name="about" options={{title:'关于'}} />
        </Stack>
    </>
  )
}

export default RootLayout