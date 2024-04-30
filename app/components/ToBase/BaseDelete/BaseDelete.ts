const URL_DELETE = process.env.NEXT_PUBLIC_DELETE_FROM_DB || '' 

export function handleDelete (id: string | undefined) {
    try {
        fetch(URL_DELETE, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
             body: JSON.stringify({ id })
        })
        
        //---------------------------------------------------------
        //Uptade list of items after deleting 
        //(use context or state menager or STATE in client component)
        //---------------------------------------------------------
        // const updatedFiles = files.filter(file => file.id !== id)
        // setFiles(updatedFiles)
    } catch (e) {
        console.log(e)
    }
}