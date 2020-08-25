function a() {
    console.log('helllo');
}

a.prop = 0;
a.method = function() {
    console.log('method');
}

a();
a.method();
console.log(a.prop);