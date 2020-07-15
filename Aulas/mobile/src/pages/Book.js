import React, {useState} from "react";
import { SafeAreaView, Alert, StyleSheet, TouchableOpacity, TextInput, AsyncStorage, Text } from "react-native";

import api from "../services/api";

export default function Book({ navigation }){
    const [date, setDate] = useState("");
    const id = navigation.getParam("id");

    async function handleSubmit(){
        const user_id = await AsyncStorage.getItem("user");
        await api.post(`/spots/${id}/bookings`, {
            date
        }, {
            headers: { user_id }
        });

        Alert.alert("Solicitação de reserva enviada!.");

        navigation.navigate("List");
    }

    function handleCancel (){
        navigation.navigate("List");
    }
    return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.label}>DATA DE INTERESSE</Text>
            <TextInput style={styles.input} 
            placeholder="Qual data você quer reservar?"
            placeholderTextColor="#999"
            autoCapitalize="words"
            autoCorrect={false}
            value={date}
            onChangeText={setDate}
        />

        <TouchableOpacity onPress={handleSubmit} style={styles.bottom}>
            <Text style={styles.textBottom}>Solicitar Reserva</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleCancel} style={[styles.buttom, styles.cancelButtom]}>
            <Text style={styles.textBottom}>Cancelar</Text>
        </TouchableOpacity>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 30,
        marginTop: 50
    },

    label: {
        fontWeight: "bold",
        color: "#444",
        marginBottom: 8,
        marginTop: 30
    },

    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        paddingHorizontal: 20,
        fontSize: 16,
        height: 44,
        marginBottom: 20,
        borderRadius: 10
    },

    bottom: {
        height: 42,
        backgroundColor: "#f05a5b",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },

    textBottom: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },

    cancelButtom: {
        height: 42,
        backgroundColor: "#ccc",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginTop: 10
    }
})