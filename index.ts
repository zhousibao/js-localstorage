export interface LocalStorage{
  setItem(key: string, value: any, expire: number| undefined) : void;
  getItem(key: string, defaultVal?: any): void;
  removeItem(key: string) : void;
  clear():void;
}


function storage(prefix:string = '', defaultCacheTime = 7 * 24 * 3600) : LocalStorage {
  const storage:Storage = window.localStorage;

  const getKey = (key: string) => `${prefix}${key}`

  /**
   * @设置
   * @param {*} key 键名
   * @param {*} val 值
   * @param {*} expire (可选) 有效时间长度 单位秒
   */
  const setItem = (key: string, value: any, expire: number| undefined = defaultCacheTime) => {
    try {
      const stringData = JSON.stringify({
          value,
          expire: Date.now() + expire * 1000,
      })
      storage.setItem(this.getKey(key), stringData)
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
      const stringData = storage.getItem(this.getKey(key))
      if(stringData){
        const data = JSON.parse(stringData)
        const { value, expire } = data
        // 在有效期内直接返回
        if (expire >= Date.now()) {
          return value
        }
        storage.remove(this.getKey(key))
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
    storage.removeItem(this.getKey(key))
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

export default storage