import {fetcher} from '../../utils/fetchJson';

export default class AuthApi {
    async loginService (data) {
        const res = await fetcher('/auth/login', {
            method: 'POST',
            data: data.json(),
        });

        return res;
    }
}
