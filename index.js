import fs from "fs/promises"
import {program} from "commander"


async function main(){
  program.command("new")
    .description("New post")
    .argument("[title...]")
    .action(newContent)

  program.parse()
}

function newContent(title,){
  title = title.join(" ")
  let slug = title.replace(/\s+/g,"-")
  console.log(title,slug)
  let date = new Date().toISOString()
  let initContent = `---
title: ${title}
slug:  ${slug}
tags: []
desc:  
pic: 
date:  ${date}
---

`
  let file = `content/post/_${date}_${slug}.mdx`
  fs.writeFile(file,initContent)
  console.log(`create ${file}`)

}

main()
