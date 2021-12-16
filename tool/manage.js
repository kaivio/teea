import fs from "fs/promises"
import path from "path"
import util from "util"
import { program } from "commander"
import chalk from "chalk"
import Vibrant from 'node-vibrant'
import yaml from "js-yaml"
import mime from "mime"
import axios from "axios"


const style = {
  'info': chalk.blue,
  'read': chalk.blue,
  'fetch': chalk.blue,
  'post': chalk.blue,
  'save': chalk.magenta,
  'create': chalk.blue,
  'write': chalk.blue,
  'error': chalk.red,
}


import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { homedir } from "os"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
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
    .argument("[name]","素材库中记录的名字")
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
async function asset(name){
  let opts = this.opts()
  if(opts.import){ // 导入
    let buff = await read(opts.import)
    let palette = await imagePalette(buff)
    name = name || opts.import 
    let size = buff.length
    let url = 'public/assets/'+name
    let mimeType = mime.getType(opts.import)
    await put(p(url),buff,'wx')
    await assetAdd({name,url,mimeType,size,palette})
    
    say("done",'import '+name,{url,size:hbytes(size)})
  }
  if(opts.upload){ // 上传
    say('upload',opts.upload)
    let buff = await read(opts.upload)
    let palette = await imagePalette(buff)
    name = name || opts.upload
    let size = buff.length
    let mimeType = mime.getType(opts.upload)
    let url = await upload_to_nichi(buff)
    await assetAdd({name,url,mimeType,size,palette})
    
    say("done",'upload '+name,{url,size:hbytes(size)})
  }
  if(opts.link){ 
    say('ping',link)
  }
}

async function upload_to_nichi(buff){
  let api = "https://pb.nichi.co"
  say("post", api)
  try{
    var res = await axios.post(api,buff)
  }catch(e){
    say("error",e)
    process.exit(1)
  }
  return res.data.replace(/\n*$/,'')
}

async function assetAdd({
  name,
  url,
  size,
  mimeType,
  ...params // width,height ...
}){
  const dictFile = p("data/assets.yml")
  let data = `---
name: ${name}
url: ${url}
size: ${size}
mimeType: ${mimeType}
${yaml.dump(params)}
`
  
  put(dictFile,data,'a')
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
    // let ext = y[k].getBodyTextColor()
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

/** 写入文件 */
async function put(file,data,flag="w"){
  say("write" ,shortPath(file))
  try{
    await fs.writeFile(file,data,{flag})
  }catch(e){
    say("error",e)
    process.exit(1)
  }
}

/** 相对于项目的文件路径  */
function p(...ath){
  return path.join(__dirname,"../",...ath)
}

/** 修剪路径的 $HOME 部分 */
function shortPath(p){
  p = p.toString()
  let home = process.env.HOME
  let len = home.length
  let sp = p
  if(p.substr(0,len) == home){
    sp = '~'+ p.substr(len)
  }
  return sp
}

/**** 临时测试 */
function test(){
  say("read", "/proc/cpuinfo")
  say("create", "/home/content.txt")
  say()
  say("fetch","https://github.com")
  say("error","Connection refused")
  say("c5184961c40cb71fc3ea757f4bba469f342c55b8")
  say({x:1,y:2})
  say(chalk.hex("#FFFFFF").bgHex("#66CCFF")("see my blue"))
  say(1,1,[
    hbytes(123),
    hbytes(1234),
    hbytes(12345),
    hbytes(123456),
    hbytes(12345678),
  ]) 
}

/** 人类可读的字节大小 */
function hbytes(num){
  if(num < 1024) return num
  if((num /= 1024) < 1024) 
    return num.toPrecision(3)+'K'
  if((num /= 1024) < 1024) 
    return num.toPrecision(3)+'M'
  return num.toPrecision(3)+'G'
}

/** 打印消息 */
function say(operate,message,data){
  let o = message ? operate : null
  let m = message || operate
   
  if(!o) return m ? 
    console.log (m) :
    console.log ("   --------------------")
  
  function s(_){
    return typeof style[_] == 'function' ? style[_](_) : chalk.gray(_)
  }
  console.log(` ${s(o)}\t${m}`)
  data && console.log(data)
}


/** 参数为空时退出程序 */
function ask(value){
  if(value) return value
  console.log('param error');
  process.exit(1)
}

main()
