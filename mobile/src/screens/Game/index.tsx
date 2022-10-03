import { useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';

import { Background } from '../../components/Background';
import { styles } from './styles';
import { THEME } from '../../theme';

import { GameParams } from '../../@types/navigation';
import { TouchableOpacity, View } from 'react-native';

export default function Game() {

const route = useRoute();
const game = route.params as GameParams;

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header} >
          <TouchableOpacity>
            <Entypo 
              name="chevron-thin-left"
              color={ THEME.COLORS.CAPTION_300 }
              size={20}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Background>
  );
}