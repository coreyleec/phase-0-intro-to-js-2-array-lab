
const cats = [ "Milo", "Otis", "Garfield"];

    function destructivelyAppendCat(name) {
        return cats.push(name);
    }
    function destructivelyPrependCat(name) {
        return cats.unshift(name);
    }      
    function destructivelyPrependCat(name) {
        return cats.pop(name);
    }
    function destructivelyPrependCat(name) {
        return cats.shift(name);
    }
    function appendCat(name) {
        return [...cats, name];
    }
    function prependCat(name) {
        return cats.slice(name);
    }
    function removeLastCat() {
        return cats.slice(-1);
    }
    function removeFirstCat() {
        return cats.slice(1);
    }

    

    /*function cats.push("Ralph") {
        return 
    }*/
    

    /*function destructivelyAppendCat(name) {
    return name.push("Ralph") 
    }
    
    //

    ;*/
    // cats.push{'Ralph');
    // cats.unshift("Bob");    
    // cats.pop();
    // cats.shift();