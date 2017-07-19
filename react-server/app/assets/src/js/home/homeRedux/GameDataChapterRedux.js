export const ChapterListFilter = {
    Character: "chapter_list1",
    Story: "chapter_list2",
    School: "chapter_list3",
};

export const CharacterIndex = {
    One: "characterList1",
    Two: "characterList2",
    Three: "characterList3",
    Four: "characterList4",
    Five: "characterList5",
};

export const initialState = {
    ChapterListFilter: ChapterListFilter.Character,
    CharacterIndex: CharacterIndex.One
}
export function filterAction(filter) {
    return {
        type: "SetVisibleFilter", filter: filter
    }
}
export function indexAction(filter) {
    return {
        type: "SetCharacterIndex", filter: filter
    }
}
export default function SetFilter(state = initialState, action) {
    switch (action.type) {
        case "SetVisibleFilter":
            return {
                ...state,
                ChapterListFilter: action.filter
            };
        case "SetCharacterIndex":
            return {
                ...state,
                CharacterIndex: action.filter
            };
        default:
            return state;
    }
}