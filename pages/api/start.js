import { data } from './prices';

export default async function handler(req, res) {
    try {
        const result = await data.start();
        res.status(200).json({"success": true, "data": result});
    } catch (error) {
        console.error('Error in start API:', error);
        res.status(500).json({ error: 'Internal server error', details: error.message });
    }
}