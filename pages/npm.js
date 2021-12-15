
import Layout from "../comp/layout"
import {A,MDX} from '../comp/base'
import * as lib from '../lib'
import { useEffect, useState } from "react"
import FileViewer from "../comp/file-viewer"
import { useRouter } from "next/dist/client/router"
import axios from "axios"
import { Box } from "@theme-ui/components"


export default function Npm(pageProps){
  let router = useRouter() 
  let [name,setName] = useState('')
  let [sourceCode,setSourceCode] = useState('')
  useEffect(()=>{
    load()
  },[name])

  useEffect(()=>{
    let n = document.location.hash.substr(1)
    setName(n),
    router.events.on('hashChangeComplete',(url)=>{
      console.log('hashChangeComplete: '+url);
      let n = document.location.hash.substr(1)
      setName(n)
    })
  },[])

  function load(){
    let u = axios.get(`https://cdn.jsdelivr.net/npm/${name}/README.md`)
    let l = axios.get(`https://cdn.jsdelivr.net/npm/${name}/readme.md`)
    u.then((res)=>setSourceCode(res.data))
      .catch(console.log)
    l.then((res)=>setSourceCode(res.data))
      .catch(console.log)
    
  }
  return (<Layout>
    <Box lang='en'>
    {(name && sourceCode)?<MDX>{sourceCode.replace(/<(br|img)(.*?)>/ig,'<$1$2/>').replace(/\/\/>/g,'/>')}</MDX>:<>loading</>}
    </Box>
  </Layout>)
}
//https://www.npmjs.com/package/
