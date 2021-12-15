# Tool

站点的管理脚本

为什么会单独建一个文件夹呢？

因为要使用es6的`import`语句使用第三方包，

然而收到 `Cannot use import statement outside a module`。

行那我声明 `"type":"module"`

- next.js 运行出错 ......

好。 那我改成 `.mjs`

- vim(YCM+tsserver) 给我的报错说 fs 不是一个模块，但实际运行没问题。

本应该很简单的东西，为什么硬要搞得这么复杂ヘ(_ _ヘ)


