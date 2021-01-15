import React from 'react';
import PropTypes from 'prop-types';

import { View, Text } from 'react-native';
import { Button } from 'components';

import Feather from 'react-native-vector-icons/Feather';

import styles from './styles';
import { NavigationService } from 'services';
import { COLORS, FONTS } from 'constants';

const TemperatureForm = () => (
    <View style={{ flex: 1, justifyContent: 'space-between', backgroundColor: COLORS.primary, padding: 20 }}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontFamily: FONTS.regular, fontSize: 14, color: COLORS.white, marginVertical: 60 }}>
                {'What is the target temperature?'}
            </Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ backgroundColor: COLORS.black, height: 44, width: 44, borderRadius: 44, justifyContent: 'center', alignItems: 'center' }}>
                    <Feather name="minus" color="white" size={20} />
                </View>
                <Text style={{ fontFamily: FONTS.bold, fontSize: 44, color: COLORS.white, marginHorizontal: 30 }}>
                    {'17\u00b0'}
                </Text>
                <View style={{ backgroundColor: COLORS.black, height: 44, width: 44, borderRadius: 44, justifyContent: 'center', alignItems: 'center' }}>
                    <Feather name="plus" color="white" size={20} />
                </View>
            </View>
        </View>
        <Button
            type="default"
            label={'NEXT'}
            labelStyle={{
                marginVertical: 10,
                fontSize: 14,
                color: COLORS.primary
            }}
            onPress={() => NavigationService.navigate('Date')}
        />   
    </View>
);
TemperatureForm.propTypes = {};

export default TemperatureForm;