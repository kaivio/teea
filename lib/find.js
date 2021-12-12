import fs from  'fs-extra'
import { join } from "path"
import matter from "gray-matter"

function p(...ath) {
  return join(process.cwd(), ...ath)
}

async function cat(...path) {
  return await fs.readFile(p(...path), 'utf-8')
}

async function ensuer(_){
  _.slug = _.slug || _.sourceFile.replace(/\.[^\.]+$/, '')
  _.title = _.title || _.sourceFile
  _.date = _.date || 
    (await fs.stat(p(_.sourceDir,_.sourceFile)))
    .mtime.toISOString()
}

export  async function find(dir, opts) {
  let res = []
  let index = {}
  let files = await fs.readdir(p('content',dir))
  for (let f of files) {
    let { data } = matter(await cat('/content',dir,f))
    data.sourceFile = f
    data.sourceDir = dir
    await ensuer(data)

    res.push(data)
    index[data.slug] = data
  }
  res = res.sort((a, b) => (a.date > b.date ? "-1" : "1"))
  await fs.ensureDir(p('tmp'))
  await fs.writeFile(p(`/tmp/index-${dir}.json`), JSON.stringify(index))
  return res
}

export async function findOne(dir, slug, opts) {
  let index = JSON.parse(await cat(`/tmp/index-${dir}.json`))
  let { data, content } = matter(await cat('/content',dir, index[slug].sourceFile))
  return { data, content }
}

export default find