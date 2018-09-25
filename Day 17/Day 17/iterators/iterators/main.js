let count = {
  start: 10,
  final: 18
};

// Make the object iterable so it can print values starting from start till final

count[Symbol.iterator] = function(){

  return {
      current: this.start,
      last: this.final,
      next() {
        if(this.current <= this.last){
          return {done: false, value: this.current++ };
        }else {
          return {done: true};
        }
      };
    };
  };
  
  for (let num of count) {
    console.log(num);
  }



for (let num of count) {
  console.log(num); // 1, then 2, 3, 4, 5
}




var authors = {
  allAuthors: {
    fiction: [
      'Agatha Christie', 
      'J. K. Rowling',
      'Dr. Seuss'
    ],
    scienceFiction: [
      'Neal Stephenson',
      'Arthur Clarke',
      'Isaac Asimov', 
      'Robert Heinlein'
    ],
    fantasy: [
      'J. R. R. Tolkien',
      'J. K. Rowling',
      'Terry Pratchett'
    ],
    iction: [
      'Agatha Christie', 
      'J. K. Rowling',
      'Dr. Seuss'
    ]
  }
}



// Make authors iterable so it can iterate over all the authors name and logs all authors name


for (const author of authors) {
  console.log(author);
}
