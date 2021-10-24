const person = {
    name: "Danil",
    age: 20,
    city: "Moscow",
  }
  
  const student = Object.create(person);
  
  student.NativeCity = "Kharkiv";
  
  for (let key in student) {
  
      if (student.hasOwnProperty(key)) {
          console.log("Собственное значение student: " + key);
      }   
  }
  
  for (let key in student) {
  
      if (person.hasOwnProperty(key)) {
          console.log("Собственное значение person: " + key);
      }   
  }