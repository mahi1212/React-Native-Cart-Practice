import { ScrollView, View, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import { StatusBar } from 'expo-status-bar'

export default function Item({ route }) {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Text</Text>
            <StatusBar style='white' />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})