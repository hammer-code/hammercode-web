import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { _id },
  } = req;

  const certificates: Array<{
    _id: string;
    name: string;
    imageLink: string;
    shareLink: string;
  }> = [];

  const certificate = certificates.find(
    (certificate) => certificate._id === _id
  );

  if (certificate) {
    res.status(200).json(certificate);
  } else {
    res.status(404).json({ message: 'Certificate not found' });
  }
};
