import { View, Text, useColorScheme } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Colors } from '../constants/Colors';
import { StatusBar } from "expo-status-bar"
import { UserProvider } from "../contexts/UserContext"
import { BooksProvider } from "../contexts/BooksContext"
const RootLayout = () => {
  const colorTheme = useColorScheme();  
  const theme = Colors[colorTheme] ?? Colors.light;
  return (
    <UserProvider>
      <BooksProvider>
        <StatusBar value="auto" /> 
        <Stack screenOptions={{headerStyle:{backgroundColor:theme.navBackground},headerTintColor:theme.title}} >
            <Stack.Screen name="index" options={{title:'首页'}} />
            <Stack.Screen name="about" options={{title:'关于'}} />
             {/* Groups */}
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
            {/* <Stack.Screen name="(auth)/login" options={{title:'登陆'}} /> */}
            {/* <Stack.Screen name="(auth)/register" options={{title:'注册'}} />
            <Stack.Screen name="(dashboard)/books" options={{title:'图书'}} />
            <Stack.Screen name="(dashboard)/create" options={{title:'创建'}} />
            <Stack.Screen name="(dashboard)/profile" options={{title:'个人'}} /> */}
        </Stack>
      </BooksProvider>
    </UserProvider>
  )
}

export default RootLayout