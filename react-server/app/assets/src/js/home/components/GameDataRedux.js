const ChapterListFilter={
    Character:"Character",
    Story:"Story",
    School:"School",
};

const initialState={
    ChapterListFilter:ChapterListFilter.Character,
    visible:false
}
export function FilterAction(filter){
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