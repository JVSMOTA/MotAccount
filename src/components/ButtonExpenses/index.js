import { Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

import { useNavigation } from '@react-navigation/native';

export default function ButtonExpenses({onPress}) {
  const navigation = useNavigation();
  
  return (
    <TouchableOpacity 
      onPress={() => navigation.navigate(onPress)}
      style={styles.Container}>
      <Text style={styles.Title}>Despesas</Text>
      <Image style={styles.Icon} source={require('../../assets/despesas.png')}></Image>
    </TouchableOpacity>
  );
}
