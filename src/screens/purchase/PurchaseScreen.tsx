import React from 'react';
import { StyleSheet, View, StatusBar, Image, TouchableOpacity, TextInput, Text, ViewBase, ShadowPropTypesIOS } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import { DP, SP } from '../../util/size';

interface Props {}
interface State {

}

export class PurchaseScreen extends React.Component<Props, State> {

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
            <ScrollView>
                <View style={styles.header_box}>
                    <Image
                        source={require('../../resources/backicon_white.png')}
                        style={styles.backicon}
                    />
                    <Text style={styles.headertitle_text}>
                        구매하기
                    </Text>
                
                </View>


                <View style={styles.purchase_box}>
                    <View style={styles.purchase}>
                        <Text style={styles.purchase_text}>
                            프리미엄 구매 (평생)
                        </Text>

                        <Text style={styles.price_text}>
                            8,900원
                        </Text>
                    </View>                  
                </View>

                <View style={styles.benefit_box}>
                    <View style={styles.benefit_one}>
                        <Image
                            source={require('../../resources/adicon.png')}
                            // style={styles.adicon}
                        />
                        <Text style={styles.benefit_text_one}>
                            {
                                '모든 광고가 제거되어서 넓은\n화면에서 어플을\n이용하실수 있습니다.'
                            }
                        </Text>
                    </View>   

                    <View style={styles.benefit_two}>
                        <Image
                            source={require('../../resources/popupicon.png')}
                            // style={styles.popupicon}
                        />
                        <Text style={styles.benefit_text_two}>
                            {
                                '귀찮은 리뷰 요청 팝업창도 모두\n사라지게 됩니다.'
                            }
                        </Text>
                    </View>     

                    <View style={styles.benefit_two}>
                        <Image
                            source={require('../../resources/manageicon.png')}
                            // style={styles.manageicon}
                        />
                        <Text style={styles.benefit_text_two}>
                            {
                                '구매 내역은 스마트폰 os\n계정이 귀속이 됩니다.'
                            }
                        </Text>
                    </View> 

                    <View style={styles.benefit_sub_box}>   
                        <Text style={styles.benefit_sub_text}>
                            {
                                '( *앱 삭제시 기존 데이터들은 모두 삭제되어 복구\n할 수 없습니다. 복구를 원할시 로그인 후 백업기능\n을 이용하세요. 기기변경시 같은 계정으로 로그인하\n셔야 합니다. )'
                            }
                        </Text> 
                    </View>  

                    <View style={styles.benefit_two}>
                        <Image
                            source={require('../../resources/likesicon.png')}
                            // style={styles.likesicon}
                        />
                        <Text style={styles.benefit_text_two}>
                            {
                                '무료 버전을 충분히 써 보시고\n결정해 주세요. 감사합니다.'
                            }
                        </Text>
                    </View>        

                </View>
                
                <View style={styles.purchase_btn_box}>
                        <Text style={styles.purchase_btn_text}>
                            구매하기
                        </Text>                       
                </View>
           
            </ScrollView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#383838', 
    },

    header_box: {
        // backgroundColor: 'grey',
        height: DP(48),
        marginTop: DP(24),
        alignItems: 'center',
        flexDirection: 'row',
    },

    backicon: {
        // backgroundColor: 'black',
        height: DP(24),
        width: DP(24),
        marginLeft: DP(16),
    },

    headertitle_text: {
        // backgroundColor: 'orange',
        height: DP(23),
        width: DP(78),
        marginLeft: DP(101),
        fontSize: SP(20),
        lineHeight: SP(23.44),  
        color: '#FFFFFF',
        textAlign: 'center',
        textAlignVertical: 'center',
    },

    purchase_box: {
        // backgroundColor: 'green',
        height: DP(156),
        justifyContent: 'center',
    },

    purchase: {
        // backgroundColor: 'pink',
        height: DP(76),
        justifyContent: 'space-between',
        alignItems: 'center',
    }, 

    purchase_text: {
        // backgroundColor: 'orange',
        height: DP(27),
        width: DP(205),
        fontSize: SP(22),
        lineHeight: SP(26.63),  
        color: '#FFFFFF',
        textAlign: 'center',
    },

    price_text: {
        // backgroundColor: 'orange',
        height: DP(39),
        width: DP(134),
        fontSize: SP(32),
        lineHeight: SP(38.73),  
        color: '#FFFFFF',
        textAlign: 'center',
    },

    benefit_box: {
        backgroundColor: '#FFFFFF',
        height: DP(558),
    },

    benefit_one: {
        // backgroundColor: 'skyblue',
        height: DP(90),
        marginTop: DP(32),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    benefit_text_one: {
        // backgroundColor: 'orange',
        height: DP(66),
        width: DP(248),
        marginLeft: DP(16),
        fontSize: SP(18),
        lineHeight: SP(21.78),  
        color: '#444444',
    },

    benefit_two: {
        // backgroundColor: 'skyblue',
        height: DP(72),
        marginTop: DP(16),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
 
    benefit_text_two: {
        // backgroundColor: 'orange',
        height: DP(66-22),
        width: DP(248),
        marginLeft: DP(16),
        fontSize: SP(18),
        lineHeight: SP(21.78),  
        color: '#444444',
    },

    benefit_sub_box: {
        // backgroundColor: 'skyblue',
        height: DP(92),
        marginTop: DP(16),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
 
    benefit_sub_text: {
        // backgroundColor: 'white',
        height: DP(68),
        width: DP(296),
        fontSize: SP(14),
        lineHeight: SP(16.94),  
        color: '#ED6D6D',
    },
   
    purchase_btn_box: {
        // backgroundColor: 'skyblue',
        backgroundColor: '#383838',
        height: DP(70),
        justifyContent: 'center',
        alignItems: 'center',        
    },

    purchase_btn_text: {
        // backgroundColor: 'orange',
        height: DP(24),
        width: DP(78),
        fontSize: SP(20),
        lineHeight: SP(24.2),  
        color: '#FFFFFF',
        textAlign: 'center',
    },



})