import { throwErrorMessage, hasStringify } from './util/util'

interface StorageBootStrapConfig {
  mode: 'session' | 'local',
  timeout: number
}

interface StorageSaveFormat {
  
  /** 过期时间 */
  timestamp: number

  /** @name 数据实体 */
  data: any
}

class CustomStorage {
  private readStorage: Storage
  private config: StorageBootStrapConfig
  private usage: number
  private quota: number

  constructor () {
    if (window && window.localStorage && window.sessionStorage) {
      this.readStorage = window.localStorage
    } else {
      throwErrorMessage('当前环境非浏览器，无法消费全局window实例。')
    }
  }

  /**
   * 获取所有key
   * @returns 回storage当中所有key集合
   */
  getKeys(): Array<string> {
    return Object.keys(this.readStorage)
  }

  /**
   * 获取所有value
   * @returns 所有数据集合
   */
  getValues() {
    return Object.values(this.readStorage)
  }

  /**
   * 初始化Storage的数据
   * @param config StorageBootStrapConfig
   */
  bootStrap (config: StorageBootStrapConfig): void {
    switch (config.mode) {
      case 'session':
        this.readStorage = window.sessionStorage
        break;

      case 'local':
        this.readStorage = window.localStorage
        break;
    
      default:
        throwErrorMessage('当前配置的mode未再配置区内，可以检查传入配置。')
        break;
    }
    this.config = config
  }

  /**
   * 返回当前存储库大小
   * @returns number
   */
  size(): number {
    return this.readStorage.length
  }
  
  hasItem(key: string): boolean {
    return this.readStorage.hasOwnProperty(key)
  }

  /**
   * 
   * @param key 设置当前存储key
   * @param value 设置当前存储value
   */
  setItem(key: string, value) {
    if (hasStringify(value)) {
      const saveData: StorageSaveFormat = {
        timestamp: new Date().getTime(),
        data: value
      }
      console.log(saveData, 'saveData')
      this.readStorage.setItem(key, JSON.stringify(saveData))
    } else {
      throwErrorMessage('需要存储的data不支持JSON.stringify方法，请检查当前数据')
    }
  }

  /**
   * 获取数据
   * @param key 获取当前数据key
   * @returns 存储数据
   */
  getItem<T = any>(key: string): T | null {
    const content: StorageSaveFormat | null = JSON.parse(this.readStorage.getItem(key))
    if (content?.timestamp && new Date().getTime() - content.timestamp >= this.config.timeout) {
      this.removeItem(key)
      return null
    }
    return content?.data || null
  }

  /**
   * 移除一条数据
   * @param key 移除key
   */
  removeItem(key: string) {
    if (this.hasItem(key)) {
      this.readStorage.removeItem(key)
    }
  }

  changeItem<S = any>(key: string, onChange: (oldValue: S) => S | null, baseValue?: any) {
    const data = this.getItem<S>(key)
    this.setItem(key, onChange(data || baseValue))
  }

  clearAll() {
    this.readStorage.clear()
  }

}


/**
 * 实例化当前Storage下的class
 */
export default CustomStorage