// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method not allowed" });
  }

  res.status(200).json({
    timeLimit: 900,
    questions: [
      {
        question:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        choices: [
          "Sed ut perspiciatis unde omnis iste",
          "aspernatur aut odit",
          "perspiciatis unde omnis iste",
          "unde omnis iste",
        ],
      },
      {
        question:
          "dolores eos qui ratione voluptatem sequi nesciunt. Neque porro",
        choices: [
          "perspiciatis unde omnis",
          "modi tempora incidunt ut ",
          "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse",
          "voluptatem quia voluptas",
        ],
      },
      {
        question:
          "qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et",
        choices: [
          "dolores eos qui ",
          "aut odit",
          "consectetur, adipisci velit",
          "tempora incidunt",
        ],
      },
    ],
  });
}
