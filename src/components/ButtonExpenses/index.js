import { Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function ButtonExpenses() {
  return (
    <TouchableOpacity style={styles.Container}>
      <Text style={styles.Title}>Despesas</Text>
      <Image style={styles.Icon} source={require('../../assets/despesas.png')}></Image>
    </TouchableOpacity>
  );
}
