const URL = process.env.NEXT_PUBLIC_FROM_DIR || ''

export async function DirectoryGet() {
    const res = await fetch(URL)
    const data = await res.json()
    return data
}

