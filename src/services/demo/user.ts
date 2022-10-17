export default {
    getUser(obj?: object) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('haha')
            }, 2000)
        })
    }
}