import React,{useState} from "react"
import { SafeAreaView, Alert } from "react-native"

import Input from "../components/Input"
import Button from "../components/Button"

function MemberSign({navigation}){
    const [userName,setUserName] = useState("");
    const [userSurname,setSurname] = useState("");
    const [userAge,setUserAge] = useState("");
    const [userMail,setUserMail] = useState("");
    
    function handleSubmit(){
        if(!userName || !userSurname || !userAge || !userMail){
            Alert.alert("UYARI","Bilgiler boş bırakılamaz")
        }
        else{
            const user ={userName,userSurname,userAge,userMail}
            navigation.navigate("MemberResultScreen",user)
        }
    }

    return (
        <SafeAreaView>
            <Input label="Üye Ad" placeholder={"Üyenin ismini giriniz"} onChangeText={setUserName} />
            <Input label="Üye Soyad" placeholder={"Üyenin soyadını giriniz"}  onChangeText={setSurname}/>
            <Input label="Üye Yaş" placeholder={"Üyenin yaşını giriniz"}  onChangeText={setUserAge}/>
            <Input label="Üye E-posta" placeholder={"Üyenin e-posta adresini giriniz"} onChangeText={setUserMail} />
            <Button text="Kaydı Tamamla" onPress={handleSubmit} />
        </SafeAreaView>
    )
}

export default MemberSign