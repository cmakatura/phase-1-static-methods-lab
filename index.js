class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replaceAll(/[^A-z0-9' -]|\^/g, '')
  }

  static titleize(title){
  if(!title) {
    return '';
  }
  let arr = [];
  let excludeWords = ['of', 'the', 'and', 'a', 'an', 'but', 'for', 'at', 'by', 'from']
  arr = title.split(' ');
  return arr.map((word, i) =>
  {
     return excludeWords.includes(word) && i > 0 ? [word] : word.charAt(0).toUpperCase() + word.slice(1);

  }).join(' ');
}
}



/*
   const ignore = ['a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];

   string = string.toLowerCase().split(' ');
  for (var i = 0; i < string.length; i++) {
    if (ignore.contains(string)){
      string
    } else {
    string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1); 
  }
  string.join(' ');
}
}


}

*/