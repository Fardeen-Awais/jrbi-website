import { createClient } from "@sanity/client";

const config = {
  dataset: "production",
  projectId: "54m8bn61",
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN,
}
const client = createClient(config);

export default async function createComment(req, res) {
  try {
    const { _id, name, email, comment } = JSON.parse(req.body)
    await client.create({
      _type: 'comment',
      blog: {
        _type: 'reference',
        _ref: _id,
      },
      name,
      email,
      comment,
    })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ message: `Couldn't submit comment`, err })
  }
  console.log("Comment Submitted")
  return res.status(200).json({ message: 'Comment submitted' })
}