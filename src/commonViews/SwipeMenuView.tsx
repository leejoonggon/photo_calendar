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
        //backgroundColor: '#876543' //이게 먹여져있어서 이 색깔이 나오는거야 아/ 그럼 이게 보니간 이게 더 상우이ㅑ 
        //아까 그 백그라운드 색깔이 먹히는지 모르겟네  잠만 
    },

    button: {
        backgroundColor: 'red', 
        width: 100, 
        height: 100
    }
})