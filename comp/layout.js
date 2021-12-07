/** 布局组建库，用于包装内容页面 */
import { Box, Button, Container, Flex, Text } from "@theme-ui/components"
import { ThemeProvider, merge } from 'theme-ui'
import themePresetGeist from 'theme-ui-preset-geist'
import themediy from './theme'
const theme = merge(themePresetGeist, themediy)
import NextLink from "next/link"
import Head from 'next/head'

/**
 * 默认布局
 * @param {*} props 
 */
export default function Layout({ children, ...prop }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="theme-color" content={theme.colors.background} />
      </Head>
      <Flex py={2} px={3} className='topbar'>
        <Box>
          <NextLink href='/'>
            <a>TEEA</a>
          </NextLink>
        </Box>
        <Box sx={{ flex: 1 }}></Box>
        <Box>TOP</Box>
      </Flex>

      <Container sx={{ flex: '1 1 auto' }}>
        {children}
      </Container>

      <Container>
        <Box p={3} sx={{textAlign: 'center',fontSize:'small'}}>
        Copyright 2021 teeami
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