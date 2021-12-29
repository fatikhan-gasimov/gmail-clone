import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../assets/colors'
const MeetScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Meet screen</Text>
        </View>
    )
}

export default MeetScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    }
})
