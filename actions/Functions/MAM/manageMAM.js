const fetchRoot = require('./fetchRoot')
const sendData = require('./pushData')

const send = async(data) =>{
    const root = await sendData.execute(data)
    return root
}
const fetch = async(root) =>{
    console.log("InsideFetch")
    const data = await fetchRoot.execute(root)
    return data
}
const test = async()=>{
   const root = await send("yarab yarab")
    console.log("SendingRoot "+ root) 
    console.log("Before fetch")
    const data = await fetch(root)
    console.log("AfterFetch")
    console.log("FetchingRoot "+data)
}
test()
module.exports={
    send:send,
    fetch:fetch
}
