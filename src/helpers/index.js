export const setCredintial=(response)=>{
localStorage.setItem('token',response.data.data.token)
}