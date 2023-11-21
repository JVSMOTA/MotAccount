import styles from './styles';
import { View, Text, ScrollView } from "react-native";
import LargeButton from '../../components/LargeButton';
import DailyCalculation from '../../components/DailyCalculation';

import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

export default function MatrizApurados() {
  const navigation = useNavigation();

  return (
    <View style={styles.Container}>
      <View style={styles.HeaderLaranja}>
      </View>
      <View style={styles.PageContent}>
        <Animatable.View
          animation='fadeInDown'
          style={styles.MenuTop}>
          <Text style={styles.Title}>Matriz / Apurados</Text>
          <LargeButton placeholder='Novo Apurado'/>
        </Animatable.View>
        <ScrollView style={styles.Menu}>
          <DailyCalculation fisico='00,00' cartao='00,00'/>
          {/* Lista de Apurados diários */}
        </ScrollView>
      </View>
    </View>
  );
}
