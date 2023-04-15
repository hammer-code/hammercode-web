import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { _id },
  } = req;

  const response = await fetch(
    `http://127.0.0.1:8000/v1/certificates/${_id}`,{
      method: 'GET'
    });
  const data = await response.json();

  res.status(200).json(data);
};
