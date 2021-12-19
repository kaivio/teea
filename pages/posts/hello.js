import * as Post from "./hello.md"
import Layout from "/comp/layout"
import { A, MDX } from '/comp/base'
import * as lib from '/lib'
import { Box } from "@theme-ui/components"

function Demo(props) {
  return (<>
    <Box bg='#e2eddc' sx={{
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      gridGap: '5px',
    }}>
      {range(1, 15).map((v, i) => {
        return (<Box key={i} bg="pink" sx={{
          lineHeight: '3em',
          textAlign: 'center',
        }}>1fr</Box>)
      })}
    </Box>
  </>)
}

export default function Hello(rops) {
  console.log(Post)
  return (<Layout>
    <Post.default components={{ Demo }} />
  </Layout>)
}

function range(l,r){
  if(!r){
    r = l
    l = 0
  }
  let a = []
  for(let i = l; i <= r; i++){
    a.push(i)
  }
  return a
}