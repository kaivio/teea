import Layout from "../comp/layout"
import {A,MDX} from '../comp/base'
import * as lib from '../lib'
import { Box, Flex } from "@theme-ui/components"


export default function OddsAndEnds(props){
  return (<Layout>

    <Flex sx={{justifyContent:'space-evenly'}}>
      {[25,50,75,150,200].map(n=>(
        <Boz key={n} sx={{filter: `saturate(${n}%)`}} />
      ))}
    </Flex>

    <Flex sx={{justifyContent:'space-evenly'}}>
      {[25,50,75,150,200].map(n=>(
        <Boz key={n} sx={{filter: `brightness(${n}%)`}} />
      ))}
    </Flex>

    <Flex sx={{justifyContent:'space-evenly'}}>
      {[25,50,75,150,200].map(n=>(
        <Boz key={n} sx={{filter: `grayscale(${n}%)`}} />
      ))}
    </Flex>

    <Flex sx={{justifyContent:'space-evenly'}}>
      {[25,50,75,150,200].map(n=>(
        <Boz key={n} sx={{filter: `contrast(${n}%)`}} />
      ))}
    </Flex>

  </Layout>)
}

function Boz(props){
  return (<Box {...props}>
      <img src="/tea.dev.jpg" style={{width:'50px',height:'50px'}} />
  </Box>)
}
