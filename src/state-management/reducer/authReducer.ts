
interface LoginAction {
    type: 'LOGIN';
    username: string;
}

interface LogoutAction {
    type: 'LOGOUT';
}

type AuthAction = LoginAction | LogoutAction;

export default (state: string, action: AuthAction): string => {
    if (action.type === 'LOGIN')
        return action.username;

    if (action.type === 'LOGOUT')
        return '';

    return state
}