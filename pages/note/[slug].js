import Layout from "../../comp/layout"
import { getNote, getAllNotes } from "../../lib"
import MD from '../../comp/markdown'
import { Heading } from "@theme-ui/components"

export default function NoteIndex({data, content,...props }) {
  return (<Layout>
    <Heading as='h1'>{data.title}</Heading>
    <MD>{content}</MD>
  </Layout>)
}

export async function getStaticProps({ params }) {
  const props = await getNote(params.slug)
  return {
    props
  }
}

export async function getStaticPaths() {
  let notes = await getAllNotes()
  return {
    paths: notes.map((note) => {
      return {
        params: { slug: note.slug }
      }
    }),
    fallback: false,
  }
}