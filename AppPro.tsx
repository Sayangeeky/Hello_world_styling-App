import React from "react";
import {
    View,
    SafeAreaView,
    Text,
    StyleSheet,
    useColorScheme
} from 'react-native'

function AppPro(): JSX.Element{
    const isDarkMode = useColorScheme() === 'dark'
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
                    Hello World!
                </Text>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    whiteText: {
        color: "#FFFFFF"
    },
    darkText: {
        color: "#000000"
    }
})

export default AppPro
