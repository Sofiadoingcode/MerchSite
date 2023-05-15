import { useNavigate } from "react-router-dom";
import { useUserDispatchContext } from "./contexts/UserContext"
import { User } from "./types"
import { useEffect } from "react";

export function LogOut() {
    const navigate = useNavigate();
    const dispatch = useUserDispatchContext()
    useEffect(()=>{
    localStorage.removeItem('token')
    dispatch({type: 'removed', user: initialUser})
    navigate('/')
    })
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