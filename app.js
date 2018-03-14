const bcrypt = require('bcryptjs');
const colors = require('colors');

bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash("makers/\/", salt, function(err, hash) {
        // Store hash in your password DB.
        // console.log("passwordnya jadi ", hash.rainbow.underline) //hasilnya beda tiap enkripsi di tempat lain
        console.log("passwordnya jadi ", hash.trap.red) //tulisannya jadi aneh2
    });
});