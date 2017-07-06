const ChapterListFilter={
    Character:"0$LI",
    Story:"1$LI",
    School:"2$LI",
};

const initialState={
    ChapterListFilter:ChapterListFilter.Character,
    visible:false
}
export function filterAction(filter){
    return {
        type:"SetVisibleFilter",filter
    }
}
export default function SetFilter(state=initialState,action){
    switch(action.type){
        case "SetVisibleFilter":
        return Object.assign({},state,{ChapterListFilter:action.filter});
        default:
        return state;
    }
}