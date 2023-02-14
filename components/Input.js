import React, { UseState } from "react";
import { Text, TextInput, View,StyleSheet } from "react-native";

export default ({title,...rest}) => {
    return (
        <View style={styles.wrapper}>
            <Text>{title}</Text>
            <TextInput {...rest}></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        heigt:40,
    }
})