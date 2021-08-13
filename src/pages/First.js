import React from "react"
import { SafeAreaView,Text,Button } from "react-native"

function First(props){
  
    function navigateToPage(){
        props.navigation.navigate('Second',{username:"MB"})
    }
    return (
        <SafeAreaView>
            <Text>Hello First</Text>
            <Button title="Go to second" onPress={()=>navigateToPage()} />
        </SafeAreaView>
    )
}

export default First