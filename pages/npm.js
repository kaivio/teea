
import Layout from "../comp/layout"
import {A,MDX} from '../comp/base'
import * as lib from '../lib'
import { useEffect, useState } from "react"
import FileViewer from "../comp/file-viewer"
import { useRouter } from "next/dist/client/router"


export default function Npm(pageProps){
  let router = useRouter() 
  let [name,setName] = useState('')
  useEffect(()=>{
    let n = document.location.hash.substr(1)
    setName(n),
    router.events.on('hashChangeComplete',(url)=>{
      console.log('hashChangeComplete: '+url);
      let n = document.location.hash.substr(1)
      setName(n)
      console.log(name,n);
    })
  },[])
  return (<Layout>
    {name?
    <FileViewer url={`https://cdn.jsdelivr.net/npm/${name}/README.md`} type='markdown' />:<>loading</>}
    
  </Layout>)
}
//https://www.npmjs.com/package/
