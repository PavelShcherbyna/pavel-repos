function split(string, separator, limit) {
  this.string = string;
  this.separator = separator;
  this.limit = limit;
  return (string.split(separator, limit))
}


const string = 'Lorem ipsum dolor sit amet consectetur adipiscing elit';

console.log(split(string, ' '));
