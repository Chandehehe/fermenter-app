import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, Dimensions } from 'react-native';
import { Button } from 'components';

import Octicons from 'react-native-vector-icons/Octicons';
import {
    LineChart
  } from "react-native-chart-kit";

import styles from './styles';
import { NavigationService } from 'services';
import { COLORS, FONTS } from 'constants';

const GraphForm = () => (
    <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View style={{
            position: 'absolute',
            right: 20,
            top: 20
        }}>
            <Octicons name="settings" color={COLORS.primary} size={30} />
        </View>
        <View style={{
            flexDirection: 'row', justifyContent: 'flex-start', padding: 20
        }}>
            <View style={[{ backgroundColor: COLORS.white, borderRadius: 4, padding: 10, marginRight: 10, alignItems: 'flex-start' }, styles.shadow]}>
                <Text style={{ fontFamily: FONTS.regular, fontSize: 7, color: '#3C3C43' }}>
                    {'total'}
                </Text>
                <Text style={{ fontFamily: FONTS.regular, fontSize: 10, fontWeight: '700', color: '#7459D9' }}>
                    {'7 days'}
                </Text>
            </View>
            <View style={[{ backgroundColor: COLORS.white, borderRadius: 4, padding: 10, marginRight: 10, alignItems: 'flex-start' }, styles.shadow]}>
                <Text style={{ fontFamily: FONTS.regular, fontSize: 7, color: '#3C3C43' }}>
                    {'remaining'}
                </Text>
                <Text style={{ fontFamily: FONTS.regular, fontSize: 10, fontWeight: '700', color: '#7459D9' }}>
                    {'7 days'}
                </Text>
            </View>
            <View style={[{ backgroundColor: COLORS.white, borderRadius: 4, padding: 10, marginRight: 10, alignItems: 'flex-start' }, styles.shadow]}>
                <Text style={{ fontFamily: FONTS.regular, fontSize: 7, color: '#3C3C43' }}>
                    {'target'}
                </Text>
                <Text style={{ fontFamily: FONTS.regular, fontSize: 10, fontWeight: '700', color: '#7459D9' }}>
                    {'17\u00b0'}
                </Text>
            </View>
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', backgroundColor: '#E8E5F0' }}>
            <LineChart
                data={{
                labels: ["1h", "8h", "16h", "24h"],
                datasets: [
                    {
                        data: [
                            25,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                        ],
                        color: () => '#82D200',
                    },
                    {
                        data: [
                            22,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                        ],
                        color: () => '#FF7A00',
                    },
                    {
                        data: [
                            17,
                            17,
                            17,
                            17,
                        ],
                        color: () => '#5B4A99',
                    }
                ]
                }}
                width={Dimensions.get("window").width} // from react-native
                height={220}
                // yAxisLabel={'\u00b0'}
                yAxisSuffix={'\u00b0'}
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundColor: COLORS.white,
                    backgroundGradientFrom: COLORS.white,
                    backgroundGradientTo: COLORS.white,
                    decimalPlaces: 0, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: () => COLORS.primary,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "white"
                    }
                }}
                bezier
                style={{
                    // marginVertical: 8,
                    // borderRadius: 16
                }}
            />
            <View style={{ padding: 20, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                    <View style={{ backgroundColor: '#FF7A00', height: 12, width: 12, borderRadius: 12, borderColor: COLORS.white, borderWidth: 2 }} />
                    <Text style={{ marginLeft: 10, fontFamily: FONTS.regular, fontSize: 10 }}>
                        {'Room temperature'}
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                    <View style={{ backgroundColor: '#82D200', height: 12, width: 12, borderRadius: 12, borderColor: COLORS.white, borderWidth: 2 }} />
                    <Text style={{ marginLeft: 10, fontFamily: FONTS.regular, fontSize: 10 }}>
                        {'Fermenter temperature'}
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                    <View style={{ backgroundColor: COLORS.primary, height: 12, width: 12, borderRadius: 12, borderColor: COLORS.white, borderWidth: 2 }} />
                    <Text style={{ marginLeft: 10, fontFamily: FONTS.regular, fontSize: 10 }}>
                        {'Target temperature (17\u00b0)'}
                    </Text>
                </View>
            </View>
        </View>
        <View style={{ backgroundColor: '#E8E5F0', padding: 20 }}>
            <Button
                type="primary"
                label={'STOP'}
                labelStyle={{
                    marginVertical: 10,
                    fontSize: 14,
                }}
                onPress={() => null}
            />   
        </View>
    </View>
);
GraphForm.propTypes = {};

export default GraphForm;