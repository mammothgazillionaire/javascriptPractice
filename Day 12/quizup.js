var questionArray = [
  "What is the capital of Australia?",
  "What is the capital of Liberia?",
  "What is the capital of Taiwan?",
  "What is the capital of Japan?",
  "What is the capital of China?",
  "What is the capital of Turkey?",
  "What is the capital of Colombia?",
  "What is the capital of India?"];


var answerArray = [
  ["Canberra", "Melbourne", "Sydney", "Darwin"],
  ["Arthington","Monrovia","Tuzon","Marshall"],
  ["Tainan City", "Taichung", "Taipei", "Hsinchu"],
  ["Kyoto","Hiroshima","Tokyo","Osaka"],
  ["Hong Kong", "Macau", "Shanghai", "Beijing"],
  ["Ankara","Istanbul","Antalya","Bursa"],
  ["Medellin", "Bogota", "Cartagena", "Cali"],
  ["Mumbai","Hyderabad","Bangalore","New Delhi"]
];

var correctAnswers = [
  "A. Canberra",
  "B. Monrovia",
  "C. Taipei",
  "C. Tokyo",
  "D. Beijing",
  "A. Ankara",
  "B. Bogota",
  "D. New Delhi"];




  var headingQuiz = document.querySelector(".quiz__main");
  
  headingQuiz.innerHTML = `<h1 class="heading__main">Let's Quiz</h1>
                           <button class="button__start">Start Quiz</button>`

function startQuiz(){
  quizBtn.style.display = "none";

}

quizBtn.addEventListener('click', startQuiz);



















// var count = 30;
// var counter = function(){
//   document.querySelector('count').innerHTML= count;
//   count--;
//   if (count === 0){
//     clearInterval(interval);
//     document.getElementById('count').innerHTML='Done';
//     // or...
//     alert("You're out of time!");
//   }
// }
// setInterval(counter, 1000);
