////////////search field///////////////////////

let button = document.getElementById('search-ico')
let input = document.getElementById('search-field')
let srchpanel = document.querySelector('.search-panel')
let bool = true;
function anim(input) {
  if (bool) {
    input.style.width = '18rem';
    input.style.opacity = '1';
    button.style.paddingLeft = '.5rem'
    input.style.paddingLeft = '.4rem';
    input.style.paddingRight = '.4rem';
    srchpanel.style.width = '18rem';
    srchpanel.style.color = '#bfbfbf'
    srchpanel.style.background = '#fff'
    input.focus();
    bool = false;
  } else {

    input.style.width = '0';
    input.style.opacity = '0'
    button.style.paddingLeft = '0'
    input.style.paddingLeft = '0';
    srchpanel.style.width = '1.4rem'
    input.style.paddingRight = '0';
    srchpanel.style.color = '#fff'
    srchpanel.style.background = 'none'
    input.blur();
    bool = true;
  }

}
if (button) {
  button.addEventListener('click', function () {
    anim(input);
  })
}
function inputAnimOff(input) {
  input.style.width = '0';
  input.style.opacity = '0'
  button.style.paddingLeft = '0'
  input.style.paddingLeft = '0';
  srchpanel.style.width = '1.4rem'
  input.style.paddingRight = '0';
  srchpanel.style.color = '#fff'
  srchpanel.style.background = 'none'
  input.blur();
  bool = true;
}

$(document).mouseup(function (e) {
  var container = $('#search-field');
  var btn = $('#search-ico')


  if (!container.is(e.target) && !btn.is(e.target)) {
    inputAnimOff(input);
  }
});



///////////////lang change section/////////////////////////////////////

const langField = document.querySelector('.lang-wrapper');
const langBtn = document.querySelector('.header-lang-change');
const langRotate = document.getElementById('lang-rotate')
const armFlag = document.getElementById('arm-flag');
const rusFlag = document.getElementById('rus-flag');
const engFlag = document.getElementById('eng-flag');

armFlag.addEventListener('click', () => {
  armFlag.style.order = '1';
  rusFlag.style.order = '2';
  engFlag.style.order = '3';
})

rusFlag.addEventListener('click', () => {
  rusFlag.style.order = '1';
  armFlag.style.order = '2';
  engFlag.style.order = '3';
})

engFlag.addEventListener('click', () => {
  engFlag.style.order = '1';
  armFlag.style.order = '2';
  rusFlag.style.order = '3';
})


let langBool = true;

langBtn.addEventListener('click', () => {
  langAnim(langField);

})


function langAnim(item) {
  if (item.style.height == '1.6rem') {
    item.style.height = '6rem';
    langBool = false;
    langRotate.style.transform = 'rotate(180deg)'

  } else {
    item.style.height = '1.6rem';
    langBool = true;
    langRotate.style.transform = 'rotate(360deg)'
  }

}



$(document).mouseup(function (e) {
  var container2 = $('#lang-changer');



  if (!container2.is(e.target) && container2.has(e.target).length === 0) {
    langField.style.height = '1.6rem';
    if (langRotate.style.transform === 'rotate(180deg)') {
      langRotate.style.transform = 'rotate(360deg)'
    }

  }
});

////////////////dark mode/////////////////////

const themeBtnRound = document.querySelector('.theme-round-btn');
const themeMainBtn = document.querySelector('.theme-main-btn');
const mainConteiner = document.querySelector('.main-container')
const servicesSlider = document.querySelector('.services-wrap-slide')
const servicesSliderText = document.querySelectorAll('.wrap-slide-text')
const facultetMain = document.querySelector('.fakultet')
const changeText = document.querySelectorAll('.changeable-text');
// const input1 = document.querySelector('#input1')
// const input2 = document.querySelector('#input2')
const facRegText = document.querySelector('.fakultet_registration_text')
const facGlobalHeading = document.querySelector('.fakultet-global-heading');


let darkBool = false;


themeBtnRound.addEventListener('click', () => {
  changeText.forEach(item => item.classList.toggle('dark-mode'));
  facultetMain.classList.toggle('dark-mode');
  mainConteiner.classList.toggle('dark-mode');
  servicesSlider.classList.toggle('dark-mode');
  // facultetReg.classList.toggle('fakultet_registration-dark')
  // input1.classList.toggle('fakultet_registration-dark')
  // input2.classList.toggle('fakultet_registration-dark')
  facRegText.classList.toggle('fakultet_registration-dark');
  facGlobalHeading.classList.toggle('fakultet-global-heading-dark');
  servicesSliderText.forEach((item) => item.classList.toggle('dark-mode'));


  if (themeBtnRound.style.right === '') {
    darkBool = true;
    themeBtnRound.style.right = '1.45rem';
    themeBtnRound.style.background = '#fff';
    themeMainBtn.style.background = '#0A0935';
    themeMainBtn.style.color = '#fff';
    document.body.style.background = '#0B0316';
  } else {
    themeBtnRound.style.right = '';
    darkBool = false;
    themeBtnRound.style.background = '#0A0935';
    themeMainBtn.style.background = '#fff';
    themeMainBtn.style.color = '#0A0935';
    document.body.style.background = ''
  }

    //selected child add dark Mode
    darkModeMobile( $(".faculty_selection").children(".selected"));

});



/////////////////////////inputs background//////////////////


// const nameInput1 = document.querySelector('#input1');
// const divBackgr1 = document.querySelector('.fakultet_registration_name');
// const nameInput2 = document.querySelector('#input2');
// const divBackgr2 = document.querySelector('.fakultet_registration_phone');


// nameInput1.addEventListener('focus', () => {
//   divBackgr1.style.background ='linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'

// })
// nameInput1.addEventListener('blur', () => {
//   divBackgr1.style.background = 'gray';
// })
// nameInput2.addEventListener('focus', () => {
//   divBackgr2.style.background ='linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'

// })
// nameInput2.addEventListener('blur', () => {
//   divBackgr2.style.background = 'gray';
// })


// $(document).ready(function(){
//   $(".fakultet_choice_menu_c1_button").click(function(){
//       $(".fakultet_choice_menu_c1_hr").css("display","block");
//       $(".fakultet_choice_menu_c2_hr").css("display","none");
//       $(".fakultet_choice_menu_c1_button").css("opacity","1");
//       $(".fakultet_choice_menu_c2_button").css("opacity","0.4");
//   });
//   $(".fakultet_choice_menu_c2_button").click(function(){
//       $(".fakultet_choice_menu_c1_hr").css("display","none");
//       $(".fakultet_choice_menu_c2_hr").css("display","block");
//       $(".fakultet_choice_menu_c1_button").css("opacity","0.4");
//       $(".fakultet_choice_menu_c2_button").css("opacity","1");
//   });
// });

$("#telephone").intlTelInput({
  allowDropdown: true,
  excludeCountries: ['az', 'tr'],
  preferredCountries: ["am", "ru"],
  separateDialCode: true,


});

const orderAdvice = document.getElementById('order-advice')
const freeAdvice = document.querySelector('.free-advice-block')
const closeBtn = document.getElementById('advice-close-btn')

orderAdvice.addEventListener('click', () => {
  freeAdvice.style.display = 'flex';
  freeAdvice.style.top = window.scrollY + 'px';
  document.body.style.overflowY = 'hidden'
})
closeBtn.addEventListener('click', () => {
  freeAdvice.style.display = 'none';
  document.body.style.overflowY = 'visible'

})

//dark Mode function
function darkModeMobile(elem) {
    $(".faculty_selection").children(".selected").removeClass("selected");
    $(elem).addClass("selected");
    let colorBG = darkBool ? "#17062E" : "#EDEDED";
    let colorText = darkBool ? "#FFF" : "#000";
    $(".faculty_selection").children(":not(.selected)").css("background", colorBG);
    $(".faculty_selection").children(":not(.selected)").find(".fakultet_title_color").css("color", colorText);
    $(".faculty_selection").children(".selected").find(".fakultet_title_color").css("color", "#fff");
}

$(document).ready(function () {

  $(".faculty_of_web_programming").click(function () {

  //dark Mode function
      darkModeMobile(this);

      $(".faculty_of_web_programming").css({
      "display": "flex",
      "background": "linear-gradient(180deg, #FF6948 0%, #FEA03C 100%)"
    });
    $(".fakultet_title_color1").css("color", "#ffffff");
    $(".fakultet_title_color2").css("color", "#27BEA3");
    $(".fakultet_title_color3").css("color", "#6D28FE");

    $(".is_your_fakultet_of_web_programming").css("display", "block");
    $(".is_your_fakultet_of_programming").css("display", "none");
    $(".is_your_faculty_of_multimedia").css("display", "none");

    //  left menu
    $(".square").css({
      "background": "linear-gradient(250deg, #FF6948 20%, #FEA03C 80%)",
      "border-right":"3px solid #FF6948"
  });
    $(".triangle").css("border-left", "20px solid #FF6948");
  });

  $(".faculty_of_programming").click(function () {

//dark Mode function
      darkModeMobile(this);

      $(".faculty_of_programming").css({
      "display": "flex",
      "background": " linear-gradient(180deg, #1EB764 0%, #27BEA3 100%)"
    });
    $(".fakultet_title_color1").css("color", "#FF6948");
    $(".fakultet_title_color2").css("color", "#ffffff");
    $(".fakultet_title_color3").css("color", "#6D28FE");

    $(".is_your_fakultet_of_web_programming").css("display", "none");
    $(".is_your_fakultet_of_programming").css("display", "block");
    $(".is_your_faculty_of_multimedia").css("display", "none");

    $(".square").css({
      "background": "linear-gradient(250deg,  #1EB764 20%, #27BEA3 80%)",
      "border-right":"3px solid #1EB764"
  });
    $(".triangle").css("border-left", "20px solid #1EB764");
  });

  $(".faculty_of_multimedia").click(function () {

//dark Mode function
      darkModeMobile(this);

      $(".faculty_of_multimedia").css({
      "display": "flex",
      "background": "  linear-gradient(180deg, #CA7EEF 0%, #6D28FE 100%)"
    });
    $(".fakultet_title_color1").css("color", "#FF6948");
    $(".fakultet_title_color2").css("color", "#27BEA3");
    $(".fakultet_title_color3").css("color", "#ffffff");

    $(".is_your_fakultet_of_web_programming").css("display", "none");
    $(".is_your_fakultet_of_programming").css("display", "none");
    $(".is_your_faculty_of_multimedia").css("display", "block");

    $(".square").css({
      "background": "linear-gradient(250deg, #6D28FE 20%,  #CA7EEF 80%",
      "border-right": "3px solid #6D28FE"

    });
    $(".triangle").css("border-left", "20px solid #6D28FE");

  });


  $('.fakultet_number_information_button1').click(function () {

      //dark Mode function
      darkModeMobile(".faculty_of_web_programming");

    $(".fakultet_fakultets_about").css("display", "none");
    $(".faculty_selection_section").css("display", "flex");
    $(".faculty_of_web_programming").css({
      "display": "flex",
      "background": "linear-gradient(180deg, #FF6948 0%, #FEA03C 100%)"
    });

    $(".fakultet_title_color1").css("color", "#ffffff");
    $(".fakultet_title_color2").css("color", "#27BEA3");
    $(".fakultet_title_color3").css("color", "#6D28FE");

    $(".is_your_fakultet_of_web_programming").css("display", "block");
    $(".is_your_fakultet_of_programming").css("display", "none");
    $(".is_your_faculty_of_multimedia").css("display", "none");

    $(".square").css({
      "background": "linear-gradient(250deg, #FF6948 20%, #FEA03C 80%)",
      "border-right":"3px solid #FF6948"
    });
    $(".triangle").css("border-left", "20px solid #FF6948");
  });

  $(".fakultet_number_information_button3").click(function () {

      //dark Mode function
      darkModeMobile(".faculty_of_programming");

    $(".fakultet_fakultets_about").css("display", "none");
    $(".faculty_selection_section").css("display", "flex");
    $(".faculty_of_programming").css({
      "display": "flex",
      "background": " linear-gradient(180deg, #1EB764 0%, #27BEA3 100%)"
    });
    $(".fakultet_title_color1").css("color", "#FF6948");
    $(".fakultet_title_color2").css("color", "#ffffff");
    $(".fakultet_title_color3").css("color", "#6D28FE");

    $(".is_your_fakultet_of_web_programming").css("display", "none");
    $(".is_your_fakultet_of_programming").css("display", "block");
    $(".is_your_faculty_of_multimedia").css("display", "none");

    $(".square").css({
      "background": "linear-gradient(250deg,  #1EB764 20%, #27BEA3 80%)",
      "border-right":"3px solid #1EB764"
    });
    $(".triangle").css("border-left", "20px solid #1EB764");
  });


  $(".fakultet_number_information_button4").click(function () {

      //dark Mode function
      darkModeMobile(".faculty_of_multimedia");

    $(".fakultet_fakultets_about").css("display", "none");
    $(".faculty_selection_section").css("display", "flex");
    $(".faculty_of_multimedia").css({
      "display": "flex",
      "background": "  linear-gradient(180deg, #CA7EEF 0%, #6D28FE 100%)"
    });
    $(".fakultet_title_color1").css("color", "#FF6948");
    $(".fakultet_title_color2").css("color", "#27BEA3");
    $(".fakultet_title_color3").css("color", "#ffffff");

    $(".is_your_fakultet_of_web_programming").css("display", "none");
    $(".is_your_fakultet_of_programming").css("display", "none");
    $(".is_your_faculty_of_multimedia").css("display", "block");

    $(".square").css({
      "background": "linear-gradient(250deg, #6D28FE 20%,  #CA7EEF 80%",
      "border-right": "3px solid #6D28FE"
    });
    $(".triangle").css("border-left", "20px solid #6D28FE");
  });
});

$(".faculty_selection-left-menu").click(function () {
  $(".faculty_selection").toggle();

  //left-menu toggle x or >
  if ($(".faculty_selection").css('display') === 'none') {
      $(".left-menu img").attr("src", "imgs/mobile/icon1.svg");
  } else {
      $(".left-menu img").attr("src", "imgs/mobile/Union1.svg");
  }
});




