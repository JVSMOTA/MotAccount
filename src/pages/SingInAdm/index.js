import { LinearGradient } from "expo-linear-gradient"
import Logo from '../../components/Logo'
import LoginFormAdm from '../../components/LoginFormAdm'
import styles from './styles'
import { Keyboard, Pressable } from "react-native"

export default function SingIn() {
  return (
    <LinearGradient style={styles.Container} colors={['#FF9B3F', '#DB5605']}>

      <Pressable onPress={Keyboard.dismiss}>
      
        <Logo/>
        <LoginFormAdm/>
      
      </Pressable>
    
    </LinearGradient>
  )
}
