import fsp from 'fs/promises'
import fs from "fs"
import { join } from "path"
import matter from "gray-matter"

/** 是否为开发环境 */
export const isDev = process.env.NODE_ENV === "development"

/** 是否为相对 URL */
export function isRelUrl(url) {
  let _ = new URL(url, "none://none/")
  return _.hostname == "none"
}

/** 合并路径 */
export function p(...ath) {
  return join(process.cwd(), ...ath)
}

/** 读取文件 */
export  function cat(...path) {
  return fs.readFileSync(p(...path), 'utf-8')
}

export function firstUpper(str="", eachWord=false){
  if(eachWord){
    return str.split(' ')
      .map(v=>firstUpper(v))
      .join(' ')
  }
  return str.charAt(0).toUpperCase() + str.substr(1)
}

export async function getAllNotes() {
  let res = []
  let index = {}
  let files = await fsp.readdir(p('content/note'))
  for (let f of files) {
    let { data } = matter(await cat('/content/note/' + f))
    data.sourceFile = f
    //TODO:  data.slug == undefined  
    res.push(data)
    index[data.slug] = data
  }
  res = res.sort((post1, post2) => (post1.date > post2.date ? "-1" : "1"))

  await fsp.writeFile(p('/tmp/index-note.json'), JSON.stringify(index))
  return res
}

export async function getNote(slug) {
  let index = JSON.parse(await cat('/tmp/index-note.json'))
  let { data, content } = matter(await cat('/content/note/' + index[slug].sourceFile))
  return { data, content }
}
