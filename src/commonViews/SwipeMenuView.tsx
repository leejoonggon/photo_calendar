import React from 'react';
import { StyleSheet, View, StatusBar, TouchableOpacity, TextInput, Text } from 'react-native';

interface Props {}
interface State {}

export class SwipeMenuView extends React.Component<Props, State> {

    constructor(props) {
        super(props);     
    }
    
    componentDidMount(): void {
        
    }


    componentWillUnmount(): void {
        
    }

 
    render(): React.ReactNode {


        return(
            <View style={styles.container}>
                <View style={styles.button}>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#876543'
    },

    button: {
        backgroundColor: 'red', 
        width: 100, 
        height: 100
    }
})