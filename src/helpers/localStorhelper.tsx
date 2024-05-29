
export const localStorhelper = <T, >(key: string) => {
    const isToken = localStorage.getItem(key) || ''
    if (!isToken) {
        return {} as T
    }
    const pair = JSON.parse(isToken)
    return pair as T
}