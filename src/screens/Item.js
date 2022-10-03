import { View, SafeAreaView, StyleSheet, ScrollView, Image, Pressable } from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import { StatusBar } from 'expo-status-bar'
import { colors } from '../theme/colors'
import { spacing } from '../theme/spacing'
import SwiperComponent from '../components/Slider/Slider'

export default function Item({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {/* Upper slider part */}
                <View style={styles.upperView}>
                    <SwiperComponent />
                </View>
                {/* Delivery part */}
                <View style={styles.lowerView}>
                    {/* Heading text */}
                    <View style={styles.headingText}>
                        <Text preset='h1' style={styles.name}>
                            Boston Lettuce
                        </Text>
                        {/* price */}
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16 }}>
                            <Text preset='h1' style={styles.name}>
                                1.10
                            </Text>
                            <Text preset='small' style={{ marginLeft: 10, fontSize: 22 }}>
                                € / piece
                            </Text>
                        </View>
                        {/* local money */}
                        <View style={{marginBottom: 10}}>
                            <Text style={{ color: colors.green, marginTop: 10, fontWeight: '800' }}>~ 150 gr / piece</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16 }}>
                        <Text preset='h1' style={styles.name}>
                            spain
                        </Text>
                    </View>
                    {/* Info text */}
                    <Text preset='small' style={styles.infoText}>
                        Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.
                    </Text>
                    {/* Buttons */}
                    <View style={styles.buttons}>
                        <Pressable style={styles.like}>
                            <Image source={require('../svg/Vector.png')} />
                        </Pressable>
                        <Pressable style={styles.button} onPress={() => navigation.navigate('Home')}>
                            <Image source={require('../svg/shopping-cart.png')} />
                            <Text style={{ color: colors.white, marginLeft: 10 }}>ADD TO CART</Text>
                        </Pressable>
                    </View>

                </View>
            </ScrollView>
            <StatusBar style='white' />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    upperView: {
        height: 310
    },
    lowerView: {
        backgroundColor: "#F6F5F5",
        paddingVertical: spacing[5],
        borderRadius: spacing[5],
        paddingHorizontal: spacing[5],
        marginTop: -20
    },
    name: {
        color: "#2D0C57",
        fontWeight: 'bold',
        fontSize: 26,
    },
    deliveryText: {
        color: '#2D0C57',
    },
    infoText: {
        textAlign: 'left',
        marginVertical: spacing[3]
    },
    buttons:{
        flexDirection:'row',
        marginTop: 30
    },
    like:{
        borderWidth: 1,
        paddingVertical: spacing[3],
        borderColor:'#D9D0E3',
        borderRadius: 8,
        width: 60,
        alignItems:'center'
    },
    button: {
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor: "#0BCE10",
        padding: spacing[3],
        alignItems: 'center',
        borderRadius: 5,
        flex:1,
        marginLeft: 20
    },
})