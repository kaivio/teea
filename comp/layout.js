/** 布局组建库，用于包装内容页面 */
import { Grid, Box, Button, Container, Flex, Text } from "@theme-ui/components"
import { ThemeProvider, merge } from 'theme-ui'
import { Global } from '@emotion/react'


// import themePresetGeist from 'theme-ui-preset-geist'
// import themediy from './theme'
// const theme = merge(themePresetGeist, themediy)
import theme from './theme/index'

import NextLink from "next/link"
import Head from 'next/head'

import Search from './search'
import searchHandle from "../lib/search-handle"
import { firstUpper, isRelUrl } from "../lib"
import { useRouter } from "next/dist/client/router"

/**
 * 默认布局
 * @param {*} props 
 */
export default function Layout({ title, children, ...prop }) {
  const router = useRouter()
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>{title}</title>
        <meta name="theme-color" content={theme.colors.background} />
      </Head>
      <Grid  p={2} color='primary' 
        gap={2} columns='repeat(6,1fr)'
        sx={{
          alignItems: 'center',
          //'& > * ':{bg:'pink'}
        }}
      >
        <Box sx={{
          textAlign: 'center',
          gridColumn:['1/3','1/2'],
        }}>
        <NextLink href='/'>
          <a>TEEA</a>
        </NextLink>
        </Box>
        <Box sx={{
          color:'secondary',
          gridColumn: ['1/7', '2 / 5'],
          gridRow: ['2/3','1/2'],
          //border: ['1px smoke solid'],
          '& > a':{
            padding:'8px 15px'
          }
        }}>
          {['posts', 'note', 'test'].map((v, i) => (
            <NextLink key={i} href={'/' + v} >
              <a>{firstUpper(v)}</a>
            </NextLink>
          ))}
        </Box>
        <Search  placeholder="npm:<package>"
        sx={{
          gridColumn:['3/7','5/7']
        }}
        action={(word) => {
          let res = searchHandle(word)
          console.log(res);
          if (res) {
            if(isRelUrl(res)){
              router.push(res)
              //window.location = res
            }else{
              window.open(res)
            }
          }
        }} />
      </Grid>

      <Container sx={{ flex: '1 1 auto' }}>
        {children}
      </Container>

      <Container>
        <Box p={3} sx={{ textAlign: 'center', fontSize: 'small' }}>
          © 2021 teeaz
        </Box>
      </Container>
    </ThemeProvider>
  )
}

/**
 * 空布局
 * @param {*} props 
 */
export function Empty({ sx, children, ...props }) {
  return (<Box sx={{ flex: 1, ...sx }} {...props}>
    {children}
  </Box>)
}
