import {fetcher} from "../../src/utils/fetchJson";

export default async (req, res) => {
    const { email, password } = await req.body

    try {
        const {data, cookies} = await fetcher('/auth/login', {
            method: 'POST',
            data: {email, password},
        });
        res.setHeader('Set-Cookie', cookies)
        res.json(data);
        return data;
    } catch (error) {
        const { response: fetchResponse } = error
        res.status(fetchResponse?.status || 500).json(req.body)
    }
}
