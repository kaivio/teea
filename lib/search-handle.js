import linkmap from "./linkmap.yml"

export default function searchHandle(word=''){
  let destination = linkmap[word]
  if(destination) return destination
  
  let m = word.match(/(\w+)([\:\/])(.+)/)
  if(!m || m.length < 4){
    return '' // TODO: default  
  }
  let [p,x,y,z] = m
  if(x == 'npm'){
    return y == ':' ?
      '/npm#'+z :
      'https://www.npmjs.com/search?q='+z
  }
  if(x == "gh" || x == "github"){
    return y == ':' ? 
      "https://github.com/"+z:
      "https://github.com/search?q="+z
  }
  if(x == 'g'){
    return 'https://www.google.com/search?q='+z
  }
  if(x == 'fy'){
    return `https://fanyi.sogou.com/text?keyword=${z}&transfrom=auto&transto=zh-CHS&model=general`
  }
  if(x == "mdn"){
    return "https://developer.mozilla.org/search?q="+z
  }
  if(x == "node"){
    return "http://nodejs.cn/api/"+z+".html"
  }
  if(x == "next"){
    return "https://nextjs.org/docs/api-reference/next/"+z
  }
}
