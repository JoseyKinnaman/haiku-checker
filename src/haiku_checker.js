export const syllableChecker = word => {
  const vowels = ['a','e','i', 'o', 'u'];
  let counter = 0;
  for( let i=0; i< word.length; i++) { 
    if (i===0){
      if (vowels.includes(word[i]) && !vowels.includes(word[i+1])) {
        counter++;
      }
    } else if (i===word.length-1) {  
      if (word[i]==='e' &&  word[i-1]==='l'){
        counter++
      } else if (word[i] !== 'e' || word.length<= 3){
          if (vowels.includes(word[i]) && !vowels.includes(word[i-1])) {
          counter++;
          }
        }
    } else {
      if (vowels.includes(word[i])  && !vowels.includes(word[i-1])) {
        counter++;
      }
    }
  }
  return counter;
}

export const lineSyllables = line =>{
 const words = line.split(' ');
 let counter = 0;
 words.forEach(word => {
   if(word.length <= 2){
     counter++
   }
   counter += syllableChecker(word)
 })
 return counter;
}