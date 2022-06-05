# Ex-1-sequential
Exercice 1
If you had to use the next node.js module and call methods a and then b sequencially, explain why it's not so straightforward and what are the different solutions if we are using node v.8+.
Which is the most elegant solution in your opinion.

module.exports = {
    a: (cb) => {
        setTimeout(()=>{
            return cb(null,1000)
        },1000)
    },

    b: (cb) => {
        setTimeout(()=>{
            return cb(null,500)
        },500)
    },
}

If we want to have any type of sequential ordering we can use events, callbacks, we can also have the .reduce callback be a higher-order, 
which, when called, calls the next function in the chain with the callback. 
At the end, we'll have a function chain that will start by calling the first a, then the b
or as of late we can Promises
