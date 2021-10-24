const person = {
    name: "Danil",
    age: 20,
    city: "Moscow",
  }
  
  const str = "city";
  
  function Check(person,str){
    for(let key in person){
      if(key == str)
        return true;
      else
        return false;
    }
  }
  
  console.log(Check(person,str));