import { useEffect } from 'react'
import Router from 'next/router'
import useSWR from 'swr'
import {fetcher} from "../../utils/fetchJson";

export default function useUser({
    redirectTo = false,
    redirectIfFound = false,
    id,
} = {}) {
    const { data: user, mutate: mutateUser, error } = useSWR(`/users/${id}`, fetcher)
    useEffect(() => {
        if ((!redirectTo || !user)) return
        if (
            (error && error.status === 401) ||
            (redirectTo && !redirectIfFound && !user?.data) ||
            (redirectIfFound && user?.data)
        ) {
            Router.push(redirectTo)
        }
    }, [user, redirectIfFound, redirectTo, error])

    return { user, isError: error, isLoading: !user && !error, mutateUser }
}
