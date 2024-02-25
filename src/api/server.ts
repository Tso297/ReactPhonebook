const token = 'eca84fe73090bd1103636519547f10e8e4f10ffbbacda286'

export const server_calls = {
    get: async () => { 
        const response = await fetch(`http://127.0.0.1:5000/contacts`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }

        });

//        if (!response.ok){
//            throw new Error('Failed to fetch data from the server')
//        }
        const data = await response.json()
        console.log(data);
        
        return data
    //    return await response.json()
    },
    
}