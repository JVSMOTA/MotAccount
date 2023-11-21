import { Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';

import { useNavigation } from '@react-navigation/native';

export default function LargeButton({placeholder, onPress}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      onPress={() => navigation.navigate(onPress)}
      style={styles.Container}>
      <Text style={styles.Title}>{placeholder}</Text>
      <Icon name="plus" size={40} style={styles.Icon}/>
    </TouchableOpacity>
  );
}
