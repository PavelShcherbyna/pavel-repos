function join(array, separator) {
  let str = array[0];
  for (let i = 1; i < array.length; i++){
  	str += separator + array[i];
  }
  return str;
}


const array = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit'];

console.log(join(array, ' '));
