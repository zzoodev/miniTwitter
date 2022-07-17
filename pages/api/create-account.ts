import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "../../lib/withHandler";
import { withApiSession } from "../../lib/withSession";
import db from "../../lib/db";

interface ResponseType {
  ok: boolean;
  [key: string]: any;
}
async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    body: { username },
  } = req;

  const alreadyExist = await db?.user.findUnique({
    where: {
      username,
    },
  });
  if (alreadyExist) {
    return res.json({
      ok: false,
      message: "Already used username",
    });
  }
  const user = await db?.user.create({
    data: {
      username,
    },
  });

  res.json({
    ok: true,
    user,
  });
}

export default withApiSession(
  withHandler({ methods: ["POST"], handler, isPrivate: false })
);
