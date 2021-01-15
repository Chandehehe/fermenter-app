import React from 'react';
import PropTypes from 'prop-types';

import { View, Text } from 'react-native';
import { Button } from 'components';

import Octicons from 'react-native-vector-icons/Octicons';

import styles from './styles';
import { NavigationService } from 'services';
import { COLORS, FONTS } from 'constants';

const UpdateForm = () => (
    <View style={{ flex: 1, justifyContent: 'space-between', backgroundColor: '#E8E5F0', padding: 20 }}>
        <View style={{
            position: 'absolute',
            right: 20,
            top: 20
        }}>
            <Octicons name="settings" color={COLORS.primary} size={30} />
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={[{
                backgroundColor: COLORS.white,
                padding: 10,
                margin: 10,
                borderRadius: 4,
                width: '45%'
            }, styles.shadow]}>
                <Text style={{ fontFamily: FONTS.regular, fontSize: 12 }}>
                    {'Room temperature'}
                </Text>
                <Text style={{ fontFamily: FONTS.bold, fontSize: 30, color: '#FF7A00' }}>
                    {'22.4\u00b0'}
                </Text>
            </View>
            <View style={[{
                backgroundColor: COLORS.white,
                padding: 10,
                margin: 10,
                borderRadius: 4,
                width: '45%'
            }, styles.shadow]}>
                <Text style={{ fontFamily: FONTS.regular, fontSize: 12 }}>
                    {'Fermenter temperature'}
                </Text>
                <Text style={{ fontFamily: FONTS.bold, fontSize: 30, color: '#FA3E3E' }}>
                    {'28.5\u00b0'}
                </Text>
            </View>
        </View>
        <Button
            type="primary"
            label={'NEW FERMENTATION'}
            labelStyle={{
                marginVertical: 10,
                fontSize: 14,
            }}
            onPress={() => NavigationService.navigate('Temperature')}
        />   
    </View>
);
UpdateForm.propTypes = {};

export default UpdateForm;