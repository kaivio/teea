import { Box, Button, Flex, Input } from "@theme-ui/components";
import { useState } from "react";

export default function Search({action=()=>{},...props}) {
  let [w, setW] = useState('')
  return (<>
    <Flex as="form" {...props} onSubmit={(e) => {
      e.preventDefault();
      action(w)
      setW('')
    }
      }>
      <Input sx={{
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
          transform: 'translateX(-100%)',
        }}>Go</Button>
    </Flex>
  </>)
}
