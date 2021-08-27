const iotaGlobal = require('./IotaGlobal')
const { asciiToTrytes, trytesToAscii } = require('@iota/converter')


const fetchRoot = async(_root)=>{
    console.log("InsideFetchRoot")
    const resp = await  iotaGlobal.Mam.fetch(_root, 'restricted', iotaGlobal.sideKey)
    const trytMessages = resp.messages
    const asciiMessages = []
    console.log("beforeloop")
    for (let index = 0; index < trytMessages.length; index++) {
        asciiMessages.push(iotaGlobal.converter.trytesToAscii(trytMessages[index]))
    }
    console.log("afterloop")
     return asciiMessages
}
const test = async()=>{
    const result = await fetchRoot('VDFYGWNSQU9RAIATFDHBEZLPZSGTTAXDNZIVAKBTQJCTZFXJDYIITFYEDRVA9Z9AQSSKCPDTJMVEMHDQR')
    console.log("Result"+result)
}
//test()
module.exports = {
    execute:fetchRoot
}