import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: "Eder" },
    { id: 2, name: "Daniel" },
    { id: 3, name: "Domingues" },
  ];
  return response.json(users);
};
