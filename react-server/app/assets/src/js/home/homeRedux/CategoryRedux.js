const length = 3;//轮播图个数从0开始
var index = 0;

export const intialState = {
    BannerIndex: index,
}
export function SlideChange(filter) {
    return {
        type: 'SlideChange', ItemIndex: filter
    }
}
// export function SlideClick(filter) {
//     return {
//         type: 'SliderClick', ItemIndex: filter
//     }
// }
export function SlideHover(filter) {
    return {
        type: 'SlideHover', ItemIndex: filter
    }
}
// export function SlideMouseOut(filter) {
//     return {
//         type: 'SlideMouseOut', ItemIndex: filter
//     }
// }
function setIndex() {
    if (index < length) {
        index++;
    } else if (index == length) {
        index = 0;
    }
}

export default function SliderReducer(state = intialState, action) {
    switch (action.type) {
        case 'SlideChange':
            setIndex();
            return { ...state, BannerIndex: index };
        case 'SlideHover':
            index=action.ItemIndex;
            return { ...state, BannerIndex: index };
        default:
            return state;
    }
}