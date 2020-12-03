# js-localstorage
>js-localstorage


## Github

- [zhousibao](https://github.com/zhousibao/js-localstorage)



## Install
Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save js-localstorage
```


## Basic Usage
```js
import LS from 'js-localstorage';
LS.setItem(key, value, expired) // expired => second秒数

LS.getItem(key) 

LS.removeItem(key) 

LS.clear() 
```

**Examples:**

Create an permanent localstorage:
```js
LS.setItem('obj', {name:'localstorage'}) //  设置有效期为
```

Create an expiring localstorage, Set the validity period for one day:
```js
LS.setItem('obj', {name:'localstorage'}, 24*3600) //  设置有效期为
```

Remove an localstorage:
```js
LS.removeItem('obj') 
```

Clear all localstorage:
```js
LS.clear()
```



## Authors

- [zhousibao](https://github.com/zhousibao)
