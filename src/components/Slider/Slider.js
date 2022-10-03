import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native'

import Swiper from 'react-native-swiper'

const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo:{
        width: '100%',
    }
})

export default class SwiperComponent extends Component {
    render() {
        return (
            // showsButtons={true}
            <Swiper style={styles.wrapper} >
                <View style={styles.slide1}>
                    <Image
                        style={styles.logo}
                        source={require('../../svg/Media.png')}
                    />
                </View>
                <View style={styles.slide2}>
                    <Image
                        style={styles.logo}
                        source={require('../../svg/two.webp')}
                    />
                </View>
                <View style={styles.slide3}>
                    <Image
                        style={styles.logo}
                        source={require('../../svg/three.webp')}
                    />
                </View>
            </Swiper>
        )
    }
}

AppRegistry.registerComponent('myproject', () => SwiperComponent)