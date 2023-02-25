// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { ChatGPTAPI } from 'chatgpt';

type Data = any;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const api = new ChatGPTAPI({
    apiKey: process.env.OPENAI_API_KEY || '', // Your OpenAI API Key
  });

  const openAiRes = await api.sendMessage(req.body.message);
  res.status(200).json({
    version: 'v1',
    content: {
      messages: [
        {
          type: 'text',
          text: openAiRes.text,
        },
      ],
    },
  });
}
