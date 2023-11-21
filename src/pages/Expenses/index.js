import styles from './styles';
import { View, Text } from "react-native";

import * as Animatable from 'react-native-animatable';

export default function Expenses({ route }) {
  const { storeType } = route.params

  return (
    <View style={styles.Container}>
      <View style={styles.HeaderLaranja}>
      </View>
      <View style={styles.PageContent}>
        <Animatable.View
          animation='fadeInDown'
          style={styles.MenuTop}>
          <Text style={styles.Title}>{storeType} / Despesas</Text>
        </Animatable.View>
      </View>
    </View>
  );
}
