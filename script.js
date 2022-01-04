const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 
                  'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
                  'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

function rot13(str) {
  let endText = "";
  for (let char of str){
    if (alphabet.includes(char)){
      let position = alphabet.indexOf(char);
      let newPosition = position + 13;
      endText += alphabet[newPosition];
    } else {
      endText += char;
    }
  }
  
  return endText;
  
}
rot13("URYYB JBEYQ!")
