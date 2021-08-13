import React from "react"
import { SafeAreaView,Text,StyleSheet} from "react-native"

function MemberResult({route}){
    const {userName,userSurname,userAge,userMail} = route.params
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.message}>KAYIT TAMAMLANDI</Text>
            <Text style={styles.label}>Ad:{userName}</Text>
            <Text style={styles.label}>Soyad:{userSurname}</Text>
            <Text style={styles.label}>Yaş:{userAge}</Text>
            <Text style={styles.label}>Mail:{userMail}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        margin:10
    },
    message:{
        textAlign:"center",
        fontSize:40,
        fontWeight:"bold",
        marginBottom:10
    },
    label:{
        fontWeight:"bold",
        fontSize:20,
    }
})


export default MemberResult