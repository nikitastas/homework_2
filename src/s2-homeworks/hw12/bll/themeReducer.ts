const initState = {
    themeId: 1,
}

export type ThemeStateType = {
    themeId: number
}

export const themeReducer = (state = initState, action: ActionsType): ThemeStateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {...state, themeId: +action.id}

        default:
            return state
    }
}

type ActionsType = ReturnType<typeof changeThemeId>

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id } as const) // fix any
