import { StyleSheet, Platform } from 'react-native';
import { COLORS, FONTS} from 'constants';

const isAndroid = Platform.OS === 'android';

const stylesCreate = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    paddingVertical: 15
  },
  circleOne: {
    height: 200,
    width: 200,
    borderRadius: 200,
    backgroundColor: '#C2BCD2',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.7,
    borderColor: '#5B4A99',
    borderWidth: 0.2 
  },
  circleTwo: {
    height: 114,
    width: 114,
    borderRadius: 200,
    backgroundColor: '#C2BCD2',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8,
    borderColor: '#5B4A99',
    borderWidth: 0.2
  },
  circleThree: {
    height: 30,
    width: 30,
    borderRadius: 200,
    backgroundColor: '#5B4A99',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.9
  },
  shadowBtn: {
    elevation: isAndroid ? 2 : 1,
    shadowOffset: { width: isAndroid ? 5 : 1, height: isAndroid ? 5 : 1 },
    shadowColor: COLORS.white,
    shadowOpacity: isAndroid ? 0.5 : 1
  }
});

const stylesFlatten = StyleSheet.flatten({
  placeholder: {
    paddingBottom: 20,
    alignSelf: 'center',
    width: '100%'
  }
});

const styles = {
  ...stylesCreate,
  ...stylesFlatten
};

export { styles as default };
