import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router';
const styles = StyleSheet.create({
  link:{
    marginVertical:10,
    borderBottomWidth:1
}
})
const Home = () => {
  return (
    <View>
      <Text>Home2</Text>
      <Link href="/about" style={styles.link}>about</Link>
    </View>
  )
}
export default Home

