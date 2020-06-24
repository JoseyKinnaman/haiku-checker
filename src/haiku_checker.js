export const syllableChecker = (word, counter = 0, i = word.length ) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  if(i>=0){
    if (i===0){
      if (vowels.includes(word[i]) && !vowels.includes(word[i+1])) {
        counter++;
      }
    } else if (i===word.length-1) {  
      if (word[i]==='e' &&  word[i-1]==='l'){
        counter++
      } else if (word[i] !== 'e' || word.length <= 3){
          if (vowels.includes(word[i]) && !vowels.includes(word[i-1])) {
          counter++;
          }
        }
    } else {
      if (vowels.includes(word[i])  && !vowels.includes(word[i-1])) {
        counter++;
      }
    }
    return syllableChecker(word, counter, i-1)
  } else {
    return counter;
  }
}

// export const syllableChecker = word => {
//   const vowels = ['a','e','i', 'o', 'u'];
//   let counter = 0;
//   for( let i=0; i< word.length; i++) { 
//     if (i===0){
//       if (vowels.includes(word[i]) && !vowels.includes(word[i+1])) {
//         counter++;
//       }
//     } else if (i===word.length-1) {  
//       if (word[i]==='e' &&  word[i-1]==='l'){
//         counter++
//       } else if (word[i] !== 'e' || word.length<= 3){
//           if (vowels.includes(word[i]) && !vowels.includes(word[i-1])) {
//           counter++;
//           }
//         }
//     } else {
//       if (vowels.includes(word[i])  && !vowels.includes(word[i-1])) {
//         counter++;
//       }
//     }
//   }
//   return counter;
// }

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

// Code uses functional programming and avoids mutating state as much as possible. [√]
// Code is well tested. [√]
// Code demonstrates an understanding of closures, recursion, and other functional concepts.
//  - filter 
//  - map 
//  - recursion
// Application works as expected. [√]