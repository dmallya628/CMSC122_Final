//dark and light mode toggle
function themeToggle() {
  var element = document.body;
  element.classList.toggle('light-mode');

  //changes the text of the theme toggle button depending on current themke
  if (document.getElementById('toggler').innerHTML == 'LIGHT'){
    document.getElementById('toggler').innerHTML = 'DARK'
  }else {
    document.getElementById('toggler').innerHTML = 'LIGHT'
  };
}

//function for the form!
function submitAnswer () {
  var ans = document.getElementById('answer').value;
  correctAns = '609';

  if (ans === correctAns){
    alert ("yeah! (i know it's a lot, shush~ :3)")
  } else if (parseInt(ans) < 609){
    alert ("a little low, think MORE! :D")
  } else if (parseInt(ans) > 609) {
    alert ("too high! (i have a life too you know!! :c)")
  } else {
    alert ("oi, numbers only!")
  }
}
