import { Link } from 'expo-router'
import { StyleSheet, Text, View , useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'
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
    <View style={[styles.container,{backgroundColor:theme.background}]}>
      <Text style={styles.title}>About</Text>
      <Link href="/" style={styles.link}>返回首页</Link>
    </View>
  )
}
export default About