import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/Background';

import { styles } from './styles';

export default function Game() {
  return (
    <Background>
      <SafeAreaView style={styles.container}>

      </SafeAreaView>
    </Background>
  );
}