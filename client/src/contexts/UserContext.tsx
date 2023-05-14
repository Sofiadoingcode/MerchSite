import React, {createContext, useReducer, useContext} from 'react';
import {User,  UserActions, CartActions} from '../types';
import jwtDecode, {JwtPayload} from 'jwt-decode';

const UserContext = createContext<User | undefined>(undefined);
const UserDispatchContext = createContext<React.Dispatch<UserActions> | undefined>(undefined);

type customJwtPayload = JwtPayload & { username: User };

export function UserContextProvider({children}: { children: JSX.Element }) {
    const [user, dispatch] = useReducer(
        userReducer,
        getInitialState()
    );
    return (
        <UserContext.Provider value={user}>
            <UserDispatchContext.Provider value={dispatch}>
                {children}
            </UserDispatchContext.Provider>
        </UserContext.Provider>
    );
}

const getInitialState = () => {
    let token = localStorage.getItem('token');
    if(!token){
        return initialUser
    }
    let userObject = getDecodedToken(token)
    if(userObject){
        if('_id' in userObject.username){
            delete Object.assign(userObject.username, {['id']: userObject.username['_id'] })['_id'];
        }
        return userObject.username
    }
    else {
        return initialUser
    }
  }
console.log(getInitialState())
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
function getDecodedToken(token: string) {
    try {
      return jwtDecode<customJwtPayload>(token);
    } catch(Error) {
      return null;
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