const length = 4;//轮播图个数
var index = 0;
var inter = 0;

export const intialState = {
    BannerIndex: index
}
export function SlideChange(filter) {
    return {
        type: 'SlideChange', ItemIndex: filter
    }
}
export function SlideClick(filter) {
    return {
        type: 'SliderClick', ItemIndex: filter
    }
}
export function SlideHover(filter) {
    return {
        type: 'SlideHover', ItemIndex: filter
    }
}
export function SlideMouseOut(filter) {
    return {
        type: 'SlideMouseOut', ItemIndex: filter
    }
}
function setIndex() {
    inter = setInterval(function () {
        if (index < length) {
            index++;
        } else if (index == length) {
            index = 0;
        }
    }, 3000);
}

export default function SliderReducer(state = intialState, action) {
    switch (action.type) {
        case 'SlideChange':
            setIndex();
            return { ...state, BannerIndex: index };
        case 'SlideHover':
            clearInterval(inter);
            return { ...state, BannerIndex: index };
        case 'SlideMouseOut':
            setIndex();
            return { ...state, BannerIndex: index };
        case 'SliderClick':
            clearInterval(inter);
            return { ...state, BannerIndex: index };
        default:
            return state;
    }
}