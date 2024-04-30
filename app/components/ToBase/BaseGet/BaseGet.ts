const URL_GET = process.env.NEXT_PUBLIC_GET_FROM_DB || ''

export const BaseGet = async () => {
    try {
        const response = await fetch(URL_GET)
        const data = await response.json()
        return data.images
    } catch (e) {
        console.log(e)
    }
}

