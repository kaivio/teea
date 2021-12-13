import Grid from './grid'

export default function Dome({ grid ,...props}) {
  if(grid) {
    let Comp = Grid(grid)
    return <Comp {...props}/>
  }
  return (<>
    No demo
  </>)
}