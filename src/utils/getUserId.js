import {useEffect, useState} from "react";
import Cookies from 'js-cookie';

export default function getUserId() {
    const [userId, setUserId] = useState('');

    useEffect(() => {
        if(Cookies.get('user-id')){
            setUserId(Cookies.get('user-id'))
        }
    }, []);
    return userId;
}
