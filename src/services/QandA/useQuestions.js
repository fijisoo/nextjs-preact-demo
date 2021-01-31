import useSWR from 'swr'
import getUserId from "../../utils/getUserId";

export function useSearchQuestion(searchText) {
    const userId = getUserId();

    const { data: questions, mutate: mutateQuestions, error } = searchText ?
        useSWR(!!userId ? `/userQuestions/${userId}?s=${searchText}` : null) :
        useSWR(!!userId ? `/userQuestions/${userId}` : null);

    return { questions: !!questions?.data ? questions?.data : [], userId: userId, isError: error, isLoading: !questions && !error, mutateQuestions: mutateQuestions }
}
