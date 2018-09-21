// var greet = require("./hello");
// var a = "Jake";

// greet(a);

var fs = require('fs');

// 异步读文件
// fs.readFile('test/hello.js', 'utf-8', function(err, data){
//     if(err) {
//         console.log(err);
//     }else {
//         //console.log(data);
//         console.log(typeof data)
//         console.log(Buffer)       
//         var buf = Buffer.from(data, 'utf-8');
//         console.log(buf);
//     }
// });


// 异步写如文件 
// var data = 'heheda';
// fs.writeFile('test/test.txt', data, function(err) {
//     if(err){
//         console.log(err);
//     }else{
//         console.log("ok!");
//     }
// })

// 读文件流
// var rs = fs.createReadStream('test/test.txt', 'utf-8');

// rs.on('data', function(chunk) {
//     console.log('Data');
//     console.log(chunk);
// })

// rs.on('end', function() {
//     console.log('end');
// })

// rs.on('err', function(err) {
//     console.log('err');
//     console.log(err);
// })

// 写入流
// var ws1 = fs.createWriteStream('test/test.txt', 'utf-8');
// ws1.write('呵呵哒\n congqianyouge dashab');
// ws1.write('end')
// ws1.end();
// console.log('end')

// var ws2 = fs.createWriteStream('test/test.txt', 'utf-8');
// ws2.write(new Buffer('aaaaadddasdfasdfasdf'), 'utf-8');
// ws2.write('end')
// ws2.end();
// console.log('end')

// 复制 从读流 自动到写流中

// var rs = fs.createReadStream('test/test.txt', 'utf-8');
// var ws = fs.createWriteStream('test/wirtein.txt', 'utf-8');

// rs.pipe(ws)

fs.stat('test/test.txt', function(err, stat){
    if(err){
        console.log(err);
    }else{
        //是否文件
        console.log('isFile:' + stat.isFile());

        // 是否是目录
        console.log('isDirectory' + stat.isDirectory());

        if(stat.isFile()) {
            // 文件大小
            console.log('size:' + stat.size);

            //创建的时间
            console.log('bith time:' + stat.birthtime);

            // 修改日期
            console.log('modify time:' + stat.mtime);
        }
    }
})