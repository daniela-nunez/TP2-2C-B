// Complete the isBalanced function below.
function isBalanced(s) {

  let cont= 0;
  let aux= [];
let balance= 'YES';

  
  while(cont<s.length && balance=='YES'){     
      if(s[cont]=='{' || s[cont]=='[' || s[cont]=='('){
          aux.push(s[cont])
      }else if(s[cont]==')' || s[cont]==']' || s[cont]=='}'){
          if(aux.length!=0){
              switch(s[cont]) {
                  case ')':
                      if(aux[aux.length-1]=='(') {
                          aux.pop();
                      }else {
                          balance='NO';
                      }
                      break;
                  case ']':
                      if(aux[aux.length-1]=='[') {
                          aux.pop();
                      }else {
                          balance='NO';
                      }
                      break;
                  case '}':
                      if(aux[aux.length-1]=='{') {
                          aux.pop();
                      }else {
                          balance='NO';
                      }
                      break;
                  }
          }else{
              balance= 'NO';
          }
      }

     cont++;

  }
  
  if(aux.length!=0 && balance){
      balance='NO';
  }

  return balance;
}

// TESTS
console.log(isBalanced('{[()]}') == 'YES');
console.log(isBalanced('{[(])}') == 'NO');
console.log(isBalanced('{{[[(())]]}}') == 'YES');
console.log(isBalanced('{{[[(())]]}}{}()') == 'YES');
