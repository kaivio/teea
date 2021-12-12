import { Box, Heading } from "@theme-ui/components"
import Layout from "../../comp/layout"
import Posts from "../../comp/posts"
import find from "../../lib/find"
import {A} from '../../comp/base'
import NextLink from 'next/link'

const PostsPage = ({ posts, prevPosts, nextPosts }) => (
  <Layout title='Posts'>
    {/* <Posts posts={posts} prevPosts={prevPosts} nextPosts={nextPosts} /> */}
    {posts.map((v,i)=>(
      <Item {...v} key={i} />
    ))}
  </Layout>
)

function Item({title,slug,date, ...props}){
  return (<>
    <Box my={3}>
      <Heading as='h2'>
        <NextLink href={slug}><a>{title}</a></NextLink>
      </Heading>
      
      <Box>{props.summary || props.excerpt}</Box>

    </Box>
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
