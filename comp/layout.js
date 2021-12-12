/** 布局组建库，用于包装内容页面 */
import { Box, Button, Container, Flex, Text } from "@theme-ui/components"
import { ThemeProvider, merge } from 'theme-ui'
import themePresetGeist from 'theme-ui-preset-geist'
import themediy from './theme'
const theme = merge(themePresetGeist, themediy)
import NextLink from "next/link"
import Head from 'next/head'

import Search from './search'
import searchHandle from "../lib/search-handle"

/**
 * 默认布局
 * @param {*} props 
 */
export default function Layout({title, children, ...prop }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>{title}</title>
        <meta name="theme-color" content={theme.colors.background} />
      </Head>
      <Flex color="primary" py={2} px={3} sx={{
        '& > div':{
          mr: 4
        }
      }} className='topbar'>
        <Box>
          <NextLink href='/'>
            <a>TEEA</a>
          </NextLink>
        </Box>
        <Box sx={{ flex: 1 }}></Box>
        <Search action={(word)=>{
          let res = searchHandle(word)
          console.log(res);
          if(res){
            window.location = res
            //window.open(res[0])
          }
        }} />
        <Box>TOP</Box>
      </Flex>

      <Container sx={{ flex: '1 1 auto' }}>
        {children}
      </Container>

      <Container>
        <Box p={3} sx={{textAlign: 'center',fontSize:'small'}}>
        © 2021 teeami
        </Box>
      </Container>
    </ThemeProvider>
  )
}

/**
 * 空布局
 * @param {*} props 
 */
export function Empty({sx,children,...props}){
  return (<Box sx={{ flex: 1, ...sx}} {...props}>
    {children}
  </Box>)
}
