function area(l, w){
  if(l <= 0){
    throw new RangeError("Length should be positive number.");
  }

  if(w <= 0){
    throw new RangeError("Width should be positive number.");
  }
  const area_of_rectangle = l * w;
  console.log(`Area of rectangle ${area_of_rectangle}`);
}

area(5, 6); 
// area(-3, 4);
// area(0, 7);
// area(5, 0);
// area(0, 0);
area(35, 47);
// area(-100, -100);