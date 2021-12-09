
export default function searchHandle(word=''){
  let res = ''
  let m = word.match(/(\w+)([\:\/])(.+)/)
  if(m && m.length > 3){
    if(m[1] == 'npm'){
      res = 'https://www.npmjs.com/package/'+m[3]
    }
    if(m[1] == 'g'){
      res = 'https://www.google.com/search?q='+m[3]
    }
    if(m[1] == 'fy'){
      res = `https://fanyi.sogou.com/text?keyword=${m[3]}&transfrom=auto&transto=zh-CHS&model=general`
    }
  }
  return res
}