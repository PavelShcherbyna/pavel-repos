function req(url, callback){
  var xhr = new XMLHttpRequest();
  console.log(xhr);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      callback(xhr.responseText);
    }
  };
  xhr.open("GET", url);
  xhr.send();
}

const ownFetch = (url) => {
  console.log(url);
  return new Promise((resolve, reject) => {
    try{
      req(url, resolve);
    }
    catch(err){
      reject(err);
    }
  });
};



ownFetch('https://jsonplaceholder.typicode.com/posts')
  .then(console.log)
  .then(res => res())
  .catch(err => console.log(err));