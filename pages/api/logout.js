import {fetcher} from "../../src/utils/fetchJson";

export default async (req, res) => {
    const { email } = await req.body
    try {

        const {data} = await fetcher('/auth/disconnect', {
            method: 'POST',
            data: {email},
        });
        res.json(data)
    } catch (error) {
        const { response: fetchResponse } = error
        res.status(fetchResponse?.status || 500).json(req.body)
    }
}
