import {fetcher} from '../../utils/fetchJson';

export default class UsersApi {
    async getUser ({ email}) {
        const res = await fetcher(`/users/${email}`);
        return res;
    }
}
