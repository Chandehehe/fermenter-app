/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';

import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Platform,
  Keyboard
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import COLORS from '../constant/Colors';
import FONTS from '../constant/Fonts';

import { isEmpty } from 'lodash';

let custom = COLORS.primary;

const isAndroid = Platform.OS === 'android';

class Button extends React.Component {
  render() {
    const {
      key,
      label,
      onPress,
      type,
      icon,
      labelStyle,
      iconSize,
      style,
      disabled,
      customColor,
      iconPosition,
      disabledStyle,
      iconColor
    } = this.props;
    let buttonStyle = styles.primary;
    let mainContent = null;

    if (type === 'default') {
      buttonStyle = styles.default;
    }

    if (type === 'outline') {
      buttonStyle = styles.outline;
    }

    if (type === 'dark') {
      buttonStyle = styles.dark;
    }

    if (type === 'white') {
      buttonStyle = styles.white;
    }

    if (type === 'custom') {
      if (customColor !== '') {
        custom = customColor;
      }
      buttonStyle = {
        backgroundColor: custom
      };
    }

    if (disabled) {
      if (!isEmpty(disabledStyle)) {
        buttonStyle = disabledStyle;
      } else {
        buttonStyle = styles.disabled;
      }
    }

    if (iconPosition === 'right') {
      mainContent = (
        <TouchableOpacity
          key={key}
          onPress={() => {
            Keyboard.dismiss();
            onPress();
          }}
          disabled={disabled}
          style={[
            buttonStyle,
            Platform.OS === 'android'
              ? styles.androidShadow
              : styles.iosCardShadow,
            styles.iconLabelContainer,
            style,
          ]}
        >
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 10,
              paddingVertical: 5
            }}
          >
            <Text style={[styles.label, labelStyle]}>{label}</Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
              <Feather name={icon} color={iconColor} size={iconSize} />
          </View>
        </TouchableOpacity>
      );
    } else if (iconPosition === 'left') {
      mainContent = (
        <TouchableOpacity
          key={key}
          onPress={() => {
            Keyboard.dismiss();
            onPress();
          }}
          disabled={disabled}
          style={[
            buttonStyle,
            Platform.OS === 'android'
              ? styles.androidShadow
              : styles.iosCardShadow,
            styles.iconLabelContainer,
            style,
          ]}
        >
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Feather name={icon}  color={iconColor} size={iconSize} />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 10
            }}
          >
            <Text style={[styles.label, labelStyle]}>{label}</Text>
          </View>
        </TouchableOpacity>
      );
    } else {
      mainContent = (
        <TouchableOpacity
          key={key}
          onPress={() => {
            Keyboard.dismiss();
            onPress();
          }}
          disabled={disabled}
          style={[
            styles.button,
            // !icon && styles.space,
            // Platform.OS === 'android'
            //   ? styles.androidShadow
            //   : styles.iosCardShadow,
            buttonStyle,
            style,
          ]}
        >
          {icon === 'alert' ? (
            <View style={styles.shadow}>
              <MaterialCommunityIcons name="comment-alert-outline" color={iconColor} size={iconSize} />
            </View>
          ) : icon ? (
            <View style={styles.shadow}>
              <Ionicons name={icon} color={iconColor} size={iconSize} />
            </View>
          ) : null}
          {label !== '' ? (
            <View style={styles.labelContainer}>
              <Text
                style={[
                  styles.text,
                  {
                    color:
                      type === 'outline' || type === 'white'
                        ? COLORS.primary
                        : 'white'
                  },
                  labelStyle,
                ]}
              >
                {label}
              </Text>
            </View>
          ) : null}
        </TouchableOpacity>
      );
    }

    return mainContent;
  }
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
  },
  space: {
    paddingVertical: 10,
    margin: 10
  },
  labelContainer: {
    alignSelf: 'center'
  },
  icon: {
    flex: 0.2
  },
  default: {
    backgroundColor: 'white'
  },
  primary: {
    backgroundColor: COLORS.primary
  },
  outline: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  dark: {
    backgroundColor: COLORS.cancel
  },
  white: {
    backgroundColor: 'white'
  },
  disabled: {
    backgroundColor: COLORS.cancel,
    opacity: 0.6
  },
  custom: {
    backgroundColor: custom
  },
  text: {
    fontSize: 16,
    fontFamily: FONTS.bold,
    textAlign: 'center',
    paddingHorizontal: 10
  },
  shadow: {
    elevation: isAndroid ? 4 : 0,
    shadowOffset: { width: isAndroid ? 5 : 1, height: isAndroid ? 5 : 1 },
    shadowColor: 'black',
    shadowOpacity: isAndroid ? 0.5 : 0.2
  },
  labelAndIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 5
  },
  iconLabelContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    paddingHorizontal: 15,
    borderRadius: 25
  },
  label: {
    textAlign: 'center',
    fontFamily: FONTS.bold,
    fontSize: 16,
    color: 'white',
    paddingHorizontal: 10
  },
  iosCardShadow: {
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowColor: 'black',
    shadowOpacity: 0.1
  },
  androidShadow: {
    elevation: 2,
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowColor: 'black',
    shadowOpacity: 0.5
  }
});

Button.propTypes = {
  key: PropTypes.any,
  label: PropTypes.string,
  type: PropTypes.oneOf([
    'default',
    'primary',
    'outline',
    'dark',
    'white',
    'custom'
  ]),
  onPress: PropTypes.func,
  icon: PropTypes.string,
  labelStyle: PropTypes.any,
  iconSize: PropTypes.number,
  style: PropTypes.any,
  disabled: PropTypes.bool,
  customColor: PropTypes.string,
  iconPosition: PropTypes.string,
  disabledStyle: PropTypes.any,
  iconColor: PropTypes.string,
};

Button.defaultProps = {
  key: 1,
  label: '',
  type: 'primary',
  onPress: () => null,
  icon: '',
  labelStyle: {},
  iconSize: 15,
  style: {},
  disabled: false,
  customColor: '',
  iconPosition: '',
  disabledStyle: {},
  iconColor: 'white'
};

export default Button;
