import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

import { useNavigation } from '@react-navigation/native';

export default function Button({ placeholder }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('SingIn')}
      style={styles.Container}>
      <Text style={styles.Title}>{placeholder}</Text>
    </TouchableOpacity>
  );
}
