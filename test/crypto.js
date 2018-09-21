var crypto = require('crypto');

var hash = crypto.createHash('md5');

hash.update('he')

// d41d8cd98f00b204e9800998ecf8427e
// 2510c39011c5be704182423e3a695e91   h
console.log(hash.digest('hex'));
