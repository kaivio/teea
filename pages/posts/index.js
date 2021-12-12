import Layout from "../../comp/layout"
import Posts from "../../comp/posts"
import find from "../../lib/find"

const PostsPage = ({ posts, prevPosts, nextPosts }) => (
  <Layout>
    <Posts posts={posts} prevPosts={prevPosts} nextPosts={nextPosts} />
  </Layout>
)

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
