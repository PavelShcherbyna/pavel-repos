class MyString {
	constructor(string) {

  	this.string = string;

	}
  	reverse(string) {
  		let broke = (string.split(''));
  		broke.reverse();
  		let gath = broke.join('');
  		return (gath);  	
  	}
  	ucFirst(string) {
  		let uc = string[0].toUpperCase() + string.slice(1);
  		return (uc);
  	}
  	ucWords(string) {
  		let broke = (string.split(' '));
  		broke[0] = broke[0][0].toUpperCase()+broke[0].slice(1);
  		broke[1] = broke[1][0].toUpperCase()+broke[1].slice(1);
  		broke[2] = broke[2][0].toUpperCase()+broke[2].slice(1);
  		let gath = broke.join(' ');
  		return (gath);
  	}
}

const str = new MyString();

console.log(str.reverse('abcde')); //выведет 'edcba'
console.log(str.ucFirst('abcde')); //выведет 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'
