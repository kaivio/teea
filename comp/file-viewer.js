import { MDX } from "./base"
import { useEffect, useState } from "react"

export default function FileViewer({url,type}){
  switch(type){
    case 'markdown': return <MD url={url} />
    
  }
  return (<>
    ? 未知类型 ？
  </>)
}

function MD({url}){
  let [sourceCode,setSourceCode] = useState('loading')
  useEffect(()=>{
    fetch(url)
    .then(res=>res.text())
    .then(data=>setSourceCode(data))
  },[url])
  return (<>
    <MDX>{sourceCode}</MDX>
  </>)
}

