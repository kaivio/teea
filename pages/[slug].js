import Layout from "../comp/layout"
import { findOne, find } from "../lib/find"
import MarkdownView from "../comp/markdown"
import { Box, Heading } from "@theme-ui/components"

export default function Post({ data, content }) {
  return (<Layout title={data.title}>
    <h1>{data.title}</h1>
    <Box  color="gray"
      sx={{fontSize: 0}}
    ><i>{data.date.substr(0,10)}</i></Box>
    <MarkdownView>{content}</MarkdownView>
  </Layout>)
}

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


