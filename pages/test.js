import Layout from "../comp/layout"
import { A, MDX } from '../comp/base'
import * as lib from '../lib'
import theme from '../comp/theme/index'
import { Spinner,Textarea, Slider, Radio, Checkbox, Select, Input, Label, Box, Button, Flex, Card } from "@theme-ui/components"

export default function Home(pageProps) {
  return (<Layout >
    <Flex sx={{ flexWrap: 'wrap' }}>
      {Object.keys(theme.colors).map((k) => (
        typeof theme.colors[k] == 'string' &&
        <Box backgroundColor={theme.colors[k]} p={3} key={k}>{k}</Box>
      ))}
    </Flex>
    <Flex sx={{ flexWrap: 'wrap' }}>
      {Object.keys(theme.colors).map((k) => (
        typeof theme.colors[k] == 'string' &&
        <Box color={theme.colors[k]} p={3} key={k}>{k}</Box>
      ))}
    </Flex>

    <Flex sx={{ flexWrap: 'wrap' }}>
      <Button>primary</Button>
      <Button>secondary</Button>
      <Button variant="primary">primary</Button>
      <Button variant="secondary">secondary</Button>
      <Button disabled variant="disable">disabled</Button>
    </Flex>

    <Box as="form" onSubmit={(e) => e.preventDefault()}>
      <Label htmlFor="username">Username</Label>
      <Input name="username" id="username" mb={3} />
      <Label htmlFor="password">Password</Label>
      <Input type="password" name="password" id="password" mb={3} />
      <Box>
        <Label mb={3}>
          <Checkbox />
          Remember me
        </Label>
      </Box>
      <Label htmlFor="sound">Sound</Label>
      <Select name="sound" id="sound" mb={3}>
        <option>Beep</option>
        <option>Boop</option>
        <option>Blip</option>
      </Select>
      <Label htmlFor="comment">Comment</Label>
      <Textarea name="comment" id="comment" rows={6} mb={3} />
      <Flex mb={3}>
        <Label>
          <Radio name="letter" /> Alpha
        </Label>
        <Label>
          <Radio name="letter" /> Bravo
        </Label>
        <Label>
          <Radio name="letter" /> Charlie
        </Label>
      </Flex>
      <Label>Slider</Label>
      <Slider mb={3} />
      <Button>Submit</Button>
      <Spinner size='3em' />
    </Box>
    <Card>
    Card style variants can be defined in the theme.cards object. By default the Card component uses the theme.cards.primary variant.
    </Card>
  </Layout>)
}

