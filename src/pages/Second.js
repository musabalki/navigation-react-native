import React from "react"
import { SafeAreaView,Text,Button } from "react-native"

function Second(props){
    const user = props.route.params.username;
    //const {username} = props.route.params;

    function backToFirst(){
        props.navigation.goBack()
    }
    return (
        <SafeAreaView>
            <Text>Hello Second</Text>
            <Text>{user}</Text>
            <Button title="Go Back" onPress={backToFirst} />
        </SafeAreaView>
    )
}

export default Second