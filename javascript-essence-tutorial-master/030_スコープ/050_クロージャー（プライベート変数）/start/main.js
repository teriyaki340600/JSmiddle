function incrementFactrory() {
    let num = 0;
    
    function increment() {
        num = num + 1;
        console.log(num);
    }

    return increment;
}

const increment = incrementFactrory();

increment();
increment();
increment();
increment();
