import { Box, Button, Flex, Input } from "@theme-ui/components";
import { useState } from "react";
import Feather from "../comp/feather"


export default function Search({sx,action=()=>{},...props}) {
  let [w, setW] = useState('')
  return (<>
    <Box as="form" 
    sx={{
      position: 'relative',
      ...sx
    }}
    onSubmit={(e) => {
      e.preventDefault();
      action(w)
      setW('')
    }
      }>
      <Input  {...props}  sx={{
        color: 'text',
        borderColor: 'muted',
        pr: '3em',
      }}
        value={w}
        onChange={(e) => { setW(e.target.value) }}
      />
      <Button variant="link"
        type="submit"
        color={w ? 'primary' : 'muted'} sx={{
          position: 'absolute',
          right: 0,top: 0,
        }}>
          <Feather i="arrow-right"  />
        </Button>
    </Box>
  </>)
}
