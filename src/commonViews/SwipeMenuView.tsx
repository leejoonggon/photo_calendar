import React from 'react';
import { StyleSheet, View, StatusBar, TouchableOpacity, TextInput, Text } from 'react-native';

interface Props {}
interface State {}

export class SwipeMenuView extends React.Component<Props, State> {

    constructor(props) {
        super(props);     
    }
    
    componentDidMount(): void { //여기 화면이 열리는건데 여기보면 최상위 뷰에
        
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
    },

    button: {
        backgroundColor: 'red', 
        width: 100, 
        height: 100
    }
})