import { Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

import { useNavigation } from '@react-navigation/native';

export default function ButtonAmmount({onPress}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      onPress={() => navigation.navigate(onPress)}
      style={styles.Container}>
      <Text style={styles.Title}>Apurados</Text>
      <Image style={styles.Icon} source={require('../../assets/apurados.png')}></Image>
    </TouchableOpacity>
  );
}
