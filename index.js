const fs = require('fs');

// const data = fs.readFileSync('file.txt')
// console.log("" +data)

// fs.writeFile('file.txt',"Hello to the world !",'utf-8',(err) => {
//     console.log('file modified !');
// })

// fs.appendFileSync('file.txt',"class is going on",'utf-8')

// fs.mkdir('dir1', (err) => {
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Dir formed")
//     }
// })

// fs.rmdir('dir1',(err) => {
//     console.log(err)
// })

// fs.rename('file.txt','new-file.txt',(err) => {
//     console.log(err);
// })

const path = require('path')


// const dir = path.dirname(p);

// const extension = path.extname(p);

// console.log(dir);

// console.log(extension)

// const pFile = "C:\Users\anujw\OneDrive\Desktop\readwrite\new-file.txt";
// const pFolder = "C:\Users\anujw\OneDrive\Desktop\readwrite\dir1";

// const pathJoin = path.join(pFolder,path.basename(pFile));

// fs.copyFile(pFile,pathJoin,(err) => {
//     if(err){
//         console.log(err);
//     }else{
//         console.log("File copied");
//     }
// })

const http = require('http');

const htmlcontent = fs.readFileSync('index.html','utf-8')


const server = http.createServer((req,res) => {
    res.setHeader('Content-Type','text/html');

    res.write('<html><head> <title>node js class</title></head><body>');
    if(req.url === '/login'){
        res.write('<h1>Hello Login !')
    }else if(req.url === '/file'){
        res.write(htmlcontent);
    }
    else{
        res.write('<h1>Hello World !</h1>');
    }
    res.write('</body></html>');

    res.end();
})

const port = 3000;
const host = 'localhost';

server.listen(port,host,() => {
    console.log(`Server is listening on http://${host}:${port}`);
})