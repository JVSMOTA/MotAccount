import { LinearGradient } from "expo-linear-gradient";
import Logo from '../../components/Logo';
import LoginFormAdm from '../../components/LoginFormAdm';
import styles from './styles';

export default function SingIn() {
  return (
    <LinearGradient
      style={styles.Container}
      colors={['#FF9B3F', '#DB5605']}
    >
      <Logo/>
      <LoginFormAdm/>
    </LinearGradient>
  );
}
