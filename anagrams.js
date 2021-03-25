function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let letterCounter = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];

    letterCounter[letter]
      ? (letterCounter[letter] += 1)
      : (letterCounter[letter] = 1);
  }
  console.log(letterCounter);

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];

    if (!letterCounter[letter]) {
      return false;
    } else {
      letterCounter[letter] -= 1;
    }
  }

  return true;
}

//console.log(anagram("", ""));
console.log(anagram("car", "acr"));
