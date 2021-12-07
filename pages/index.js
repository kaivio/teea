import Layout from "../comp/layout"
import {A,MDX} from '../comp/base'
import * as lib from '../lib'

export async function getStaticProps(){
  return {
    props:{
      index_mdx:await lib.cat('/content/_index.mdx')
    }
  }
}

export default function Home(pageProps){
  return (<Layout>
    <MDX>{pageProps.index_mdx}</MDX>
  </Layout>)
}

