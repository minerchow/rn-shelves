import { View,  useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'

const ThemedView = ({style,children,...props}) => {
    const colorTheme = useColorScheme();  
    const theme = Colors[colorTheme] ?? Colors.light;
  return (
    <View style={[{backgroundColor:theme.background},style]} {...props}>
      {children}
    </View>
  )
}

export default ThemedView