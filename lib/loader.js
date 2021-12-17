
const mdx = require('./vendor/mdx.js')
const  matter = require("gray-matter")

module.exports =  function (input, map, meta) {
  console.log("MDx loading: ",{map,meta})
  let {data,content} = matter(input)
  let out = 
    'export const data = '+JSON.stringify(data)+
  mdx.compileSync(content)
  return out // always return undefined when calling callback()
};
