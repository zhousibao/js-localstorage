# @zhousibao/js-localstorage

> Practical tool for localStorage
> 一个实用的 localStorage 工具

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save @zhousibao/js-localstorage
```

## Basic Usage

```js
import LS from "@zhousibao/js-localstorage";

LS.setItem(key, value, expired); // expired => second秒数

LS.getItem(key);

LS.removeItem(key);

LS.clear();
```

**Examples:**

Create an permanent localstorage:

```js
LS.setItem("obj", { name: "localstorage" }); //  长久有效
```

Create an expiring localstorage, Set the validity period for one day:

```js
LS.setItem("obj", { name: "localstorage" }, 24 * 3600); //  有效期为1天
```

Remove an localstorage:

```js
LS.removeItem("obj");
```

Clear all localstorage:

```js
LS.clear();
```

## Github

- [@zhousibao/js-localstorage](https://github.com/zhousibao/js-localstorage)

## Authors

- [zhousibao](https://github.com/zhousibao)
