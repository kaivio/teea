import Layout from "../../comp/layout"
import { getAllNotes } from "../../lib"
import {A} from '../../comp/base'


export default function NoteIndex({ notes }) {
  return (<Layout>
    <ul>
      {notes.map((note, i) => (
        <li key={i}>
          <A href={'/note/'+note.slug}>{note.title}</A>
        </li>
      ))}
    </ul>
  </Layout>)
}

export async function getStaticProps() {
  let notes = await getAllNotes()
  return {
    props: {
      notes
    }
  }
}