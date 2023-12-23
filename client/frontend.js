




async function request(url,method = 'GET',data = null){
  
  const headers ={
  
  }
  let body

  if(data){
    headers['Content-Type'] = 'application/json'
    body = JSON.stringify(data)
  }

  try {
    
    const response = await fetch(url,{
      method,
      headers,
      body
    })

    return await response.json()

  } catch (e) {
    console.warn('Error', e.message)
  }


}