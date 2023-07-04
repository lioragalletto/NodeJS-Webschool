
import { readFileSync,readFile, writeFileSync,appendFileSync} from 'fs';



writeFileSync('./file.txt', "My name is Liora");
appendFileSync('./file.txt', " Galletto ");


const a = () => {setTimeout(() => console.log('a'),1000)}
const b = () => {console.log('b')}
a()
b()

const myPromise = new Promise(function(myResolve, myReject) {setTimeout(function(){ myResolve("I love You !!"); }, 3000);});



// // const data = readFile('./file.txt',() => console.log('finish'));
// const data = readFileSync('./file.txt');// 
// blocks here until file is read// console.log(data);//
 // moreWork();

