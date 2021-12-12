import { Box, Card, Heading } from "@theme-ui/components"
import Layout from "../../comp/layout"
import Posts from "../../comp/posts"
import find from "../../lib/find"
import { A } from '../../comp/base'
import NextLink from 'next/link'

const PostsPage = ({ posts, prevPosts, nextPosts }) => (
  <Layout title='Posts'>
    {/* <Posts posts={posts} prevPosts={prevPosts} nextPosts={nextPosts} /> */}
    <h1>Posts</h1>
    {posts.map((v, i) => (
      <Item {...v} key={i} />
    ))}
  </Layout>
)

function Item({ title, slug, date, ...props }) {
  return (<>
    <NextLink href={slug}>
      <Card my={3} variant="interactive">
        <Box as='a'>
          <h2>
            {title}
          </h2>
          <Box  color="gray"
      sx={{fontSize: 0}}
    ><i>{date.substr(0,10)}</i></Box>
          <Box>{props.summary || props.excerpt}</Box>
        </Box>
      </Card>
    </NextLink>
  </>)
}

export async function getStaticProps() {
  let posts = await find('post')
  console.log(posts);

  const startIndex = 0
  const endIndex = 10
  const prevPosts = null
  const nextPosts = endIndex >= posts.length ? null : 2

  return {
    props: { posts: posts.slice(startIndex, endIndex), prevPosts, nextPosts },
  }
}

export default PostsPage
