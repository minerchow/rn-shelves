import { Link } from 'expo-router'
import { StyleSheet, Text, View , useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'
import ThemedView from '../components/ThemedView';

import ThemedLogo from '../components/ThemedLogo';
import Spacer from '../components/Spacer';
import ThemedText from '../components/ThemedText';
const styles = StyleSheet.create({
    container:{
        flex : 1,
        alignItems: 'center',
        justifyContent:'center'
    },
    title:{
        fontWeight:'bold',
        fontSize:18
    },
    link:{
        marginVertical:10,
        borderBottomWidth:1
    }
})

const About = () => {
const colorTheme = useColorScheme();  
const theme = Colors[colorTheme] ?? Colors.light;
  return (
    <ThemedView style={[styles.container]}>
      <ThemedText style={styles.title}>About</ThemedText>
      <Link href="/" style={styles.link}>
        <ThemedText>返回首页</ThemedText>
      </Link>
    </ThemedView>
  )
}
export default About