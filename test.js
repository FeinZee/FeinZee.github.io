'use strict';  
function f(){
                   return this;
                }
console.log(f());
  let obj = {
                    name: 'Peter',
                    func: f
                }

                
                console.log(obj.func());