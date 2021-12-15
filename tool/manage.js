import fs from "fs/promises"
import { program } from "commander"
import chalk from "chalk"
import Vibrant from 'node-vibrant'

const style = {
  'info': chalk.blue,
  'read': chalk.blue,
  'fetch': chalk.blue,
  'upload': chalk.blue,
  'save': chalk.green,
  'create': chalk.green,
  'error': chalk.red,
}


async function main() {
  program
    .option('-n,--note', '操作 /note')

  program.command("new")
    .description("新建内容")
    .argument("[title...]")
    .action(newContent)
  
  program.command("asset")
    .description("素材管理")
    .option("-i, --import <file|URL>","导入素材")
    .option("-l, --link <URL>", "链接素材")
    .option("-u, --upload <file>","上传素材")
    .action(asset)

  program.command("test")
    .description("临时测试")
    .action(test)
  program.parse()
}

/** new 命令 */
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

/** asset 命令 (素材管理) */
async function asset(){
  let opts = this.opts()
  if(opts.import){
    let buff = await read(opts.import)
    let palette = imagePalette(buff)
  }
  if(opts.link){
    say('ping',link)
  }
  if(opts.upload){
    say('upload',opts.upload)
  }
}

/** 解析图像色板 */
async function imagePalette(buff){
  say("parse","image palette")
  let y = await Vibrant.from(buff).getPalette()
  let o = {}
  for(let k in y){
    let color = y[k].getHex()
    let num = y[k].getPopulation()
    // let title = y[k].getTitleTextColor()
    // let text = y[k].getBodyTextColor()
    // undefined ?
    o[k] = {color, num}
    say(chalk.bgHex(color)('      ')+` ${color}  ${num}\t${k}`)
  }
  return o
}
/** 解析图像尺寸 */

/** 读取文件(二进制) */
async function read(file){
  say("read",file)
  return await fs.readFile(file)
}

/** 读取文件(文本) */
async function cat(file){
  say("read",file)
  return await fs.readFile(file,"utf-8")
}

function test(){
  say("read", "/proc/cpuinfo")
  say("create", "/home/content.txt")
  say()
  say("fetch","https://github.com")
  say("error","Connection refused")
  say("c5184961c40cb71fc3ea757f4bba469f342c55b8")
  say({x:1,y:2})
  say(chalk.hex("#FFFFFF").bgHex("#66CCFF")("see my blue"))
  
}

/** 打印消息 */
function say(operate,message,data){
  let o = message ? operate : null
  let m = message || operate
   
  if(!o) return m ? 
    console.log (m) :
    console.log ("   --------------------")
  
  function s(_){
    return typeof style[_] == 'function' ? style[_](_) : _
  }
  console.log(` ${s(o)}\t${m}`)
}


/** 参数为空时退出程序 */
function ask(value){
  if(value) return value
  console.log('param error');
  process.exit(1)
}

main()
