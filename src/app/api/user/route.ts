import { NextApiRequest, NextApiResponse } from 'next';

let users: { id: number, name: string, email: string }[] = [];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, email } = req.body;

        if (!name || !email) {
            return res.status(400).json({ message: 'Name and email are required.' });
        }

        const newUser = {
            id: users.length + 1,
            name,
            email
        };

        users.push(newUser);

        return res.status(201).json(newUser);
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
