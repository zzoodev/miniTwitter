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

  console.log("username", username);

  const user = await db?.user.findUnique({
    where: {
      username,
    },
  });

  if (!user) {
    return res.json({ ok: false, message: "not found" });
  }

  req.session.user = {
    id: user.id,
  };
  await req.session.save();
  return res.json({
    ok: true,
    user,
  });
}

export default withApiSession(
  withHandler({ methods: ["POST"], handler, isPrivate: false })
);
