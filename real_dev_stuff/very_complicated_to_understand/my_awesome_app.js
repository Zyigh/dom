var lis = document.querySelectorAll('main li');
// var nav_lis = document.querySelectorAll('nav li');
// var temp_array_for_reversing_word = [];
//
// for (var i = 0, only_textual_lis = lis.length -1; i < only_textual_lis; i++) {
//     lis[i].classList.add('barre');
// }
//
// var i = 0;
// for (var len = nav_lis.length; i < len; i++) {
//     temp_array_for_reversing_word.push(nav_lis[i].innerHTML);
// }
// for (--i, current_word = 0; i >= 0; --i, current_word++) {
//     nav_lis[i].innerHTML = temp_array_for_reversing_word[current_word];
// }
//
// document.querySelector('header').setAttribute('style', 'background: lightblue');
// document.querySelector('main').setAttribute('style', 'background: black; color: white');


// Events

var header = document.querySelector('header');

    // On self by using global selector

//header.addEventListener('click', function(){
//    header.classList.add('darkred');
//});

    // Toggle

// header.addEventListener('click', function(){
//     header.classList.toggle('darkred');
// });

    // On other using a global selector

var main = document.querySelector('main');
// header.addEventListener('click', function(){
//     main.classList.toggle('darkred');
// });

    //Intro this

// header.classList.add('darkred');
// header.addEventListener('click', function(){
//     this.classList.toggle('darkred');
//     main.classList.toggle('darkred');
// });

    // handle list

        //VERSION DE GROS PORC

//for (let i = 0, len = lis.length; i < len - 1; i++) {
//    lis[i].addEventListener('click', function(){
//        lis[i].classList.toggle('barre');
//    });
//}

        //UN PEU MIEUX VERSION

//for (var i = 0, len = lis.length; i < len - 1; i++) {
//    lis[i].addEventListener('click', function(){
//        this.classList.toggle('barre');
//    });
//}

        //Version propre

//function barre_le_bordel() {
//    this.classList.toggle('barre');
//}

for (var i = 0, len = lis.length; i < len - 1; i++) {
    lis[i].addEventListener('click', barre_le_bordel);
}

        // Remove
//function barre_le_bordel() {
//    this.classList.toggle('barre');
//    this.removeEventListener('click', barre_le_bordel)
//}