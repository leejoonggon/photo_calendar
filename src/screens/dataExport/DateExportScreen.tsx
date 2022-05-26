import React from 'react';
import { StyleSheet, View, StatusBar, Image, TouchableOpacity, TextInput, Text, ViewBase, ShadowPropTypesIOS } from 'react-native';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import { displayPartsToString } from 'typescript';
import { DP, SP } from '../../util/size';

interface Props {}
interface State {

}

export class DateExportScreen extends React.Component<Props, State> {

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
                <StatusBar 
                    hidden={true}
                />

                <View style={styles.header_box}>
                    <Image
                        source={require('../../resources/backicon.png')}
                        style={styles.backicon}
                    />
                    <Text style={styles.headertitle_text}>
                        데이터 관리/내보내기
                    </Text>
                </View>

                <View style={styles.title_box}>
                    <Text style={styles.title_text}>
                        내보내기
                    </Text>
                </View>

                <View style={styles.subtitle_box}>
                    <Text style={styles.subtitle_text}>
                        텍스트로 내보내기
                    </Text>
                </View>

                <View style={styles.info_box}>
                    <Text style={styles.info_text}>
                        {
                        'TXT파일로 다운로드 폴더에 저장되며 편집기에서 읽을 \n수 있습니다.'
                        }
                    </Text>
                </View>

                <View style={styles.subtitle_box}>
                    <Text style={styles.subtitle_text}>
                        CSV파일로 내보내기
                    </Text>
                </View>

                <View style={styles.info_box}>
                    <Text style={styles.info_text}>
                        CSV파일로 다운로드 폴더에 저장되며 MS EXCEL에서 읽을 수 있습니다.
                    </Text>
                </View>

                <View style={styles.line_box}>
                    <View style={styles.line}>
                    </View>
                </View>

                <View style={styles.title_box}>
                    <Text style={styles.title_text}>
                        백업/복구
                    </Text>
                </View>

                <View style={styles.subtitle_box}>
                    <Text style={styles.subtitle_text}>
                        백업하기
                    </Text>
                </View>

                <View style={styles.info_box_oneline}>
                    <Text style={styles.info_text_oneline}>
                        다운로드 폴더에 압축파일 형태로 저장됩니다.
                    </Text>
                </View>

                <View style={styles.subtitle_box}>
                    <Text style={styles.subtitle_text}>
                        복구하기 - 초기화 후 복구
                    </Text>
                </View>

                <View style={styles.info_box_oneline}>
                    <Text style={styles.info_text_oneline}>
                        기존 데이터를 삭제 후 복원합니다.
                    </Text>
                </View>

                <View style={styles.toggle_box}>
                    <Text style={styles.toggle_text}>
                        자동 동기화
                    </Text>

                    <Image
                        source={require('../../resources/toggle_off.png')}
                        style={styles.toggle_off}
                    />
                </View>

                <View style={styles.info_box_oneline}>
                    <Text style={styles.info_text_oneline}>
                        데이터를 자동으로 동기화합니다.
                    </Text>
                </View>

                <View style={styles.line_box}>
                    <View style={styles.line}>
                    </View>
                </View>

                <View style={styles.title_box}>
                    <Text style={styles.title_text}>
                        초기화
                    </Text>
                </View>

                <View style={styles.subtitle_box}>
                    <Text style={styles.subtitle_text}>
                        초기화
                    </Text>
                </View>

                <View style={styles.info_box}>
                    <Text style={styles.info_text}>
                        데이터를 모두 삭제합니다.
                    </Text>
                </View>

                          
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF', 
    },

    header_box: {
        backgroundColor: 'grey',
        height: DP(48),
        marginTop: DP(24),
        alignItems: 'center',
        flexDirection: 'row',
    },

    backicon: {
        height: DP(24),
        width: DP(24),
        marginLeft: DP(16),
    },

    headertitle_text: {
        backgroundColor: 'orange',
        height: DP(24),
        width: DP(194),
        marginLeft: DP(43),
        fontSize: SP(20),
        color: '#383838',
        textAlign: 'center',
        textAlignVertical: 'center',
    },

    title_box: {
        backgroundColor: 'blue',
        height: DP(40),
        marginTop: DP(16),
        justifyContent: 'center',
        // alignItems: 'center',
        // flexDirection: 'row'
    },

    title_text: {
        backgroundColor: 'yellow',
        height: DP(24),
        width: DP(264),
        marginLeft: DP(16),
        fontSize: SP(18),
        fontWeight: 'bold',
        color: '#9489CD',
        textAlignVertical: 'center',
    },

    subtitle_box: {
        backgroundColor: 'blue',
        height: DP(28),
        marginTop: DP(4),
        justifyContent: 'center',
    },

    subtitle_text: {
        backgroundColor: 'orange',
        height: DP(20),
        width: DP(191),
        marginLeft: DP(16),
        fontSize: SP(16),
        color: '#444444',
        textAlignVertical: 'center',
    },

    info_box: {
        backgroundColor: 'grey',
        height: DP(40),
        marginTop: DP(2),
        marginBottom: DP(5-1),
        justifyContent: 'center',
        alignItems: 'center',
    },

    info_text: {
        backgroundColor: 'yellow',
        height: DP(32),
        width: DP(328),
        fontSize: SP(14),
        color: '#CCCCCC',
        textAlignVertical: 'center',
    },

    info_box_oneline: {
        backgroundColor: 'grey',
        height: DP(24),
        marginTop: DP(2),
        marginBottom: DP(5),
        justifyContent: 'center',
        alignItems: 'center',
    },

    info_text_oneline: {
        backgroundColor: 'yellow',
        height: DP(16),
        width: DP(328),
        fontSize: SP(14),
        color: '#CCCCCC',
        textAlignVertical: 'center',
    },

    toggle_box: {
        backgroundColor: 'red',
        height: DP(28),
        marginTop: DP(4),
        alignItems: 'center',     
        flexDirection: 'row',
    },

    toggle_text: {
        backgroundColor: 'green',
        height: DP(20),
        width: DP(191),
        marginLeft: DP(16),
        fontSize: SP(16),
        color: '#444444',
        textAlignVertical: 'center',

    },
    
    toggle_off: {
        // backgroundColor: 'red',
        height: DP(22),
        width: DP(46),
        marginLeft: DP(91),
    },

    line_box: {
        // backgroundColor: 'red',
        marginTop: DP(16-1),
        height: DP(1),
        justifyContent: 'center',
        alignItems: 'center',
    },

    line: {
        backgroundColor: '#E8E8E8',
        height: DP(1),
        width: DP(328),
    },

})