////////////search field///////////////////////

let button = document.getElementById('search-ico')
let input =  document.getElementById('search-field')
let srchpanel=document.querySelector('.search-panel')
let bool = true;
function anim(input){
  if( bool){
     input.style.width='18rem';
     input.style.opacity = '1';
     button.style.paddingLeft='.5rem'
    input.style.paddingLeft= '.4rem';
    input.style.paddingRight= '.4rem';
     srchpanel.style.width='18rem';
     srchpanel.style.color='#bfbfbf'
     srchpanel.style.background='#fff'
     input.focus();
     bool=false;
    }else{

      input.style.width='0';
       input.style.opacity = '0'
        button.style.paddingLeft='0'
      input.style.paddingLeft= '0';
      srchpanel.style.width='1.4rem'
      input.style.paddingRight= '0';
      srchpanel.style.color='#fff'
      srchpanel.style.background='none'
      input.blur();
      bool=true;
    }

}
if(button){
  button.addEventListener('click',function(){
  anim(input);
})
}
function  inputAnimOff(input){
  input.style.width='0';
       input.style.opacity = '0'
        button.style.paddingLeft='0'
      input.style.paddingLeft= '0';
      srchpanel.style.width='1.4rem'
      input.style.paddingRight= '0';
      srchpanel.style.color='#fff'
      srchpanel.style.background='none'
      input.blur();
      bool=true;
}

$(document).mouseup(function (e)
{
    var container = $('#search-field');
    var btn = $('#search-ico')


    if (!container.is(e.target) && !btn.is(e.target))
    {
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

armFlag.addEventListener('click',()=>{
  armFlag.style.order = '1';
  rusFlag.style.order = '2';
  engFlag.style.order = '3';
})

rusFlag.addEventListener('click',()=>{
  rusFlag.style.order = '1';
  armFlag.style.order = '2';
  engFlag.style.order = '3';
})

engFlag.addEventListener('click',()=>{
  engFlag.style.order = '1';
  armFlag.style.order = '2';
  rusFlag.style.order = '3';
})


let langBool = true;

langBtn.addEventListener('click',()=>{
  langAnim(langField);

})


function langAnim(item){
    if(  item.style.height=='1.6rem'){
    item.style.height='6rem';
    langBool = false;
    langRotate.style.transform='rotate(180deg)'

  }else{
    item.style.height='1.6rem';
    langBool = true;
    langRotate.style.transform='rotate(360deg)'
  }

}



$(document).mouseup(function (e)
{
    var container2 = $('#lang-changer');



    if (!container2.is(e.target) &&container2.has(e.target).length === 0)
    {
        langField.style.height='1.6rem';
        if( langRotate.style.transform==='rotate(180deg)'){
          langRotate.style.transform='rotate(360deg)'
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
const servicesSliderText=document.querySelectorAll('.wrap-slide-text');


//section1
const whiteText = document.querySelectorAll('.whiteText');
const section1CartBg = document.querySelectorAll('.section1CartBg');
const section1InputBg = document.querySelectorAll('.section1InputBg');
const section1ButtonBg = document.querySelector('.section1ButtonBg');

//section 3
const section3_card3 = document.querySelector(".section3_card3");
const darkcolor = document.querySelectorAll(".dark")
const darkbg = document.querySelectorAll(".darkbg")

//mobile header
const mobHead = document.querySelector('.mobile-header')
//section 2
const section2 = document.querySelector('.section2')
const section2Inputs = document.querySelectorAll('.section2-input')


let darkBool = false;

themeBtnRound.addEventListener('click',()=>{
section2.classList.toggle('dark-mode');
section2Inputs.forEach((item)=>item.classList.toggle('dark-mode'))
  if(themeBtnRound.style.right===''){
      darkBool=true;
      themeBtnRound.style.right='1.45rem';
      themeBtnRound.style.background='#fff';
      themeMainBtn.style.background='#0A0935';
      themeMainBtn.style.color='#fff';




      mainInner.style.background='#110022';
      servicesSliderBg.style.background='#000';
      servicesSliderBg.style.color = '#fff';
      facultiesSliderBg.style.background='#000';
      facultiesSliderBg.style.color = '#fff';

      //section1
      whiteText.forEach(item => item.style.color = "#fff");
      section1CartBg.forEach(item => {
        item.style.backgroundColor = "#2A0054"
        item.style.color='#fff'
      });

      section1InputBg.forEach(item => {
        item.style.backgroundColor = "#110022"
        item.style.color='#fff'
      });
      section1ButtonBg.style.borderColor = "#fff";

      servicesSliderText.forEach((item)=>{
          item.style.color='#fff'
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
    section3_card3.style.background = '#2A0054';

    ///mobile header
    mobHead.style.background='#110022'
    if (window.screen.width <= 450) {
    document.body.style.background = '#110022'
    section3_card3.style.background = '#110022'
      darkbg.forEach((item) => {
      item.style.background = '#110022'

    })

    }

  } else {
      themeBtnRound.style.right='';
      darkBool = false;
      themeBtnRound.style.background='#0A0935';
      themeMainBtn.style.background='#fff';
      themeMainBtn.style.color='#0A0935';



      mainInner.style.background='#fff';
      servicesSliderBg.style.background='#fff';
      servicesSliderBg.style.color = '#000';
      facultiesSliderBg.style.background='#fff';
      facultiesSliderBg.style.color = '#000';

      //section1
      whiteText.forEach(item => item.style.color = "#000");
      section1CartBg.forEach(item => {
        item.style.backgroundColor = "#fff"
        item.style.color='#000'
    });
      section1InputBg.forEach(item => {
        item.style.backgroundColor = "#fff"
        item.style.color='#000'
    });
      section1ButtonBg.style.borderColor = "#000";

      servicesSliderText.forEach((item)=>{
        item.style.color='#000'
      })

      //section 3
      darkbg.forEach((item) => {
      item.style.background = '#fff'
       })
      darkcolor.forEach(item => item.style.color = "#000");
      section3_card3.style.background = '#ffffff';
      darkbg.forEach((item) => {
      item.style.color = '#000'
    })

       ///mobile header
    mobHead.style.background='#fff'
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


  const nameInput1sec2 = document.querySelector('#input1');
  const divBackgr1sec2 = document.querySelector('.section2_iput_typeofactivity_input');
  const nameInput2sec2 = document.querySelector('#input2');
  const divBackgr2sec2 = document.querySelector('.section2_iput_typeofactivity_secton2_input');
  const nameInput3sec2 = document.querySelector('#input3');
  const divBackgr3sec2 = document.querySelector('.section2_iput_typeofactivity_section3_input');
  const nameInput4sec2 = document.querySelector('#input4');
  const divBackgr4sec2 = document.querySelector('.section2_iput_typeofactivity_i_have_a_website_input');


  nameInput1sec2.addEventListener('focus', () => {
    divBackgr1sec2.style.background ='linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'

  })
  nameInput1sec2.addEventListener('blur', () => {
    divBackgr1sec2.style.background = 'gray';
  })
  nameInput2sec2.addEventListener('focus', () => {
    divBackgr2sec2.style.background ='linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'

  })
  nameInput2sec2.addEventListener('blur', () => {
    divBackgr2sec2.style.background = 'gray';
  })
  nameInput3sec2.addEventListener('focus', () => {
    divBackgr3sec2.style.background ='linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'

  })
  nameInput3sec2.addEventListener('blur', () => {
    divBackgr3sec2.style.background = 'gray';
  })
  nameInput4sec2.addEventListener('focus', () => {
    divBackgr4sec2.style.background ='linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'

  })
  nameInput4sec2.addEventListener('blur', () => {
    divBackgr4sec2.style.background = 'gray';
  })


const nameInput = document.querySelector('.name-input');
const phoneInput = document.querySelector('.phone-input');
const nameInputBg = document.querySelector('.section1__freeAdvice-yourName');
const phoneInputbg = document.querySelector('.section1__freeAdvice-yourPhone');
const formInput1 = document.querySelector('.section1CartBg-one')
const formInput2= document.querySelector('.section1CartBg-two')
const formInput3 = document.querySelector('.section1CartBg-three')
const formInput4 = document.querySelector('.section1CartBg-four')
const formInputsBg1 = document.querySelector('.section1__apply-input_one')
const formInputsBg2 = document.querySelector('.section1__apply-input_two')
const formInputsBg3 = document.querySelector('.section1__apply-input_three')
const formInputsBg4 = document.querySelector('.section1__apply-input_four')

nameInput.addEventListener('focus',()=>{
  nameInputBg.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'
})
nameInput.addEventListener('blur',()=>{
  nameInputBg.style.background = '#939393'
})
phoneInput.addEventListener('focus',()=>{
  phoneInputbg.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'
})
phoneInput.addEventListener('blur',()=>{
  phoneInputbg.style.background = '#939393'
})


formInput1.addEventListener('focus',()=>{
  formInputsBg1.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'
})
formInput1.addEventListener('blur',()=>{
  formInputsBg1.style.background = '#939393'
})

formInput2.addEventListener('focus',()=>{
  formInputsBg2.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'
})
formInput2.addEventListener('blur',()=>{
  formInputsBg2.style.background = '#939393'
})


formInput3.addEventListener('focus',()=>{
  formInputsBg3.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'
})
formInput3.addEventListener('blur',()=>{
  formInputsBg3.style.background = '#939393'
})


formInput4.addEventListener('focus',()=>{
  formInputsBg4.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'
})
formInput4.addEventListener('blur',()=>{
  formInputsBg4.style.background = '#939393'
})


const formInput1Nat = document.querySelector('.section1CartBg-nat-one')
const formInput2Nat= document.querySelector('.section1CartBg-nat-two')
const formInput3Nat = document.querySelector('.section1CartBg-nat-three')
const formInput4Nat = document.querySelector('.section1CartBg-nat-four')
const formInputsBg1Nat = document.querySelector('.section1__apply-input_nat-one')
const formInputsBg2Nat = document.querySelector('.section1__apply-input_nat-two')
const formInputsBg3Nat = document.querySelector('.section1__apply-input_nat-three')
const formInputsBg4Nat = document.querySelector('.section1__apply-input_nat-four')



formInput1Nat.addEventListener('focus',()=>{
  formInputsBg1Nat.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'
})
formInput1Nat.addEventListener('blur',()=>{
  formInputsBg1Nat.style.background = '#939393'
})

formInput2Nat.addEventListener('focus',()=>{
  formInputsBg2Nat.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'
})
formInput2Nat.addEventListener('blur',()=>{
  formInputsBg2Nat.style.background = '#939393'
})


formInput3Nat.addEventListener('focus',()=>{
  formInputsBg3Nat.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'
})
formInput3Nat.addEventListener('blur',()=>{
  formInputsBg3Nat.style.background = '#939393'
})


formInput4Nat.addEventListener('focus',()=>{
  formInputsBg4Nat.style.background = 'linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'
})
formInput4Nat.addEventListener('blur',()=>{
  formInputsBg4Nat.style.background = '#939393'
})
///////////////////////////////////////////card profile change/////////////////////////////////
const naturalPersonBtn = document.querySelector("#naturalPersonBtn");
const legalPersonBtn = document.querySelector("#legalPersonBtn");
const natPerson = document.getElementById('naturalPersonCart')
const legPerson = document.getElementById('legalPersonCart')

naturalPersonBtn.addEventListener('click',()=>{
  natPerson.style.display = 'block'
  legPerson.style.display = 'none'
  naturalPersonBtn.style.backgroundColor = "#4200CE";
    naturalPersonBtn.style.color = "#fff";
    if(!darkBool){
          legalPersonBtn.style.backgroundColor = "#efefef";
    legalPersonBtn.style.color = "#000";
    legalPersonBtn.style.border = "1px solid #000";
  }else{
              legalPersonBtn.style.backgroundColor = "#110022";
    legalPersonBtn.style.color = "#ffffff";
    legalPersonBtn.style.border = "1px solid #ffffff";
  }

});

legalPersonBtn.addEventListener('click' , ()=>{
    natPerson.style.display = 'none'
  legPerson.style.display = 'block'

    legalPersonBtn.style.backgroundColor = "#4200CE";
    legalPersonBtn.style.color = "#fff";
        if(!darkBool){
          naturalPersonBtn.style.backgroundColor = "#efefef";
    naturalPersonBtn.style.color = "#000";
    naturalPersonBtn.style.border = "1px solid #000";
  }else{
              naturalPersonBtn.style.backgroundColor = "#110022";
    naturalPersonBtn.style.color = "#ffffff";
    naturalPersonBtn.style.border = "1px solid #ffffff";
  }
})


////////////////////////////////////////////mobile search field////////////////////////////////
let mobileButton = document.getElementById('mobile-search-ico')
let mobileInput =  document.getElementById('mobile-search-field')
let mobileSrchpanel=document.querySelector('.mobile-search-panel')
let mobileBool = true;
function mobileAnim(input){
  if( mobileBool){
     input.style.width='25rem';
     input.style.opacity = '1';
     mobileButton.style.paddingLeft='.5rem'
    input.style.paddingLeft= '.4rem';
    input.style.paddingRight= '.4rem';
     mobileSrchpanel.style.width='30rem';
     mobileSrchpanel.style.color='#bfbfbf'
     mobileSrchpanel.style.background='#fff'
     input.focus();
     mobileBool=false;
    }else{

      input.style.width='0';
       input.style.opacity = '0'
       mobileButton.style.paddingLeft='0'
      input.style.paddingLeft= '0';
      mobileSrchpanel.style.width='4.5rem'
      input.style.paddingRight= '0';
      mobileSrchpanel.style.color='#fff'
      mobileSrchpanel.style.background='none'
      input.blur();
      mobileBool=true;
    }

}
if(mobileButton){
  mobileButton.addEventListener('click',function(){
  mobileAnim(mobileInput);
})
}
function  mobileInputAnimOff(input){
  input.style.width='0';
       input.style.opacity = '0'
        mobileButton.style.paddingLeft='0'
      input.style.paddingLeft= '0';
      mobileSrchpanel.style.width='4.5rem'
      input.style.paddingRight= '0';
      mobileSrchpanel.style.color='#fff'
      mobileSrchpanel.style.background='none'
      input.blur();
      mobileBool=true;
}

$(document).mouseup(function (e)
{
    var mobContainer = $('#search-field');
    var mobBtn = $('#search-ico')


    if (!mobContainer.is(e.target) && !mobBtn.is(e.target))
    {
        mobileInputAnimOff(mobileInput);
    }
});

///////////////////////////////////mobile-menu-btn//////////////////////////////////////

document.querySelector('.menu-icon-wrapper').onclick = function(){
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
    if(screen.width <=425){
         document.querySelector('.mobile-menu-slider').classList.toggle('mobile-menu-slider-active');
    }

}


/////////////////////////section 3 //////////////////////////////////////////

  const nameInput3 = document.querySelector('#input_name3');
  const divBackgr3 = document.querySelector('.section3_what_do_i_want_input');
  const nameInput4 = document.querySelector('#input_name4');
  const divBackgr4 = document.querySelector('.section3_mobail_input');
  const nameInput5 = document.querySelector('#input_name5');
  const divBackgr5 = document.querySelector('.section3_domen_input');
  const nameInput6 = document.querySelector('#input_name6');
  const divBackgr6 = document.querySelector('.section3_preferred_design_input_1');
  const nameInput7 = document.querySelector('#input_name7');
  const divBackgr7 = document.querySelector('.section3_preferred_design_input_2');


  nameInput3.addEventListener('focus', () => {
    divBackgr3.style.background ='linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'

  })
  nameInput3.addEventListener('blur', () => {
    divBackgr3.style.background = 'gray';
  })
  nameInput4.addEventListener('focus', () => {
    divBackgr4.style.background ='linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'

  })
  nameInput4.addEventListener('blur', () => {
    divBackgr4.style.background = 'gray';
  })
  nameInput5.addEventListener('focus', () => {
    divBackgr5.style.background ='linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'

  })
  nameInput5.addEventListener('blur', () => {
    divBackgr5.style.background = 'gray';
  })

  nameInput6.addEventListener('focus', () => {
    divBackgr6.style.background ='linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'
  })
  nameInput6.addEventListener('blur', () => {
    divBackgr6.style.background = 'gray';
  })

  nameInput7.addEventListener('focus', () => {
    divBackgr7.style.background ='linear-gradient(to right, #ff4e39, #1e7cff, #2cfff2)'

  })
  nameInput7.addEventListener('blur', () => {
    divBackgr7.style.background = 'gray';
  })


  $(document).ready(function(){
    $(".section3_type_choice1").click(function(){
      $(".section3_type_your_choice1").css("display","block");
      $(".section3_type_your_choice2").css("display","none");
      $(".section3_type_your_choice3").css("display","none");
      $(".section3_type_your_choice4").css("display","none");
      $(".section3_type_your_choice5").css("display","none");
      $(".section3_type_your_choice6").css("display","none");
  });
  $(".section3_type_choice2").click(function(){
    $(".section3_type_your_choice1").css("display","none");
    $(".section3_type_your_choice2").css("display","block");
    $(".section3_type_your_choice3").css("display","none");
    $(".section3_type_your_choice4").css("display","none");
    $(".section3_type_your_choice5").css("display","none");
    $(".section3_type_your_choice6").css("display","none");
});
$(".section3_type_choice3").click(function(){
  $(".section3_type_your_choice1").css("display","none");
  $(".section3_type_your_choice2").css("display","none");
  $(".section3_type_your_choice3").css("display","block");
  $(".section3_type_your_choice4").css("display","none");
  $(".section3_type_your_choice5").css("display","none");
  $(".section3_type_your_choice6").css("display","none");
});
$(".section3_type_choice4").click(function(){
  $(".section3_type_your_choice1").css("display","none");
  $(".section3_type_your_choice2").css("display","none");
  $(".section3_type_your_choice3").css("display","none");
  $(".section3_type_your_choice4").css("display","block");
  $(".section3_type_your_choice5").css("display","none");
  $(".section3_type_your_choice6").css("display","none");
});
$(".section3_type_choice5").click(function(){
  $(".section3_type_your_choice1").css("display","none");
  $(".section3_type_your_choice2").css("display","none");
  $(".section3_type_your_choice3").css("display","none");
  $(".section3_type_your_choice4").css("display","none");
  $(".section3_type_your_choice5").css("display","block");
  $(".section3_type_your_choice6").css("display","none");
});
$(".section3_type_choice6").click(function(){
  $(".section3_type_your_choice1").css("display","none");
  $(".section3_type_your_choice2").css("display","none");
  $(".section3_type_your_choice3").css("display","none");
  $(".section3_type_your_choice4").css("display","none");
  $(".section3_type_your_choice5").css("display","none");
  $(".section3_type_your_choice6").css("display","block");
});
$(".apply_as_buttone1").click(function(){
  $(".apply_as_buttone1").css("background","#4200CF");
  $(".apply_as_buttone1").css("color","#ffffff");
  $(".apply_as_buttone2").css("background","#ffffff");
  $(".apply_as_buttone2").css("color","#000000");
});
$(".apply_as_buttone2").click(function(){
  $(".apply_as_buttone2").css("background","#4200CF");
  $(".apply_as_buttone2").css("color","#ffffff");
  $(".apply_as_buttone1").css("background","#ffffff");
  $(".apply_as_buttone1").css("color","#000000");
});
$(".section3_language_choice").click(function(){
  $(".dropdawn_lengvich").toggle();
})
 });
