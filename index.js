import { Web5 } from '@web5/api';
import { webcrypto } from 'node:crypto';
// @ts-ignore
if (!globalThis.crypto) globalThis.crypto = webcrypto;

const { web5, did: aliceDid } = await Web5.connect();

//console.log(aliceDid);

const {record}  = await web5.dwn.records.create({
    data:"coding in web5",
    message:{
        dataFormat:"text/plain"
    }
})
//console.log('writeResult', record);

const readResult = await record.data.text();
//console.log('readResult', readResult)

const updateResult = await record.update({
    data:"I feel good to update text at Alice's Dwn storage record 😃"
})
//console.log('updateResult : ', await record.data.text())

const deleteResult = await record.delete()

console.log('deleteResult', deleteResult)














