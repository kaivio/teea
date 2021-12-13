import fs from "fs/promises"
import { program } from "commander"


async function main() {
  program
    .option('-n,--note', '操作 /note')

  program.command("new")
    .description("新建内容")
    .argument("[title...]")
    .action(newContent)

  program.parse()
}

function newContent(title) {
  title = title.join(" ")
  let slug = title.replace(/\s+/g, "-")
  console.log(title, slug)
  let date = new Date().toISOString()
  let templates = {
    post: {
      file:`content/post/_${date.substr(0, 10)}_${slug}.mdx`,
      content: `---
title: ${title}
slug:  ${slug}
tags: []
keyword: []
summary: 
pic: 
date: '${date}'
---

记得好好写完哦～
`
    },
    note:{
      file:`content/note/${ask(slug)}.mdx`,
      content: `---
title: ${title}
slug:  ${slug}
tags: []
keyword: []
date: '${date}'
---

那就开始吧～
`
    },
  }

  const opts = this.parent.opts()
  let type = 'post'
  if(opts.note) type = 'note'
  fs.writeFile(templates[type].file, templates[type].content)
  console.log(`create ${templates[type].file}`)

}


function ask(value){
  if(value) return value
  console.log('param error');
  process.exit(1)
}

main()
