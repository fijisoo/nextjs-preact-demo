import { useEffect } from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import Cookies from "js-cookie";

export default function useUser({
    redirectTo = false,
    redirectIfFound = false,
    id,
} = {}) {
    const { data: user, mutate: mutateUser, error } = useSWR(`/users/${id}`);
    const router = useRouter();
    useEffect(() => {
        if(user?.data?.isLogged) Cookies.set('user-id', user?.data?.userId);
        if ((!redirectTo || !user)) return
        if (
            (error && error.status === 401) ||
            (redirectTo && !redirectIfFound && !user?.data) ||
            (redirectIfFound && user?.data)
        ) {
            router.push(redirectTo)
        }
    }, [user, redirectIfFound, redirectTo, error])

    return { user, isError: error, isLoading: !user && !error, mutateUser }
}
