export const ChapterListFilter={
    Character:"chapter_list1",
    Story:"chapter_list2",
    School:"chapter_list3",
};

export const initialState={
    ChapterListFilter:ChapterListFilter.Character,
    visible:false
}
export function filterAction(filter){
    return {
        type:"SetVisibleFilter",filter:filter
    }
}
export default function SetFilter(state=initialState,action){
    switch(action.type){
        case "SetVisibleFilter":
        console.log('ccccc');
        return Object.assign({},state,{ChapterListFilter:action.filter});
        default:
        return state;
    }
}