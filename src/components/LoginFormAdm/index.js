import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import Button from '../Button'
import InputPassword from '../InputPassword'

import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'
import { useState } from 'react'

export default function LoginFormAdm() {
  const navigation = useNavigation()

  const [errorMessage, setErrorMessage] = useState(null)
  const [pinPassword, setPinPassword] = useState(null)

  function verificationPinPassword() {
    if (pinPassword == null) {
      setErrorMessage('PIN obrigatório*')
      return
    }
    
    if (pinPassword != null) {
      setErrorMessage('PIN incorreto*')
      return
    }
  }

  function validationPinPassword() {
    verificationPinPassword()

    if (pinPassword == "102040") { {/* AQUI É ONDE FAREI A VERIFICAÇÃO COM A SENHA ATUAL DO ADM */}
      setErrorMessage(null)
      navigation.navigate('MenuAdm')
      return
    }

  }

  return (
    <Animatable.View delay={500} animation='fadeInUp' style={styles.Container}>
      <Text style={styles.Title}>Digite a sua senha</Text>
      <InputPassword onChangeText={setPinPassword} placeholder={'Digite seu PIN'} errorMessage={errorMessage}/>
      <Button 
        onPress={() => validationPinPassword()}
        placeholder='Entrar'/>
      <TouchableOpacity style={styles.ContainerToLoginNotAdm} onPress={() => navigation.navigate('SingIn')}>

        <Text style={styles.TitleToLoginNotAdm}>Não é um Administrador?</Text>

      </TouchableOpacity>
    </Animatable.View>
  )
}
