import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "../../../../lib/withHandler";
import { withApiSession } from "../../../../lib/withSession";

interface ResponseType {
  ok: boolean;
  [key: string]: any;
}
async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    query,
    session: { user },
  } = req;

  console.log(query);

  const alreadyLike = await db?.like.findFirst({
    where: {
      userId: user?.id,
      postId: +query.id,
    },
  });
  if (alreadyLike) {
    await db?.like.delete({
      where: {
        id: alreadyLike.id,
      },
    });
  }
  if (!alreadyLike) {
    await db?.like.create({
      data: {
        user: {
          connect: {
            id: user?.id,
          },
        },
        post: {
          connect: {
            id: +query.id,
          },
        },
      },
    });
  }

  res.json({
    ok: true,
  });
}

export default withApiSession(
  withHandler({ methods: ["POST"], handler, isPrivate: true })
);
