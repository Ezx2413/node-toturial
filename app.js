const st = (amount) => {
    if (amount > 10) {
        console.log('You are rich')
    } else if (amount > 5) {
        console.log('You are average')
    } else {
        console.log('You are poor')
    } // end if
    console.log(`amount is ${amount}`);
}

const a = 24;

module.exports = {st , a};

// st(4);
