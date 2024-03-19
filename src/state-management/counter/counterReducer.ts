
interface Action {
    type: 'INCREMENT' | 'RESET'
}

export default (state: number, action: Action) => {
    if (action.type === 'INCREMENT')
        return state + 1;

    if (action.type === 'RESET')
        return 0;

    return state;
}