import * as Post from "./hello.md"
import Layout from "/comp/layout"
import {A,MDX} from '/comp/base'
import * as lib from '/lib'


export default function Hello(rops){
  console.log(Post)
  return (<Layout>
    <Post.default />
  </Layout>)
}

