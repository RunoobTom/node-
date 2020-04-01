function myPromise(constructor) {
    let self = this;
    self.status = 'pending';
    self.err = undefined;
    self.value = undefined;
    self.onFullfillArray = [];
    self.onRejectArray = [];

    function resolve(value) {
        if(self.status === 'pending') {
            self.status = 'resolved';
            self.value = value;
            self.onFullfillArray.forEach(func => {
                func(self.value);
            })
        }
    }

    function reject(reason) {
        if(self.status === 'pending ') {
            self.status = 'rejected';
            self.err = reason;
        }
    }

    try {
        constructor(resolve, reject);
    } catch(e) {
        reject(e)
    }
}

myPromise.prototype.then = function(onfullfillFunc, onrejectFunc) {
    let self = this;
    if(self.status === 'resolved') {
        onfullfillFunc(self.value);
    } else if(self.status === 'rejected') {
        onrejectFunc(self.err);
    } else if(self.status === 'pending') {
        self.onFullfillArray.push(function() {
            onfullfillFunc(self.value)
        })
    }
}

var p=new myPromise(function(resolve,reject){setTimeout(() => resolve(1), 1000)});
p.then(function(x){console.log(x)})