function isanagram(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }
    var str1 = str1.split('').sort().join('');
    var str2 = str2.split('').sort().join('');
    return str1 === str2;
}
console.log(isanagram('listen', 'silent'));
console.log(isanagram('hello', 'world'));