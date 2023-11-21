import { Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import Button from '../Button'

import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'

export default function LoginForm() {
    const navigation = useNavigation()

    const navigateToMenu = (storeType) => {
      navigation.navigate('Menu', { storeType })
    }

  return (
    <Animatable.View delay={500} animation='fadeInUp' style={styles.Container}>
      
      <Text style={styles.Title}>Entrar no MotAccount</Text>
      
      <Button onPress={() => navigateToMenu('Matriz')} placeholder='Loja Matriz'/>
      <Button onPress={() => navigateToMenu('Filial')} placeholder='Loja Filial'/>

      <TouchableOpacity style={styles.ContainerToLoginAdm} onPress={() => navigation.navigate('SingInAdm')}>

        <Text style={styles.TitleToLoginAdm}>É um Administrador?</Text>
      
      </TouchableOpacity>
      
    </Animatable.View>
  )
}
