import React from 'react';
import NavView from "./NavView";
import {fetcher} from "../../utils/fetchJson";

const Navigation = ({activeTabs, navToggleEvent}) => {
    const handleLogout = async () => {
        //TODO: ogarnij chopie co sie tutaj wyczynia pls

        const data = await fetcher(`/auth/logout`, {data:{}});
        // if(data.status === 200){
        //     Cookies.remove('user-id');
        //     router.push('/login')
        // }
    }

    return <NavView handleLogout={() => handleLogout()} activeTabs={activeTabs} navToggleEvent={(name) => (_e) => navToggleEvent(name)} />
}

export default Navigation;
