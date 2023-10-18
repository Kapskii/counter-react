export const setToLocalStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const getFromLocalStorage = (key: string, func: (x:any) => void) => {
    const storageMax = localStorage.getItem(key)
    if (storageMax) {
        func(JSON.parse(storageMax))
    }
}