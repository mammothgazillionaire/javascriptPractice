
var user = document.querySelector(".info-user");

var avatar = document.querySelector(".avatar");
var followers = document.querySelector(".followers");
var following = document.querySelector(".following");
var repos = document.querySelector(".repos");
var loginName = document.querySelector(".loginName");
var spinner = document.querySelector(".lds-hourglass");
spinner.style.display = "none";
avatar.style.display = "none";

function displayInfo(userName){
  avatar.style.display = "inline";
  fetch(`https://api.github.com/users/${userName}`).then(data =>  data.json()).then(res => {
    avatar.src = res.avatar_url;
    loginName.innerHTML = `${res.name}`;
    followers.innerHTML = `Followers: ${res.followers}`;
    following.innerHTML = `Following: ${res.following}`;
    repos.innerHTML = `Repos: ${res.public_repos}`;
    user.value = "";
    spinner.style.display = "none";
	});
}


function displayValue(event){
    if(event.code == "Enter") {
    let userName = user.value;
    displayInfo(userName);
    spinner.style.display = "block";
  }
}

user.addEventListener('keypress', displayValue);