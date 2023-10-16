import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

export default function LoginForm() {
    const navigation = useNavigation();

  return (
    <Animatable.View delay={500} animation='fadeInUp' style={styles.Container}>
      <Text style={styles.Title}>Entrar no MotAccount</Text>
      
      <TouchableOpacity
        onPress={() => navigation.navigate('Matriz')}
        style={styles.ContainerButton}>
        <Text style={styles.TitleButton}>Loja Matriz</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => navigation.navigate('Filial')}
        style={styles.ContainerButton}>
        <Text style={styles.TitleButton}>Loja Filial</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.ContainerToLoginAdm}
        onPress={() => navigation.navigate('SingInAdm')}
        >
        <Text style={styles.TitleToLoginAdm}>É um Administrador?</Text>
      </TouchableOpacity>
    </Animatable.View>
  );
}
