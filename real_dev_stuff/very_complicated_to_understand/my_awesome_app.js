var lis = document.querySelectorAll('main li');
var nav_lis = document.querySelectorAll('nav li');
var temp_array_for_reversing_word = [];

for (var i = 0, only_textual_lis = lis.length -1; i < only_textual_lis; i++) {
    lis[i].classList.add('barre');
}

var i = 0;
for (var len = nav_lis.length; i < len; i++) {
    temp_array_for_reversing_word.push(nav_lis[i].innerHTML);
}
for (--i, current_word = 0; i >= 0; --i, current_word++) {
    nav_lis[i].innerHTML = temp_array_for_reversing_word[current_word];
}

document.querySelector('header').setAttribute('style', 'background: lightblue');
document.querySelector('main').setAttribute('style', 'background: black; color: white');