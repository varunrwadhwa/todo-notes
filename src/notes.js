import React from 'react';
import {
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
} from 'react-native';

const Notes = () => {
    return (
        <View style={styles.mainView}>
            <Text style={styles.text}>
                Good Evening , Varun
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: "red",
        borderRadius: 25
    },
    text: {
        color: "black",
        fontSize: 30,
        textAlign: 'left',
        marginLeft: 10,
        paddingTop: 10,
        paddingBottom: 10
    }
})

export default Notes;