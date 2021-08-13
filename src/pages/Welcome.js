import React from "react"
import { SafeAreaView,Text,View,StyleSheet } from "react-native"
import Button from "../components/Button"

function Welcome(props){
    function memberSign(){
        props.navigation.navigate("MemberSignScreen");
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Spor Salonu</Text>
            <Button text="Üye Kaydı Oluştur" onPress={memberSign} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        padding:10,
        backgroundColor:"#121725"
    },
    header:{
        fontSize:40,
        fontWeight:"bold",
        textAlign:"center",
        margin:10,
        color:"white"
    }
})

export default Welcome