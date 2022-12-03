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
  }> = [
    {
      _id: '2eaa2b6e24ef3498120b728476cfcf69',
      name: 'Andipa Batara Putra',
      imageLink:
        'https://drive.google.com/uc?id=1n0IVV6xjOHFLmmt3TbZF-h8S-TmUIKER',
      shareLink:
        'https://drive.google.com/file/d/1n0IVV6xjOHFLmmt3TbZF-h8S-TmUIKER/view?usp=share_link',
    },
  ];

  const certificate = certificates.find(
    (certificate) => certificate._id === _id
  );

  if (certificate) {
    res.status(200).json(certificate);
  } else {
    res.status(404).json({ message: 'Certificate not found' });
  }
};
