import styles from './styles'
import { View, Text, ScrollView } from "react-native"

import * as Animatable from 'react-native-animatable'
import LargeButton from '../../components/LargeButton'
import DailyCheckCell from '../../components/DailyCheckCell'
import CheckCell from '../../components/CheckCell'

export default function Schedules({ route }) {
  const { storeType } = route.params

  const listaDeAgendamentos = [
    {id:1, data:"22/11/2023", razao: "Gogowear", valor: "450,00"},
    {id:2, data:"22/11/2023", razao: "Havainas", valor: "600,00"},
    {id:3, data:"23/11/2023", razao: "Internet", valor: "70,00"},
    {id:4, data:"24/11/2023", razao: "Cagepa", valor: "35,00"},
    {id:5, data:"25/11/2023", razao: "Luz", valor: "40,00"}
  ];

  return (
    <View style={styles.Container}>

      <View style={styles.HeaderLaranja}/>    
      <View style={styles.PageContent}>
    
        <Animatable.View animation='fadeInDown' style={styles.MenuTop}>

          <Text style={styles.Title}>{storeType} / Agendamentos</Text>
          <LargeButton placeholder='Criar Agendamento'/>

        </Animatable.View>

        <Text style={styles.SubTitle}>Próximos Agendamentos</Text>

        <ScrollView style={styles.Menu}>

          <DailyCheckCell options={listaDeAgendamentos}/>

        </ScrollView>

      </View>
    
    </View>
  )
}
