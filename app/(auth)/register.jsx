import { StyleSheet  } from 'react-native';
import { Link } from 'expo-router';
import ThemedView from '../../components/ThemedView';
import Spacer from '../../components/Spacer';
import ThemedText from '../../components/ThemedText';
const styles = StyleSheet.create({
    container:{
        flex : 1,
        alignItems: 'center',
        justifyContent:'center'
    },
    title:{
        textAlign:"center",
        fontSize:18,
        marginBottom:30
    },
    link:{
        marginVertical:10,
        borderBottomWidth:1
    }
})
const register = () => {
  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title={true} style={styles.title}>register</ThemedText>
      <Spacer />
      <Link href="/login">
        <ThemedText style={{textAlign:'center'}}>登陆</ThemedText>
      </Link>
    </ThemedView>
  )
}

export default register