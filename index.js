
//import { readFileSync,readFile, writeFileSync,appendFileSync} from 'fs';
//import http from "http";
//import {checkodd,sum} from "./utils.js"
//import getNotes from "./note.js"





process.stdout.write("Entrez une phrase : ");

process.stdin.on('data', (data) => {
    const phrase = data.toString().trim();

    if (phrase.length > 0) {
        const mots = phrase.split(' ');
        const nombreDeMots = mots.length;
        process.stdout.write(`Le nombre de mots dans la phrase est : ${nombreDeMots}\n`);
     } else 
        process.stderr.write("Il n'y a pas de phrase.\n");
    

    
});







// exo fait en classe stdout/ stdint 

//process.stdout.write("Ecrivez votre nom ")
//process.stdout.write("verifier si votre noombre est pair "
//process.stdin.on('data',(data) =>{
    // if (checkodd(data))process.stdout.write(`c'est pair )
    //else process.stderr.write(`c\'est impair)
    //process.stdout.write("\nVerifier si votre nombre sest pair : ")

//process.stdin.on('data',(data) =>{


   // const name = data.toString().toUpperCase()
   // console.log({name});
    //if(name!=="") process.stdout.write(`Hello ${name}`)
   // else process.stderr.write(`Input was empty`)
//})





//console.log(sum(3,4),checkodd(5));
//console.log(getNotes());


 //suite cours du mardi  : cree un serveur


//create web server
//var server = http.createServer(function (req, res) {
    //Cette ligne crée un serveur HTTP en utilisant la méthode createServer du module http. La fonction passée en argument sera exécutée chaque fois qu'une requête est reçue par le serveur.

    //console.log({req})

//if (req.url == '/') { //check the URL of the current request
//  Cette ligne vérifie si l'URL de la requête est "/". Si c'est le cas, le code à l'intérieur du bloc d'instructions sera exécuté.
//res.writeHead(200, { 'Content-Type': 'text/html' });
// Cette ligne envoie les en-têtes de la réponse HTTP. Ici, elle indique que le code de statut de la réponse est 200 (OK) et que le type de contenu est du HTML.
//res.write('<html><body><p>This is home Page.</p></body></html>');
//res.end();
////} else if (req.url == "/student") {
//res.writeHead(200, { 'Content-Type': 'text/html' });
//res.write('<html><body><h1>This is student Page.</h1></body></html>');
//Cette ligne écrit le contenu de la réponse. Dans ce cas, elle envoie une page HTML contenant le message "This is home Page.".
//res.end();
//Cette ligne termine la réponse HTTP et envoie la réponse au client.


//} else if (req.url == "/admin") {
//res.writeHead(200, { 'Content-Type': 'text/html' });
//res.write('<html><body><p>This is admin Page.</p></body></html>');
//res.end();
//} else if (req.url == '/data') { //check the URL of the current request
//res.writeHead(200, { 'Content-Type': 'application/json' });
//res.write(JSON.stringify({ message: "Hello World"}));
//res.end();
//} else {
//res.end('Invalid Request!');
//Si l'URL demandée ne correspond à aucun des blocs d'instructions précédents, cette ligne envoie une réponse avec le message "Invalid Request!".
//}
//});
//server.listen(5000); //6 - listen for any incoming requests
//console.log('Node.js web server at port 5000 is running…');





//cours du mardi 04/07 1er partie

//const hostname ='127.0.0.1';
//const port = 3000;

//const server = http.createServer((req, res) => {
    //res.statusCode = 200;
    //res.setHeader('Content-Type', 'text/plain');
    //res.end('Hello World\n');
    //});
     
    //server.listen(port, hostname, () => {
    //console.log(`Server running at http://${hostname}:${port}/`);
   // });


//cours du dimanche 02/07

//writeFileSync('./file.txt', "My name is Liora");
//appendFileSync('./file.txt', " Galletto ");


//const a = () => {setTimeout(() => console.log('a'),1000)}
//const b = () => {console.log('b')}
//a()
//b()

// const myPromise = new Promise(function(myResolve, myReject) {setTimeout(function(){ myResolve("I love You !!"); }, 3000);});



// // const data = readFile('./file.txt',() => console.log('finish'));
// const data = readFileSync('./file.txt');// 
// blocks here until file is read// console.log(data);//
 // moreWork();

