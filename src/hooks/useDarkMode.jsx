import { useState, useEffect } from 'react'

const useLocalStorage = () => {
  const key = 'dark-mode'
  const [itemValue, setItemValue] = useState(() => {
    const localStorageItem = window.localStorage.getItem(key)
    return localStorageItem ? JSON.parse(localStorageItem) : false
  })

  const setLocalStorageItemValue = (value) => {
    window.localStorage.setItem(key, value)
    setItemValue(value)
  }

  return [itemValue, setLocalStorageItemValue]
}

const useDarkMode  = () => {
  const [enabled, setEnabled] = useLocalStorage()

  useEffect(() => {
    const className = 'dark'
    const bodyClass = window.document.body.classList

    enabled ? bodyClass.add(className) : bodyClass.remove(className)
  }, [enabled])

  return [enabled, setEnabled]
}

export default useDarkMode