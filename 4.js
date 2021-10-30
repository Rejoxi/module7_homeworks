function ElectroItmes (consuming){
    this.consuming = consuming;
    this.type = "Electrical appliances";
  }
  
  ElectroItmes.prototype.getSumConsuming = function(consuming){
    console.log("The consumings are: " + consuming);
  }
  
  function Computer(name, first_consuming){
    this.consuming = first_consuming;
    this.color = "Black";
    this.name = name;
  }
  
  Computer.prototype = new ElectroItmes();
  
  function Printer(name, second_consuming){
    this.name = name;
    this.consuming = second_consuming;
    this.color = "White";
  }
  
  Printer.prototype = new ElectroItmes();
  
  const comp = new Computer ("Computer", 700);
  const print = new Printer ("Printer", 300);
  comp.getSumConsuming(700);
  print.getSumConsuming(300);
  
  console.log(comp);
  console.log(print);
  