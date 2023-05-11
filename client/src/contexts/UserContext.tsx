import React, {createContext, useReducer, useContext} from 'react';
import {User,  UserActions, CartActions} from '../types';

const UserContext = createContext<User | undefined>(undefined);
const UserDispatchContext = createContext<React.Dispatch<UserActions> | undefined>(undefined);


export function UserContextProvider({children}: { children: JSX.Element }) {
    const [user, dispatch] = useReducer(
        userReducer,
        initialUser
    );
    return (
        <UserContext.Provider value={user}>
            <UserDispatchContext.Provider value={dispatch}>
                {children}
            </UserDispatchContext.Provider>
        </UserContext.Provider>
    );
}


const initialUser: User = {
    id: '',
    username: '',
    password: '',
    role: '',
    email: '',
    name: '',
    phone: ''
}


function userReducer(user: User, action: UserActions) {
    switch (action.type) {
        case 'added': {
            return {
                ...user,
                id: action.user.id,
                username: action.user.username,
                password: action.user.password,
                role: action.user.role,
                name: action.user.name,
                email: action.user.email,
                phone: action.user.phone


            };
        }
        case 'removed': {
            return initialUser
        }
    }
}

export function useUserContext() {
    let context = useContext(UserContext)
    if (context === undefined) {
        throw Error('Used outside of context')
    }
    return context
}

export function useCartDispatchContext() {
    let context = useContext(UserDispatchContext)
    if (context === undefined) {
        throw Error('Used outside of context')
    }
    return context
}