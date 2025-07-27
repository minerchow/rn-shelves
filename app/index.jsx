import { StyleSheet, Text } from 'react-native'
import { Link } from 'expo-router';
import ThemedView from '../components/ThemedView';

import ThemedLogo from '../components/ThemedLogo';
import Spacer from '../components/Spacer';
import ThemedText from '../components/ThemedText';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1
  },
})
const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo style={styles.img} />
      <ThemedText style={styles.title}>number1</ThemedText>
      <Spacer height={20}/>
      <Link href="/about" style={styles.link}>
        <ThemedText>about</ThemedText>
      </Link>
      <Link href="/login" style={styles.link}>
        <ThemedText>登陆</ThemedText>
      </Link>
      <Link href="/register" style={styles.link}>
        <ThemedText>注册</ThemedText>
      </Link>
    </ThemedView>
  )
}
export default Home

