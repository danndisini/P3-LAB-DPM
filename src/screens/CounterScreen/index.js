import React, { useState, useEffect } from "react";
import { View, Button, StyleSheet } from "react-native";
import CounterDisplay from "../../components/CounterDisplay";

const CounterScreen = () => {
    const [count, setCount] = useState(0);

    
    useEffect(() => {
        console.log("CounterScreen Mounted");

        return () => {
            console.log("CounterScreen Unmounted");
        };
    }, []);

   
    useEffect(() => {
        console.log(`Count Updated: ${count}`);
    }, [count]);

    return (
        <View style={styles.container}>
            <CounterDisplay count={count} />
            <Button title="Increase Count" onPress={() => setCount(count + 1)} />
            <Button
                title="Decrease Count"
                onPress={() => setCount(count > 0 ? count - 1 : 0)}
                color="#ff6347"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f8ff",
        padding: 20,
    },
});

export default CounterScreen;
