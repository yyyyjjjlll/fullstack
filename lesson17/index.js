// async function fetchUser(id) {
//   console.log("请求服务器:", id);

//   return {
//     id,
//     name: `User-${id}`
//   };
// }
const cache = new Map()
function getUser(id){
  if(cache.has(id)){
    return cache.get(id)
    // const promise = map.get(id)
    // return promise
  }
  // const promise = new Promise((resolve, reject)=>{
  //   fetch('/api/user/${id}').then(res=>{
  //     resolve(res)
  //   }).catch(error=>{
  //     reject(error)
  //   })
  // })
  // const response = await fetch('/api/user/${id}')
  // const a = await response.json()
  const promise = fetch('/api/user/${id}')
    .then(res=>{
      if(!Response.ok){
        throw new Error('')
      }
      return res.json()
    })
    .catch(error=>{
      if(cache.get(id) === promise){
        cache.delete(id)
      }
    })
  cache.set(id, promise)
  return promise
  // return a
}


