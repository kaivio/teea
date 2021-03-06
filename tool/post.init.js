// pages/post/$slug.js
import Post,{data} from './$slug.md'
import Layout from "/comp/layout"
import {A} from '/comp/base'
import * as lib from '/lib'
import { Box } from "@theme-ui/components"
import { components } from "/comp/markdown";

export default function $comp(props){
  return (<Layout title={data.title}>
    <h1>{data.title}</h1>
    <Box  color="gray"
      sx={{fontSize: 0}}
    ><i>{data.date.substr(0,10)}</i></Box>
    <Box py={4}>
    <Post components={{ 
      ...components,
      Demo,
    }} />
    </Box>
  </Layout>)
}

export async function getStaticProps(){
  let props = { }

  return { props }
}

function Demo(props) {
  let hue = lib.jitter(-90,70)
  return (<>
    <Box sx={{
      lineHeight:'5em',
      textAlign: 'center',
      borderRadius: '5px',
      background: `linear-gradient(135deg, hsl(${hue},100%,90%), hsl(${hue-30},100%,75%))`,
      color: `hsl(${hue},80%,40%)`,
    }}>
      {props.children||'Hello, world!'}
    </Box>
  </>)
}
