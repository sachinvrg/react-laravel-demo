import {BASE_URL} from './Const'
export const handleGet = (url) => {
    return fetch(BASE_URL + url)
      .then(res => res.json())
      .then(
        (result) => {
          return result
        },
        (error) => {
          return error
        }
      )
}

export const handlePost=(url , data)=>{
    return fetch(BASE_URL + url, { method: 'POST',
        body: data,
        })
        .then(res => res.json())
        .catch(error =>  { return error })
        .then(response => {return response}) 
}