import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "../../../lib/withHandler";
import { withApiSession } from "../../../lib/withSession";

interface ResponseType {
  ok: boolean;
  [key: string]: any;
}
async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    body: { title, content },
    session: { user },
  } = req;

  const tweet = await db?.post.create({
    data: {
      title,
      content,
      author: {
        connect: {
          id: user?.id,
        },
      },
    },
  });

  res.json({
    ok: true,
    tweet,
  });
}

export default withApiSession(
  withHandler({ methods: ["POST"], handler, isPrivate: true })
);
