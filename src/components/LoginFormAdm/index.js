import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import Button from '../Button';
import InputPassword from '../InputPassword';

import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

export default function LoginFormAdm() {
  const navigation = useNavigation();

  return (
    <Animatable.View delay={500} animation='fadeInUp' style={styles.Container}>
      <Text style={styles.Title}>Digite a sua senha</Text>
      <InputPassword/>
      <Button 
        onPress='MenuAdm'
        placeholder='Entrar'
      />
      <TouchableOpacity 
        style={styles.ContainerToLoginNotAdm}
        onPress={() => navigation.navigate('SingIn')}
        >
        <Text style={styles.TitleToLoginNotAdm}>Não é um Administrador?</Text>
      </TouchableOpacity>
    </Animatable.View>
  );
}
