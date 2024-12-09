import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CounterDisplay = ({ count }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Current Count: {count}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        alignItems: "center",
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#444",
    },
});

export default CounterDisplay;
