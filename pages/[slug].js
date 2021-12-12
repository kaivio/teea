import Layout from "../comp/layout"
import { findOne, find } from "../lib/find"
import MarkdownView from "../comp/markdown"
import { Heading } from "@theme-ui/components"

const PostPage = ({ data, content }) => (
  <Layout title={data.title}>
    <Heading as="h1">{data.title}</Heading>
    <MarkdownView>{content}</MarkdownView>
  </Layout>
)

export async function getStaticProps({ params }) {
  const props = await findOne('post', params.slug)

  return { props }
}

export async function getStaticPaths() {
  const posts = await find('post')

  return {
    paths: posts.map((post) => {
      return {
        params: { ...post },
      }
    }),
    fallback: false,
  }
}

export default PostPage
