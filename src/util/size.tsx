import { Dimensions, Platform, PixelRatio } from 'react-native';

export const SCREEN_WIDTH: number = Dimensions.get('window').width;
export const SCREEN_HEIGHT: number = Dimensions.get('window').height;

var DESIGN_WIDTH = 360;
var DESIGN_HEIGHT = 640;

// 가로 길이 비율 보정 
export function DP(size) {
    var scale = SCREEN_WIDTH / DESIGN_WIDTH;
    let _size = size * scale; 
    _size = PixelRatio.roundToNearestPixel(_size);
    return _size;
}

// 세로 길이 비율 보정
export function YP(size) {
    var scaleY = SCREEN_HEIGHT / DESIGN_HEIGHT;
    let _size = size * scaleY; 
    _size = PixelRatio.roundToNearestPixel(_size);
    return _size;
}

// // 가로 / 세로 비중 덜 차이가 나는 값을 사용함
// // 폰별로 고정값을 갖는다.
// export function RP(len: number) {
//     let wid = SCREEN_WIDTH / DESIGN_WIDTH;
//     let hei = SCREEN_HEIGHT / DESIGN_HEIGHT;
//     let star = wid >= hei ? hei : wid;
//     return star*len;
// }

// 폰트크기 비율 보정
// 사용자가 폰트를 크게 해도 앱은 항상 동일한 크기로 나오게 보정됨
export function SP(size) { 
    //_log('SP getFontScale =>', PixelRatio.getFontScale());
    var scale = SCREEN_WIDTH / DESIGN_WIDTH;
    let _size = size * scale;
 
    // font scale 보정
    _size = _size / PixelRatio.getFontScale();
    _size = PixelRatio.roundToNearestPixel(_size);
    if (_size < 7) {
        _size = 7;
    }
    return _size;
}

// export function FP(size) { 
//     //_log('SP getFontScale =>', PixelRatio.getFontScale());
//     var scale = SCREEN_WIDTH / DESIGN_WIDTH;
//     let _size = size * scale * 1;
//     // font scale 보정
//     _size = _size / PixelRatio.getFontScale();
//     _size = PixelRatio.roundToNearestPixel(_size);
//     return _size;
// }


