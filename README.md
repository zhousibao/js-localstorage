# localstorage-js
> Practical tool for localStorage
> 一个实用的localStorage工具



## Install
Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save localstorage-js
```


## Basic Usage
```js
import LS from 'localstorage-js';

LS.setItem(key, value, expired) // expired => second秒数

LS.getItem(key)

LS.removeItem(key) 

LS.clear() 
```

**Examples:**

Create an permanent localstorage:
```js
LS.setItem('obj', {name:'localstorage'}) //  长久有效
```

Create an expiring localstorage, Set the validity period for one day:
```js
LS.setItem('obj', {name:'localstorage'}, 24*3600) //  有效期为1天
```

Remove an localstorage:
```js
LS.removeItem('obj') 
```

Clear all localstorage:
```js
LS.clear()
```


## Github
- [localstorage-js](https://github.com/zhousibao/localstorage-js)


## Authors
- [zhousibao](https://github.com/zhousibao)
