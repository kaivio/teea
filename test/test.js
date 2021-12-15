
const Vibrant = require('node-vibrant')


f = 'https://pb.nichi.co/fresh-casino-stomach' 
async function main(){
  let y = await Vibrant.from(f).getPalette()
  for(let k in y){
    let c = y[k].getHex()
    let p = y[k].getPopulation()

    console.log(k,c,p)

  }
}

main()
