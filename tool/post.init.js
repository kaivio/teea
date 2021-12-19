// pages/post/$path
import Layout from "../comp/layout"
import {A} from '../comp/base'
import * as lib from '../lib'


export default function $comp(props){
  return (<Layout title="$title">
    
  </Layout>)
}

export async function getStaticProps(){
  let props = { }

  return { props }
}
