# @zhousibao/localstorage

> Practical tool for localStorage
> 一个实用的 localStorage 工具

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save @zhousibao/localstorage
```

## Basic Usage

```js
import CreateStorage from "@zhousibao/localstorage";

const prefix = "prefix";
const LS = CreateStorage(prefix); // prefix 默认为空

LS.setItem(key, value, expire); // expire => second秒数

LS.getItem(key);

LS.removeItem(key);

LS.clear();
```

## Github

- [@zhousibao/localstorage](https://github.com/zhousibao/localstorage)

## Authors

- [zhousibao](https://github.com/zhousibao)
