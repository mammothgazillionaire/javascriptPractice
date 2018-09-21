// 1. Make a function in the Array.prototype called suffle that suffles the given array
// eg: [1,3,6,7,9] => [3,7,6,1,9]


var arr = new Array(1,3,6,7,9);

Array.prototype.shuffleArray = function(){

  for(var i  = arr.length -1 )

}



//2. Create the constructor function for a Video object. The function should take in arguments of title (a string), uploader (a string, the person who uploaded it), and seconds (a number, the duration), and it should save them as properties of the object.

function Video(title,uploader, duration){

  this.title = title;
  this.uploader = uploader;
  this.duration = duration;
}


//Create a method on the Video object called watch(). When that method is called, it should use console.log to output a string like "You watched all 60 seconds of Otters Holding Hands!"


Video.prototype.watch = function(){

  console.log("You just watched the whole video!!!");

}

//Instantiate a new Video object and call the watch() method on it.

var video = new Video("javascript","john", 2 + " minutes " + 30 + " seconds");

video.watch();

//Instantiate another Video object with different constructor arguments.


var video1 = new Video("css","chuck noriss", 4 + " minutes " + 10 + " seconds");

//Use an array of data and a for loop to instantiate 5 Video objects.

var arr1 = [{"javascript","john", 2 + " minutes " + 30 + " seconds"},
            {"css","chuck noriss", 4 + " minutes " + 10 + " seconds"},
            {"css","walter", 3 + " minutes " + 20 + " seconds"},
            {"javascript","smith", 9 + " minutes " + 30 + " seconds"},
            {"html","jane", 5 + " minutes " + 40 + " seconds"}];
            


//Make the watch method accept amounts of seconds to watch for, and call it with different amounts of seconds.


//Define a new class called MusicVideo that extends Video. Its constructor should also take in an artist argument.


//Instantiate a new MusicVideo object and call the watch() method on it.


//Add a method to MusicVideo called rockOut() that uses console.log to output a string like "You rocked out to La Bamba by Ritchie Valens!.


//Use an array of data and a for loop to instantiate 5 MusicVideo objects.


//Make an array of video data with both normal videos and music videos, loop through them, and decide on each one whether to make it a Video or MusicVideo object.


//Comment out the MusicVideo code, as you'll be working on changing Video first.

//Change the Video constructor function to accept a single object literal argument instead of multiple arguments.


//Create a new Video object and call watch() on it.


//Make the arguments optional by giving them default values if they're not specified.


//Change the MusicVideo constructor function to also accept a single object literal argument instead of multiple arguments. Test it by calling it at least once.



//make sure that if the object literal is missing some values, that default values are used instead of undefined