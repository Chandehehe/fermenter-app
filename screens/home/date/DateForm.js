import React from 'react';
import PropTypes from 'prop-types';

import { View, Text } from 'react-native';
import { Button } from 'components';

import Feather from 'react-native-vector-icons/Feather';

// import styles from './styles';
import { COLORS, FONTS } from 'constants';

const DateForm = () => (
    <View style={{ flex: 1, justifyContent: 'space-between', backgroundColor: COLORS.primary, padding: 20 }}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontFamily: FONTS.regular, fontSize: 14, color: COLORS.white, marginVertical: 60 }}>
                {'For how long?'}
            </Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ backgroundColor: COLORS.black, height: 44, width: 44, borderRadius: 44, justifyContent: 'center', alignItems: 'center' }}>
                    <Feather name="minus" color="white" size={20} />
                </View>
                <Text style={{ fontFamily: FONTS.bold, fontSize: 44, color: COLORS.white, marginHorizontal: 30 }}>
                    {'7'}
                    <Text style={{ fontSize: 24 }}>
                        {'days'}
                    </Text>
                </Text>
                <View style={{ backgroundColor: COLORS.black, height: 44, width: 44, borderRadius: 44, justifyContent: 'center', alignItems: 'center' }}>
                    <Feather name="plus" color="white" size={20} />
                </View>
            </View>
            <Text style={{ fontFamily: FONTS.bold, fontSize: 14, color: COLORS.white, marginVertical: 30 }}>
                {'and'}
            </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ backgroundColor: COLORS.black, height: 44, width: 44, borderRadius: 44, justifyContent: 'center', alignItems: 'center' }}>
                    <Feather name="minus" color="white" size={20} />
                </View>
                <Text style={{ fontFamily: FONTS.bold, fontSize: 44, color: COLORS.white, marginHorizontal: 30 }}>
                    {'3'}
                    <Text style={{ fontSize: 24 }}>
                        {'hours'}
                    </Text>
                </Text>
                <View style={{ backgroundColor: COLORS.black, height: 44, width: 44, borderRadius: 44, justifyContent: 'center', alignItems: 'center' }}>
                    <Feather name="plus" color="white" size={20} />
                </View>
            </View>
        </View>
        <Button
            type="default"
            label={'START'}
            labelStyle={{
                marginVertical: 10,
                fontSize: 14,
                color: COLORS.primary
            }}
            onPress={() => null}
        />   
    </View>
);
DateForm.propTypes = {};

export default DateForm;