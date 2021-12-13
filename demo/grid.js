import { Box } from "@theme-ui/components";

function Grid1(props) {
  return (<>
    <Box bg='#e2eddc' sx={{
      display: 'grid',
      gridTemplateColumns: '3em 3em 3em 3em 3em 3em',
      gridGap: '5px',
    }}>
      {range(1,10).map((v, i) => (
        <Box key={i} bg="pink" sx={{
          lineHeight: '3em',
          textAlign: 'center',
        }}>{v}</Box>
      ))}
    </Box>
  </>)
}

function Grid2(props){
  return (<>
    <Box bg='#e2eddc' sx={{
      display: 'grid',
      gridTemplateColumns: '3em 3em 3em 3em 3em 3em',
      gridGap: '5px',
    }}>
      {range(1,10).map((v, i) => {
        let sx = v == 4 ? {
          gridColumnStart: 6,
          // gridColumnEnd: 7,
          gridRowStart: 2,
          // gridRowEnd: 3,
          bg:'red'
        }:{}

        return (<Box key={i} bg="pink" sx={{
          lineHeight: '3em',
          textAlign: 'center',
          ...sx
        }}>{v}</Box>)
      })}
    </Box>
  </>)
}

function Grid3(props){
  return (<>
    <Box bg='#e2eddc' sx={{
      display: 'grid',
      gridTemplateColumns: '3em 3em 3em 3em 3em 3em',
      gridGap: '5px',
    }}>
      {range(1,10).map((v, i) => {
        let sx = v == 4 ? {
          gridColumnStart: 6,
          gridRowStart: 2,
          bg:'red'
        }:v == 9 ? {
          gridColumnStart: 3,
          gridColumnEnd: 5,
          bg:'red'
        }:v == 8 ? {
          gridRowStart: 1,
          gridRowEnd: 3,
          bg:'red'
        }:{}
        return (<Box key={i} bg="pink" sx={{
          lineHeight: '3em',
          textAlign: 'center',
          ...sx
        }}>{v}</Box>)
      })}
    </Box>
  </>)
}


export default function Grid(i) {
  return [<>No demo</>, Grid1,Grid2, Grid3][i]
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
