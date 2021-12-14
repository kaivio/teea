import Layout from "../../comp/layout"
const PostsPage = (props) => (
  <Layout>
    Todo
  </Layout>
)

export async function getStaticProps({ params }) {
  return {
    props: {

    },
  }
}

export async function getStaticPaths() {
  return {
    paths: [1].map((v, i) => {
      return {
        params: { page: (i + 1).toString() },
      }
    }),
    fallback: false,
  }
}

export default PostsPage
