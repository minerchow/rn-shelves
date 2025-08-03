import { StyleSheet, Text,TouchableWithoutFeedback,Keyboard } from 'react-native';
import { Link } from 'expo-router';
import { useState } from 'react';
import ThemedView from '../../components/ThemedView';
import Spacer from '../../components/Spacer';
import ThemedText from '../../components/ThemedText';
import ThemedButton from '../../components/ThemedButton';
import ThemedTextInput from "../../components/ThemedTextInput";
import { useUser } from '../../hooks/useUser';
import { Colors } from '../../constants/Colors';
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
    },
    error: {
      color: Colors.warning,
      padding: 10,
      backgroundColor: '#f5c1c8',
      borderColor: Colors.warning,
      borderWidth: 1,
      borderRadius: 6,
      marginHorizontal: 10,
    }
})
const register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)
  const { user, register } = useUser()
  const handleSubmit = async () => {
    try {
      await register(email, password)
      console.log('current user is: ', user)
    } catch (error) {
      setError(error.message)
    }
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title={true} style={styles.title}>register</ThemedText>
      <ThemedTextInput
          style={{ marginBottom: 20, width: "80%" }}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <ThemedTextInput
          style={{ marginBottom: 20, width: "80%" }}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      <ThemedButton onPress={handleSubmit}>
        <Text style={{ color: '#f2f2f2' }}>Register</Text>
      </ThemedButton>
      <Spacer />
      {error && <Text style={styles.error}>{error}</Text>}
      <Spacer height={100} />
      <Link href="/login">
        <ThemedText style={{textAlign:'center'}}>登陆</ThemedText>
      </Link>
    </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default register