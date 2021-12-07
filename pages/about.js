import Layout from "../comp/layout"
import {A,MDX} from '../comp/base'
import * as lib from '../lib'

export async function getStaticProps(){
  return {
    props:{
      mdx:await lib.cat('/content/about.mdx')
    }
  }
}

export default function Home(pageProps){
  return (<Layout>
    <MDX>{pageProps.mdx}</MDX>
  </Layout>)
}

