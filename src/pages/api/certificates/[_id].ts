import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { _id },
  } = req;

  const response = await fetch(
    `https://www.morizkay.com/api/palu-dev-day/certificates/${_id}`
  );
  const data = await response.json();

  res.status(200).json(data);
};
