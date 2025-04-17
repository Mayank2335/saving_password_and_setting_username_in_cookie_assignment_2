const crypto = require('crypto');
const targetHash = "eaa1938017b2d55e02387d0837e1b56bc124ae8a17624e10e366bae6c4b9c834"


// Here we are creating a function to hash the numbers 
function sha(msg){
    return crypto.createHash('sha256').update(msg).digest('hex');
}

// checking the number of hash
function crack(){
    for(let i = 100 ; i <= 999 ; i++){
        const pin = i.toString();
        // Manually hashing 
        const hash = sha(pin);
        // if conditiion
        if (hash === targetHash){
            console.log(`Success the number is ${pin}`)
            //If found 
            return;
        }
    }
    console.log(`Invalid`)
}
crack();

// The Number is 894.