import { View, SafeAreaView, StyleSheet, ScrollView, Image, Pressable } from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import { StatusBar } from 'expo-status-bar'
import { colors } from '../theme/colors'
import { spacing } from '../theme/spacing'
// import logo from '../svg/LOGO.png'

export default function Home({navigation}) {
    // const navigation = useNavigation(); 
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {/* Upper part */}
                <View style={styles.upperView}>
                    <Image
                        style={styles.logo}
                        source={require('../svg/LOGO.png')}
                    />
                </View>
                {/* Delivery part */}
                <View style={styles.deliveryView}>
                    <View style={styles.deliveryImage}>
                        <Image source={require('../svg/Icon.png')} />
                    </View>
                    {/* Heading text */}
                    <View style={styles.headingText}>
                        <Text preset='h1' style={styles.deliveryText}>
                            Non-Contact
                        </Text>
                        <Text preset='h1' style={styles.deliveryText}>
                            Deliveries
                        </Text>
                    </View>
                    {/* Info text */}
                    <Text preset='small' style={styles.infoText}>
                        When placing an order, select the option “Contactless delivery” and the courier will leave your order at the door.
                    </Text>
                    {/* Button */}
                    <Pressable style={styles.button} onPress={() => navigation.navigate('Item')}>
                        <Text style={{ color: colors.white }}>ORDER NOW</Text>
                    </Pressable>
                    {/* dismiss */}
                    <Pressable style={styles.dismiss} >
                        <Text style={{ color: colors.gray }}>DISMISS</Text>
                    </Pressable>
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
        backgroundColor: '#A259FF',
        height: 310
    },
    logo: {
        marginTop: spacing[10]
    },
    deliveryView: {
        backgroundColor: "#F6F5F5",
        paddingVertical: spacing[7],
        borderRadius: spacing[5],
        marginTop: -20
    },
    deliveryImage: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: spacing[5],
    },
    headingText: {
        alignItems: 'center',
        marginTop: 24,
        fontWeight: '900'
    },
    deliveryText: {
        color: '#2D0C57',
    },
    infoText: {
        // color:colors.gray,
        textAlign: 'center',
        marginVertical: spacing[8]
    },
    button: {
        backgroundColor: "#0BCE70",
        padding: spacing[3],
        alignItems: 'center',
        marginHorizontal: spacing[5],
        borderRadius: 5
    },
    dismiss: {
        // backgroundColor: "#0BCE70",
        padding: spacing[3],
        alignItems: 'center',
        marginHorizontal: spacing[5],
        marginTop: 10
    }
})