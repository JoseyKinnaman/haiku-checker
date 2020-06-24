import { syllableChecker, lineSyllables } from './../src/haiku_checker.js';

describe('syllableChecker', () => {
  test('should check the number of vowels in a given word', () =>{
    expect(syllableChecker("doggy")).toEqual(1);
  });

  test('should check the number of vowels in a given word with end vowels and double vowels', () =>{
    expect(syllableChecker("balloon")).toEqual(2);
  });

  test('should check the number of vowels in a given word with end e', () =>{
    expect(syllableChecker("came")).toEqual(1);
  });
  test('should check the number of vowels in a given word with end le', () =>{
    expect(syllableChecker("wrestle")).toEqual(2);
  });
});

describe('lineSyllables', () => {
  test('should check the number of sylabbles in a line', () =>{
   });

  test('should check the number of sylabbles in a line', () =>{
    expect(lineSyllables("A frog jumps into the pond")).toEqual(7);
  });


  test('should check the number of sylabbles in a line', () =>{
    expect(lineSyllables("Splash! Silence again")).toEqual(5);
  });

});