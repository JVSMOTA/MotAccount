import styles from './styles';
import { View, Text } from "react-native";

import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

export default function FilialApurados() {
  const navigation = useNavigation();

  return (
    <View style={styles.Container}>
      <View style={styles.HeaderLaranja}>
      </View>
      <View style={styles.PageContent}>
        <Animatable.View
          animation='fadeInDown'
          style={styles.MenuTop}>
          <Text style={styles.Title}>Filial / Apurados</Text>
        </Animatable.View>
      </View>
    </View>
  );
}
