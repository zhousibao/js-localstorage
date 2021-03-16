const ls = window.localStorage

/**
 * @设置
 * @param {string} key 键名
 * @param {any} value 值
 * @param {number} expire (可选) 有效时间长度 单位秒
 */
export const setItem = (key, value, expire) => {
  try {
    const stringData = JSON.stringify({
        value,
        expire: expire ? Date.now() + expire * 1000 : undefined,
    })
    ls.setItem(key, stringData)
  } catch (e) {
    console.log('setItem error', e)
  }
}

/**
 * @获取
 * @param {string} key 键名
 * @param {any} defaultVal 默认值
 */
export const getItem = (key, defaultVal) => {
  try {
    const stringData = ls.getItem(key)
    if(stringData){
      const data = JSON.parse(stringData)
      const { value, expire } = data
      // 在有效期内直接返回
      if (expire === undefined || expire >= Date.now()) {
        return value
      }
      ls.remove(getKey(key))
    }
    return defaultVal
  } catch (e) {
    console.log('getItem error', e)
  }
}

/**
 * @删除
 * @param {string} key 键名
 */
export const removeItem = key => {
  ls.removeItem(key)
}

/**
 * @清空
 */
export const clear = () => {
  ls.clear()
}


export default { setItem, getItem, removeItem, clear }
