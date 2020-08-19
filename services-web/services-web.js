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

/////////////////////dark mobile button///////////////////////////
const mobileThemeBtnRound = document.querySelector('.mobile-theme-round-btn');
const mobileThemeMainBtn = document.querySelector('.mobile-theme-main-btn');

////////////////////////dark theme button///////////////////
const servicesSliderBg = document.querySelector('.services-wrap-slide');
const facultiesSliderBg = document.querySelector('.faculties-wrap-slide');
const themeBtnRound = document.querySelector('.theme-round-btn');
const themeMainBtn = document.querySelector('.theme-main-btn');
const mainInner = document.querySelector('.main-inner');
const servicesSliderText = document.querySelectorAll('.wrap-slide-text');


//section1
const whiteText = document.querySelectorAll('.whiteText');
const section1CartBg = document.querySelectorAll('.section1CartBg');
const section1InputBg = document.querySelectorAll('.section1InputBg');
const section1ButtonBg = document.querySelector('.section1ButtonBg');
const sec1InputBg = document.querySelectorAll('.sec1-input-bg')

//section 3
const section3_card3 = document.querySelectorAll(".section3_card3");
const darkcolor = document.querySelectorAll(".dark")
const darkbg = document.querySelectorAll(".darkbg")

//mobile header
const mobHead = document.querySelector('.mobile-header')
//section 2
const section2 = document.querySelector('.section2')
const section2Inputs = document.querySelectorAll('.section2-input')
const section2Nat = document.querySelector('.section2-nat')

let darkBool = false;

themeBtnRound.addEventListener('click', () => {
  section2.classList.toggle('dark-mode');


  section2Nat.classList.toggle('dark-mode');
  sec1InputBg.forEach((item) => item.classList.toggle('dark-mode'))
  section2Inputs.forEach((item) => item.classList.toggle('dark-mode'))
  if (themeBtnRound.style.right === '') {
    darkBool = true;
    themeBtnRound.style.right = '1.45rem';
    themeBtnRound.style.background = '#fff';
    themeMainBtn.style.background = '#0A0935';
    themeMainBtn.style.color = '#fff';




    mainInner.style.background = '#110022';
    servicesSliderBg.style.background = '#000';
    servicesSliderBg.style.color = '#fff';
    facultiesSliderBg.style.background = '#000';
    facultiesSliderBg.style.color = '#fff';

    //section1
    whiteText.forEach(item => item.style.color = "#fff");
    section1CartBg.forEach(item => {
      item.style.backgroundColor = "#2A0054"
      item.style.color = '#fff'
    });

    section1InputBg.forEach(item => {
      item.style.backgroundColor = "#110022"
      item.style.color = '#fff'
    });
    section1ButtonBg.style.borderColor = "#fff";

    servicesSliderText.forEach((item) => {
      item.style.color = '#fff'
    })

    ///section 3
    darkcolor.forEach((item) => {
      item.style.color = '#fff'
    })
    darkbg.forEach((item) => {
      item.style.background = 'rgb(42, 0, 84)'
    })
    darkbg.forEach((item) => {
      item.style.color = '#fff'
    })
    section3_card3.forEach(item => item.style.background = '#2A0054');

    ///mobile header
    mobHead.style.background = '#110022'
    if (window.screen.width <= 450) {
      document.body.style.background = '#110022'
      section3_card3.forEach(item => item.style.background = '#110022');
      darkbg.forEach((item) => {
        item.style.background = '#110022'

      })

    }

  } else {
    themeBtnRound.style.right = '';
    darkBool = false;
    themeBtnRound.style.background = '#0A0935';
    themeMainBtn.style.background = '#fff';
    themeMainBtn.style.color = '#0A0935';



    mainInner.style.background = '#fff';
    servicesSliderBg.style.background = '#fff';
    servicesSliderBg.style.color = '#000';
    facultiesSliderBg.style.background = '#fff';
    facultiesSliderBg.style.color = '#000';

    //section1
    whiteText.forEach(item => item.style.color = "#000");
    section1CartBg.forEach(item => {
      item.style.backgroundColor = "#fff"
      item.style.color = '#000'
    });
    section1InputBg.forEach(item => {
      item.style.backgroundColor = "#fff"
      item.style.color = '#000'
    });
    section1ButtonBg.style.borderColor = "#000";

    servicesSliderText.forEach((item) => {
      item.style.color = '#000'
    })

    //section 3
    darkbg.forEach((item) => {
      item.style.background = '#fff'
    })
    darkcolor.forEach(item => item.style.color = "#000");
    section3_card3.forEach(item => item.style.background = '#ffffff');
    darkbg.forEach((item) => {
      item.style.color = '#000'
    })

    ///mobile header
    mobHead.style.background = '#fff'
    if (window.screen.width <= 450) {
      document.body.style.background = '#fff'
    }

  }
});







//////////////////////////mobile dark button
//   const testItem = document.getElementById('mobile-test-btn')
//   const mobileMenutest = document.querySelector('.mobile-header')
//   const headerT = document.querySelector('.header')
// if(screen.width<=450){
// headerT.removeChild(testItem)
//   mobileMenutest.appendChild(testItem)
// }else{

// headerT.appendChild(testItem)
// }








//natural & legal Person


//////////////////////////inputs border gradient//////////////////////////////
const nameInput1sec2leg = document.querySelector('#input1-leg');
const divBackgr1sec2leg = document.querySelector('.section2_iput_typeofactivity_input-leg');
const nameInput2sec2leg = document.querySelector('#input2-leg');
const divBackgr2sec2leg = document.querySelector('.section2_iput_typeofactivity_secton2_input-leg');
const nameInput3sec2leg = document.querySelector('#input3-leg');
const divBackgr3sec2leg = document.querySelector('.section2_iput_typeofactivity_section3_input-leg');
const nameInput4sec2leg = document.querySelector('#input4-leg');
const divBackgr4sec2leg = document.querySelector('.section2_iput_typeofactivity_i_have_a_website_input-leg');
const companyAdress = document.querySelector('#section2-input9');
const companyAdressBg = document.querySelector('#section2-input9-bg');
const bossName = document.querySelector('#section2-input10-name');
const bossNameBg = document.querySelector('#section2-input10-name-bg');
const bossSurename = document.querySelector('#section2-input10-surename');
const bossSurenameBg = document.querySelector('#section2-input10-surename-bg');
const bossPhone = document.querySelector('#section2-input10-phone');
const bossPhoneBg = document.querySelector('#section2-input10-phone-bg');
const bossMail = document.querySelector('#section2-input10-mail');
const bossMailBg = document.querySelector('#section2-input10-mail-bg');

nameInput1sec2leg.addEventListener('focus', () => {
  divBackgr1sec2leg.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'

})
nameInput1sec2leg.addEventListener('blur', () => {
  divBackgr1sec2leg.style.background = 'gray';
})
nameInput2sec2leg.addEventListener('focus', () => {
  divBackgr2sec2leg.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'

})
nameInput2sec2leg.addEventListener('blur', () => {
  divBackgr2sec2leg.style.background = 'gray';
})
nameInput3sec2leg.addEventListener('focus', () => {
  divBackgr3sec2leg.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'

})
nameInput3sec2leg.addEventListener('blur', () => {
  divBackgr3sec2leg.style.background = 'gray';
})
nameInput4sec2leg.addEventListener('focus', () => {
  divBackgr4sec2leg.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'

})
nameInput4sec2leg.addEventListener('blur', () => {
  divBackgr4sec2leg.style.background = 'gray';
})
/////////////////////////////////////
bossName.addEventListener('focus', () => {
  bossNameBg.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'

})
bossName.addEventListener('blur', () => {
  bossNameBg.style.background = 'gray';
})
/////////////////////////////////////////
companyAdress.addEventListener('focus', () => {
  companyAdressBg.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'

})
companyAdress.addEventListener('blur', () => {
  companyAdressBg.style.background = 'gray';
})
/////////////////////////////////////////
bossSurename.addEventListener('focus', () => {
  bossSurenameBg.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'

})
bossSurename.addEventListener('blur', () => {
  bossSurenameBg.style.background = 'gray';
})
/////////////////////////////////////////
bossPhone.addEventListener('focus', () => {
  bossPhoneBg.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'

})
bossPhone.addEventListener('blur', () => {
  bossPhoneBg.style.background = 'gray';
})
/////////////////////////////////////////
bossMail.addEventListener('focus', () => {
  bossMailBg.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'

})
bossMail.addEventListener('blur', () => {
  bossMailBg.style.background = 'gray';
})
/////////////////////////////////////////









const nameInput1sec2 = document.querySelector('#input1');
const divBackgr1sec2 = document.querySelector('.section2_iput_typeofactivity_input.nat');
const nameInput2sec2 = document.querySelector('#input2');
const divBackgr2sec2 = document.querySelector('.section2_iput_typeofactivity_secton2_input.nat');
const nameInput3sec2 = document.querySelector('#input3');
const divBackgr3sec2 = document.querySelector('.section2_iput_typeofactivity_section3_input.nat');
const nameInput4sec2 = document.querySelector('#input4');
const divBackgr4sec2 = document.querySelector('.section2_iput_typeofactivity_i_have_a_website_input.nat');


nameInput1sec2.addEventListener('focus', () => {
  console.log("pxk")
  console.log(divBackgr1sec2)
  divBackgr1sec2.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'

})
nameInput1sec2.addEventListener('blur', () => {
  divBackgr1sec2.style.background = 'gray';
})
nameInput2sec2.addEventListener('focus', () => {
  divBackgr2sec2.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'

})
nameInput2sec2.addEventListener('blur', () => {
  divBackgr2sec2.style.background = 'gray';
})
nameInput3sec2.addEventListener('focus', () => {
  divBackgr3sec2.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'

})
nameInput3sec2.addEventListener('blur', () => {
  divBackgr3sec2.style.background = 'gray';
})
nameInput4sec2.addEventListener('focus', () => {
  divBackgr4sec2.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'

})
nameInput4sec2.addEventListener('blur', () => {
  divBackgr4sec2.style.background = 'gray';
})


// const nameInput = document.querySelector('.name-input');
// const phoneInput = document.querySelector('.phone-input');
// const nameInputBg = document.querySelector('.section1__freeAdvice-yourName');
// const phoneInputbg = document.querySelector('.section1__freeAdvice-yourPhone');
const formInput1 = document.querySelector('.section1CartBg-one')
const formInput2 = document.querySelector('.section1CartBg-two')
const formInput3 = document.querySelector('.section1CartBg-three')
const formInput4 = document.querySelector('.section1CartBg-four')
const formInputsBg1 = document.querySelector('.section1__apply-input_one')
const formInputsBg2 = document.querySelector('.section1__apply-input_two')
const formInputsBg3 = document.querySelector('.section1__apply-input_three')
const formInputsBg4 = document.querySelector('.section1__apply-input_four')

// nameInput.addEventListener('focus',()=>{
//   nameInputBg.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'
// })
// nameInput.addEventListener('blur',()=>{
//   nameInputBg.style.background = '#939393'
// })
// phoneInput.addEventListener('focus',()=>{
//   phoneInputbg.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'
// })
// phoneInput.addEventListener('blur',()=>{
//   phoneInputbg.style.background = '#939393'
// })


formInput1.addEventListener('focus', () => {
  formInputsBg1.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'
})
formInput1.addEventListener('blur', () => {
  formInputsBg1.style.background = '#939393'
})

formInput2.addEventListener('focus', () => {
  formInputsBg2.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'
})
formInput2.addEventListener('blur', () => {
  formInputsBg2.style.background = '#939393'
})


formInput3.addEventListener('focus', () => {
  formInputsBg3.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'
})
formInput3.addEventListener('blur', () => {
  formInputsBg3.style.background = '#939393'
})


formInput4.addEventListener('focus', () => {
  formInputsBg4.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'
})
formInput4.addEventListener('blur', () => {
  formInputsBg4.style.background = '#939393'
})


const formInput1Nat = document.querySelector('.section1CartBg-nat-one')
const formInput2Nat = document.querySelector('.section1CartBg-nat-two')
const formInput3Nat = document.querySelector('.section1CartBg-nat-three')
const formInput4Nat = document.querySelector('.section1CartBg-nat-four')
const formInputsBg1Nat = document.querySelector('.section1__apply-input_nat-one')
const formInputsBg2Nat = document.querySelector('.section1__apply-input_nat-two')
const formInputsBg3Nat = document.querySelector('.section1__apply-input_nat-three')
const formInputsBg4Nat = document.querySelector('.section1__apply-input_nat-four')



formInput1Nat.addEventListener('focus', () => {
  formInputsBg1Nat.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'
})
formInput1Nat.addEventListener('blur', () => {
  formInputsBg1Nat.style.background = '#939393'
})

formInput2Nat.addEventListener('focus', () => {
  formInputsBg2Nat.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'
})
formInput2Nat.addEventListener('blur', () => {
  formInputsBg2Nat.style.background = '#939393'
})


formInput3Nat.addEventListener('focus', () => {
  formInputsBg3Nat.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'
})
formInput3Nat.addEventListener('blur', () => {
  formInputsBg3Nat.style.background = '#939393'
})


formInput4Nat.addEventListener('focus', () => {
  formInputsBg4Nat.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'
})
formInput4Nat.addEventListener('blur', () => {
  formInputsBg4Nat.style.background = '#939393'
})
///////////////////////////////////////////card profile change/////////////////////////////////



const legform = document.getElementById('legalRegForm')
const natform = document.getElementById('naturalRegForm')
const page1 = document.querySelector('#naturalPersonCart')
const page1leg = document.querySelector('#legalPersonCart')
const page2 = document.querySelector('.section2-nat')
const page2leg = document.querySelector('.section2')
const page3 = document.querySelector('.section3_card3.natural')
const page3leg = document.querySelector('.section3_card3.legal')

const naturalPersonBtn = document.querySelector("#naturalPersonBtn");
const legalPersonBtn = document.querySelector("#legalPersonBtn");
const natPerson = document.getElementById('naturalPersonCart')
const legPerson = document.getElementById('legalPersonCart')

naturalPersonBtn.addEventListener('click', () => {
  if (legform.style.display === 'none') return false;
  legform.style.display = 'none';
  page1leg.style.display = 'flex'
  page2leg.style.display = 'none'
  page3leg.style.display = 'none'
  natform.style.display = 'block';
  natPerson.style.display = 'block'
  legPerson.style.display = 'none'
  naturalPersonBtn.style.backgroundColor = "#4200CE";
  naturalPersonBtn.style.color = "#fff";
  if (!darkBool) {
    legalPersonBtn.style.backgroundColor = "#efefef";
    legalPersonBtn.style.color = "#000";
    legalPersonBtn.style.border = "1px solid #000";
  } else {
    legalPersonBtn.style.backgroundColor = "#110022";
    legalPersonBtn.style.color = "#ffffff";
    legalPersonBtn.style.border = "1px solid #ffffff";
  }

});

legalPersonBtn.addEventListener('click', () => {
  if (natform.style.display === 'none') return false;
  natform.style.display = 'none'
  page1.style.display = 'flex'
  page2.style.display = 'none'
  page3.style.display = 'none'
  legform.style.display = 'block'
  natPerson.style.display = 'none'
  legPerson.style.display = 'block'

  legalPersonBtn.style.backgroundColor = "#4200CE";
  legalPersonBtn.style.color = "#fff";
  if (!darkBool) {
    naturalPersonBtn.style.backgroundColor = "#efefef";
    naturalPersonBtn.style.color = "#000";
    naturalPersonBtn.style.border = "1px solid #000";
  } else {
    naturalPersonBtn.style.backgroundColor = "#110022";
    naturalPersonBtn.style.color = "#ffffff";
    naturalPersonBtn.style.border = "1px solid #ffffff";
  }
})


////////////////////////////////////////////mobile search field////////////////////////////////
let mobileButton = document.getElementById('mobile-search-ico')
let mobileInput = document.getElementById('mobile-search-field')
let mobileSrchpanel = document.querySelector('.mobile-search-panel')
let mobileBool = true;
function mobileAnim(input) {
  if (mobileBool) {
    input.style.width = '25rem';
    input.style.opacity = '1';
    mobileButton.style.paddingLeft = '.5rem'
    input.style.paddingLeft = '.4rem';
    input.style.paddingRight = '.4rem';
    mobileSrchpanel.style.width = '30rem';
    mobileSrchpanel.style.color = '#bfbfbf'
    mobileSrchpanel.style.background = '#fff'
    input.focus();
    mobileBool = false;
  } else {

    input.style.width = '0';
    input.style.opacity = '0'
    mobileButton.style.paddingLeft = '0'
    input.style.paddingLeft = '0';
    mobileSrchpanel.style.width = '4.5rem'
    input.style.paddingRight = '0';
    mobileSrchpanel.style.color = '#fff'
    mobileSrchpanel.style.background = 'none'
    input.blur();
    mobileBool = true;
  }

}
if (mobileButton) {
  mobileButton.addEventListener('click', function () {
    mobileAnim(mobileInput);
  })
}
function mobileInputAnimOff(input) {
  input.style.width = '0';
  input.style.opacity = '0'
  mobileButton.style.paddingLeft = '0'
  input.style.paddingLeft = '0';
  mobileSrchpanel.style.width = '4.5rem'
  input.style.paddingRight = '0';
  mobileSrchpanel.style.color = '#fff'
  mobileSrchpanel.style.background = 'none'
  input.blur();
  mobileBool = true;
}

$(document).mouseup(function (e) {
  var mobContainer = $('#search-field');
  var mobBtn = $('#search-ico')


  if (!mobContainer.is(e.target) && !mobBtn.is(e.target)) {
    mobileInputAnimOff(mobileInput);
  }
});

///////////////////////////////////mobile-menu-btn//////////////////////////////////////

document.querySelector('.menu-icon-wrapper').onclick = function () {
  document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
  if (screen.width <= 425) {
    document.querySelector('.mobile-menu-slider').classList.toggle('mobile-menu-slider-active');
  }

}


/////////////////////////section 3 //////////////////////////////////////////

const nameInput3 = document.querySelectorAll('#input_name3');
const divBackgr3 = document.querySelectorAll('.section3_what_do_i_want_input');
const nameInput4 = document.querySelectorAll('#input_name4');
const divBackgr4 = document.querySelectorAll('.section3_mobail_input');
const nameInput5 = document.querySelectorAll('#input_name5');
const divBackgr5 = document.querySelectorAll('.section3_domen_input');
const nameInput6 = document.querySelectorAll('#input_name6');
const divBackgr6 = document.querySelectorAll('.section3_preferred_design_input_1');
const nameInput7 = document.querySelectorAll('#input_name7');
const divBackgr7 = document.querySelectorAll('.section3_preferred_design_input_2');


nameInput3.forEach((item, index) => item.addEventListener('focus', () => {
  divBackgr3[index].style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'
}))
nameInput3.forEach((item, index) => item.addEventListener('blur', () => {
  divBackgr3[index].style.background = 'gray';
}))
nameInput4.forEach((item, index) => item.addEventListener('focus', () => {
  divBackgr4[index].style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'
}))
nameInput4.forEach((item, index) => item.addEventListener('blur', () => {
  divBackgr4[index].style.background = 'gray';
}))
nameInput5.forEach((item, index) => item.addEventListener('focus', () => {
  divBackgr5[index].style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'
}))
nameInput5.forEach((item, index) => item.addEventListener('blur', () => {
  divBackgr5[index].style.background = 'gray';
}))

nameInput6.forEach((item, index) => item.addEventListener('focus', () => {
  divBackgr6[index].style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'
}))
nameInput6.forEach((item, index) => item.addEventListener('blur', () => {
  divBackgr6[index].style.background = 'gray';
}))

nameInput7.forEach((item, index) => item.addEventListener('focus', () => {
  divBackgr7[index].style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'
}))
nameInput7.forEach((item, index) => item.addEventListener('blur', () => {
  divBackgr7[index].style.background = 'gray';
}))

const section3_type_choices = document.querySelectorAll(".section3_type_choice");

$(document).ready(function () {
  section3_type_choices.forEach(item => {
    item.addEventListener('click', (e) => {
      section3_type_choices.forEach(item => item.querySelector('.section3_type_your_choice').style.display = 'none')
      e.currentTarget.querySelector('.section3_type_your_choice').style.display = 'block';
    })
  })
  $(".apply_as_buttone1").click(function () {
    $(".apply_as_buttone1").css("background", "#4200CF");
    $(".apply_as_buttone1").css("color", "#ffffff");
    $(".apply_as_buttone2").css("background", "#ffffff");
    $(".apply_as_buttone2").css("color", "#000000");
  });
  $(".apply_as_buttone2").click(function () {
    $(".apply_as_buttone2").css("background", "#4200CF");
    $(".apply_as_buttone2").css("color", "#ffffff");
    $(".apply_as_buttone1").css("background", "#ffffff");
    $(".apply_as_buttone1").css("color", "#000000");
  });
});


///////////////////////////////turn
const sec1_nat_name = document.getElementById('section1_nat_name')
const sec1_nat_surename = document.getElementById('section1_nat_surename')
const sec1_nat_phone = document.getElementById('section1_nat_phone')
const sec1_nat_mail = document.getElementById('section1_nat_mail')
const sec1_leg_name = document.getElementById('section1_leg_name')
const sec1_leg_phone = document.getElementById('section1_leg_phone')
const sec1_leg_mail = document.getElementById('section1_leg_mail')
const sec1_leg_comp = document.getElementById('section1_leg_comp')

//section 2 inputs ////////////

const sec2_name = document.getElementById('input1')
const sec2_brandName = document.getElementById('input1')

const sec2_leg_name = document.getElementById('input1-leg')
const sec2_leg_brandName = document.getElementById('input2-leg')
const sec2_leg_adress = document.getElementById('section2-input9')
const sec2_leg_bossName = document.getElementById('section2-input10-name')
const sec2_leg_bossSureName = document.getElementById('section2-input10-surename')
const sec2_leg_bossPhone = document.getElementById('section2-input10-phone')
const sec2_leg_bossMail = document.getElementById('section2-input10-mail')


let changeble1 = document.querySelector('.changebleText1')
let changeble2 = document.querySelector('.changebleText2')
let changeble3 = document.querySelector('.changebleText3')
let changeble4 = document.querySelector('.changebleText4')
let changeble5 = document.querySelector('.changebleText5')
let changeble6 = document.querySelector('.changebleText6')



const nextButton1 = document.getElementById('button-next_1-nat')
const nextButton1leg = document.getElementById('button-next_1-legal')
const nextButton2 = document.getElementById('button-next_2')
const nextButton2leg = document.getElementById('button-next_2-leg')
const backButton2 = document.getElementById('button-back_2')
const backButton2leg = document.getElementById('button-back_2-leg')
const backButton3 = document.getElementById('button-back_3')
const backButton3leg = document.getElementById('button-back_3-leg')



nextButton1.addEventListener('click', () => {
  page1.style.display = 'none'
  page2.style.display = 'flex'
  page3.style.display = 'none'
  legform.style.display = 'none';
})

nextButton1leg.addEventListener('click', () => {
  page1leg.style.display = 'none'
  page2leg.style.display = 'flex'
  page3leg.style.display = 'none'
  natform.style.display = 'none'
})


nextButton2.addEventListener('click', () => {
  page1.style.display = 'none'
  page2.style.display = 'none'
  page3.style.display = 'block'
  legform.style.display = 'none';
})
nextButton2leg.addEventListener('click', () => {
  page1leg.style.display = 'none'
  page2leg.style.display = 'none'
  page3leg.style.display = 'block'
  natform.style.display = 'none';
})

backButton2leg.addEventListener('click', () => {
  page1leg.style.display = 'block'
  page2leg.style.display = 'none'
  page3leg.style.display = 'none'
  natform.style.display = 'none';
})

backButton2.addEventListener('click', () => {
  page1.style.display = 'block'
  page2.style.display = 'none'
  page3.style.display = 'none'
  legform.style.display = 'none';
})

backButton3leg.addEventListener('click', () => {
  page1leg.style.display = 'none'
  page2leg.style.display = 'block'
  page3leg.style.display = 'none'
  natform.style.display = 'none';
})

backButton3.addEventListener('click', () => {
  page1.style.display = 'none'
  page2.style.display = 'block'
  page3.style.display = 'none'
  legform.style.display = 'none';
})





///////////////////////lang dropdown
const langChooseBtn = document.querySelectorAll('.section3_language_choice');
const langDropdown = document.querySelectorAll('.laguage-dropdown');
const counter = document.querySelector('.counter')
const langContainer = document.querySelector('.selected-languages-container')

langChooseBtn.forEach((item, index) => item.addEventListener('click', () => {
  langDropdown[index].classList.toggle('lang-dropdown-active')
}));

const [arm1, arm2] = document.querySelectorAll('#arm');
const [rus1, rus2] = document.querySelectorAll('#rus');
const [eng1, eng2] = document.querySelectorAll('#eng');
const [fra1, fra2] = document.querySelectorAll('#fra');
const [germ1, germ2] = document.querySelectorAll('#germ');
const [dutch1, dutch2] = document.querySelectorAll('#dutch');
const [spain1, spain2] = document.querySelectorAll('#spain');
const [ital1, ital2] = document.querySelectorAll('#ital');
const [arab1, arab2] = document.querySelectorAll('#arab');
const [slav1, slav2] = document.querySelectorAll('#slav');
const [czech1, czech2] = document.querySelectorAll('#czech');



let idGenerator = 0;
const langArr = [arm1, arm2, rus1, rus2, eng1, eng2, fra1, fra2, germ1, germ2, dutch1, dutch2, spain1, spain2, ital1, ital2, arab1, arab2, slav1, slav2, czech1, czech2];
const choosedArrs = [new Set(), new Set()];
const checkArrsLang = [[], []];
langArr.map((item, i) => {

  item.addEventListener('click', () => {
    let choosedArr;
    let checkArrLang;

    if (legform.style.display === "" || legform.style.display === "block") {
      choosedArr = choosedArrs[0];
      checkArrLang = checkArrsLang[0];
    } else {
      choosedArr = choosedArrs[1];
      checkArrLang = checkArrsLang[1];
    }
    choosedArr.add(item)
    item.parentNode.nextElementSibling.innerHTML = choosedArr.size.toString()
    let newElem = document.createElement('div')
    newElem.classList.add('selected-language')
    newElem.innerHTML = `${item.innerHTML}` + `<i class='fa fa-times' aria-hidden='true'></i>`
    if (checkArrLang.length < choosedArr.size) {
      newElem.id = `lang${idGenerator++}`

      checkArrLang.push(newElem);
      item.parentNode.nextElementSibling.nextElementSibling.appendChild(newElem);
      counter.innerHTML = checkArrLang.length

      newElem.addEventListener('click', () => {
        console.log('click')
        newElem.style.display = 'none'
        let index = checkArrLang.indexOf(newElem)
        checkArrLang.splice(index, 1)
        console.log(checkArrLang)
        counter.innerHTML = checkArrLang.length

      })

    }
  })
})


let testElement = document.getElementById('lang0')
if (testElement) {
  testElement.addEventListener('click', () => {
    console.log('cklick')
    testElement.style.display = 'none'
  })
}



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