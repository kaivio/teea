import fsp from 'fs/promises'
import fs from "fs"
import { join } from "path"
import matter from "gray-matter"

function p(...ath) {
  return join(process.cwd(), ...ath)
}

const postsDirectory = join(process.cwd(), "content/post")

export const isDev = process.env.NODE_ENV === "development"

export async function cat(file) {
  return await fsp.readFile(process.cwd() + file, 'utf-8')
}

export function isRelUrl(url) {
  let _ = new URL(url, "none://none/")
  return _.hostname == "none"
}

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.mdx$/, "")
  const fullPath = join(postsDirectory, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug
    }
    if (field === "content") {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? "-1" : "1"))
  return posts
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
