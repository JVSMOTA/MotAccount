import styles from './styles';
import { View, Text } from "react-native";
import InputAmount from '../../components/InputAmount';
import Button from '../../components/Button';
import ButtonLogOut from '../../components/ButtonLogOut';
import ButtonAmmount from '../../components/ButtonAmmount';
import ButtonSchedules from '../../components/ButtonSchedules';
import ButtonExpenses from '../../components/ButtonExpenses';

import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import DateTime from '../../components/DateTime';
import VisorAmount from '../../components/VisorAmount';

export default function Matriz() {
  const navigation = useNavigation();

  return (
    <View style={styles.Container}>
      <View style={styles.HeaderLaranja}>
      </View>
      <View style={styles.PageContent}>
        <Animatable.View
          animation='fadeInDown'
          style={styles.MenuTop}>
          <Text style={styles.Title}>Acompanhamento Geral</Text>
          <DateTime/>
          <VisorAmount title='Apurado do dia na Matriz' placeholder='00,00'/>
          <VisorAmount title='Apurado do dia na Filial' placeholder='00,00'/>
        </Animatable.View>
        <Animatable.View
          style={styles.Menu}>
          <ButtonAmmount
            onPress={() => navigation.navigate('ApuradosMatriz')}
          />
          <ButtonSchedules
            onPress={() => navigation.navigate('AgendamentosMatriz')}
          />
          <ButtonExpenses
            onPress={() => navigation.navigate('DespesasMatriz')}
          />
        </Animatable.View>
        <ButtonLogOut placeholder='Sair'></ButtonLogOut>
      </View>
    </View>
  );
}
