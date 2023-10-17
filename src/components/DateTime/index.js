import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import moment from 'moment';
import { useEffect, useState } from 'react';

export default function DateTime() {
  const [currentDate, setCurrentDate] = useState('');
  const [currentDayOfWeek, setCurrentDayOfWeek] = useState('');

  useEffect(() => {
    var date = moment().utcOffset('-03:00').format('DD/MM/YYYY');
    setCurrentDate(date);

    var dayOfWeekNumber = moment().utcOffset('-03:00').format('d'); // 'd' retorna o número do dia da semana (0 = domingo, 1 = segunda, etc.)

    const getDayOfWeek = (dayNumber) => {
      switch (dayNumber) {
        case '0':
          return 'Domingo';
        case '1':
          return 'Segunda-feira';
        case '2':
          return 'Terça-feira';
        case '3':
          return 'Quarta-feira';
        case '4':
          return 'Quinta-feira';
        case '5':
          return 'Sexta-feira';
        case '6':
          return 'Sábado';
        default:
          return '';
      }
    };

    setCurrentDayOfWeek(getDayOfWeek(dayOfWeekNumber));
  })

  return (
    <View style={styles.Container}>
      <Text style={styles.CurrentDayOfWeek}>{currentDayOfWeek}</Text>
      <Text style={styles.CurrentDate}>{currentDate}</Text>
    </View>
  );
}
