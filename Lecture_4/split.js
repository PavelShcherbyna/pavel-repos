function split(string, separator, limit) {
  let index = string.indexOf(separator);
  let arr = [];
  if (index != -1) {
  	arr.push(string.substring(0, index));
  }
  while (index != -1){
  	index++;
  	let new_index = string.indexOf(separator, index);
  	if (new_index != -1){
  		arr.push(string.substring(index, new_index));
  	}
  	index = new_index;
  }
  return (arr);
}


const string = 'Lorem ipsum dolor sit amet consectetur adipiscing elit';

console.log(split(string, ' '));
