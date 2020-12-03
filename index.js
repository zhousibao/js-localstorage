const ls = window.localStorage

/**
 * @设置
 * @param {string} key 键名
 * @param {any} val 值
 * @param {number} expired (可选) 有效时间长度 单位秒
 */
export const setItem = (key, val, expired) => {
  try {
    const data = {
      [key]: val,
    }
    if (expired) {
      data[`__${key}__expired`] = Date.now() + expired*1000
    }

    ls.setItem(key, JSON.stringify(data))
  } catch (e) {
    console.log('setItem error', e)
  }
}

/**
 * @获取
 * @param {string} key 键名
 */
export const getItem = key => {
  try {
    const data = JSON.parse(ls.getItem(key))
    if (!data) return
    if (data.hasOwnProperty(`__${key}__expired`)) {
      if (data[`__${key}__expired`] > Date.now()) {
        return data[key]
      }
      removeItem(key)
      return
    }
    return data[key]
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
