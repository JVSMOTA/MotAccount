import { Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

import { useNavigation } from '@react-navigation/native';

export default function ButtonSchedules({onPress}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      onPress={() => navigation.navigate(onPress)}
      style={styles.Container}>
      <Text style={styles.Title}>Agendamentos</Text>
      <Image style={styles.Icon} source={require('../../assets/agendamentos.png')}></Image>
    </TouchableOpacity>
  );
}
