import React from 'react';
import PropTypes from 'prop-types';

import { View, Text } from 'react-native';
import { Button } from 'components';

import styles from './styles';
import { NavigationService } from 'services';
import { COLORS } from 'constants';

const ConnectForm = ({
    looking,
    toggleLooking,
}) => (
    <View style={{ flex: 1, justifyContent: 'space-between', backgroundColor: COLORS.white, padding: 20 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {looking ? 
                <View style={styles.circleOne}>
                    <View style={[styles.circleTwo, styles.shadowBtn]}>
                        <View style={[styles.circleThree, styles.shadowBtn]} />
                    </View>
                </View>
                : <View style={[styles.circleThree, { backgroundColor: '#82D200' }, styles.shadowBtn]} />
            }
        </View>
        <Button
            type="primary"
            label={looking ? 'LOOK FOR WIFI DEVICE' : 'CONNECT'}
            labelStyle={{
                marginVertical: 10,
                fontSize: 14,
            }}
            onPress={() => {
                if (looking) {
                    toggleLooking(false);
                } else {
                    NavigationService.navigate('Update');
                }
            }}
        />   
    </View>
);
ConnectForm.propTypes = {
    looking: PropTypes.bool.isRequired,
    toggleLooking: PropTypes.func.isRequired,
};

export default ConnectForm;