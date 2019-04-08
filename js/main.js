console.log('hello');

// Flicker on load effect ============= //
function flicker(elm, direction) {
  if (direction === 'out') {
    elm.addClass('hide');
  } else if (direction === 'in') {
    elm.removeClass('hide');
    elm.fadeOut(100);
    elm.fadeIn(400);
  }
}

// Home =============== //

// Profile Picture
setTimeout(fixImage, 1500); // wait with m3 on page load

function fixImage() {
  // m3 on page load, bring it to m2
  $('#me').attr('src',`img/m2.png`);
  setInterval(distortImage, 1000); // cycle m2 and m1
}
function distortImage() {
  let pic = Math.round(Math.random())+1;
  $('#me').attr('src',`img/m${pic}.png`);
}

// About ============================== //


// Projects Carousel ================== //
let imgCounter = 1;

// $('#next').on('click', nextImage);
// $('#previous').on('click', prevImage);

function nextImage() {
  flicker($(`#p${imgCounter}`), 'out');
  (imgCounter >= 5 ) ? imgCounter = 1 : imgCounter++;
  flicker($(`#p${imgCounter}`),'in');
}
function prevImage() {
  flicker($(`#p${imgCounter}`), 'out');
  (imgCounter <= 1 ) ? imgCounter = 5 : imgCounter--;
  flicker($(`#p${imgCounter}`),'in');
}

// Testimonials ======================= //
let quoteCount = 1;
const maxQuotes = 4;
cycleQuotes();
quotes = setInterval(cycleQuotes, 4000);

function cycleQuotes() {
  flicker($(`#t${quoteCount}`), 'out');
  (quoteCount >= maxQuotes ) ? quoteCount = 1 : quoteCount++;
  flicker($(`#t${quoteCount}`),'in');
}


// Keyboard =========================== //
$('.extra-keys').slideUp(0);
let activeKey = 'home-key';

$('.keytray').on('click', function(e) {
  if (e.target.classList.contains('clack')) {
    activeKey = e.target.closest('.keyborder').id;
    // console.log(e.target.closest('.keyborder').id);
  } else { return };

  switch (activeKey) {
    case 'esc-key':
      console.log('esc');
      $('.nav-keys').slideToggle();
      // active hamburger
      break;
    case 'home-key':
      console.log('home');
      $('#me').attr('src',`img/m3.png`);
      controlSwitch('home', e);
      break;
    case 'about-key':
      console.log('about');
      controlSwitch('about', e);
      break;
    case 'project-key':
      console.log('projects');
      controlSwitch('caro', e);
      break;
    case 'quote-key':
      console.log('quotes');
      controlSwitch('testimonials', e);
      break;
    case 'contact-key':
      console.log('contacts');
      controlSwitch('contact', e);
      break;
      case 'next-key':
      console.log('next project');
      nextImage();
      // controlSwitch('next', e);
      break;
      case 'prev-key':
      console.log('previous project');
      prevImage();
      // controlSwitch('previous', e);
      break;
    default:
      console.log(`Error: ${activeKey}`);
      break;
  }
});

function controlSwitch(key, e) {
  // Slide down extra keys if not Project
  if (key != 'caro') {
    $('.extra-keys').slideUp();
  } else if (key === 'caro') {
    flicker($('#p1'),'in');
    $('.extra-keys').slideToggle();
    // $('.extra-keys').slideDown();
  }
  // hide current / old
  $('section').addClass('hide');
  // unhide new
  $(`section.${key}`).removeClass('hide');
  // To Do - test flicker here ^
  // debugger;
  $('.keyled').addClass('off');
  $(e.target.closest('.keyborder'))
    .siblings('.keyled')
    .removeClass('off')
    .addClass('on');
}


let $submit = $('form.contact');
let $inputs = $('.contact input, .contact textarea');

// console.log($inputs);
$submit.on('click', event => {
    event.preventDefault();
    console.log('click');
    for (let i = 0; i < $inputs.length; i++) {
        if (!$inputs.eq(i).val()) {
            $inputs.eq(i).addClass('error');
            $inputs.eq(i).siblings('p').fadeIn('slow');
        } else {
            $inputs.eq(i).removeClass('error');
            $inputs.eq(i).siblings('p').fadeOut('slow');
        }
    }
});

// $('form.contact').on('submit', function(e) {
//   e.preventDefault();

  
// })