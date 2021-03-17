export interface LSParams{
  setItem(key: string, value: any, expire?: number) : void;
  getItem<T = any >(key: string, defaultVal?: T) : T | undefined;
  removeItem(key: string) : void;
  clear() : void;
}


export default function CreateStorage(prefix:string = '') : LSParams {
  const storage:Storage = window.localStorage;
  const getKey = (key: string) => `${prefix}${key}`

  /**
   * @设置
   * @param {*} key 键名
   * @param {*} val 值
   * @param {*} expire (可选) 有效时间长度 单位秒
   */
  const setItem = (key: string, value: any, expire?: number) => {
    try {
      const stringData = JSON.stringify({
        value,
        expire: expire ? Date.now() + expire * 1000 : undefined
      })
      storage.setItem(getKey(key), stringData)
    } catch (e) {
      console.log('setItem error', e)
    }
  }

  /**
   * @获取
   * @param {*} key 键名
   */
  const getItem = (key: string, defaultVal?: any) => {
    try {
      const stringData = storage.getItem(getKey(key))
      if(stringData){
        const data = JSON.parse(stringData)
        const { value, expire } = data
        // 在有效期内直接返回
        if (!expire || expire >= Date.now()) {
          return value
        }
        storage.remove(getKey(key))
      }
      return defaultVal
    } catch (e) {
      console.log('getItem error', e)
    }
  }

  /**
   * @删除
   * @param {*} key 键名
   */
  const removeItem = (key: string) => {
    storage.removeItem(getKey(key))
  }

  /**
   * @清空
   */
  const clear = () => {
    storage.clear()
  }

  return {
    setItem,
    getItem,
    removeItem,
    clear,
  }
}