import { $ } from '../utility/index.js';

let el = $('#content');

el('#content').prepend('<div id="new">');
el('#new').append('Sup boi').attr('class', 'anther-one');

el('#testinput').on('click', function () {
  alert('The value of #testinput changed');
});

el('#content').append('<section>');

el('section')
  .addClass('my-div')
  .addClass('tuna')
  .append('My cool new div classed tuna')
  .css([
    'color:red;',
    'fontSize:30px;',
    'padding:30px;',
    'textTransform:uppercase',
  ]);

el('.my-div').removeClass('tuna').append('<div class="child-div">');
el('.child-div').append('ANOTHER ONE');
el('.my-div').append('<button class="toggle-btn"/>');
el('.toggle-btn').css(['width:75px;', 'margin:20px;', 'display:block']);
el('.toggle-btn').append('Toggle');
el('.tuna').each(function (sandwich, index) {
  console.log(sandwich); // The element
  console.log(index); // It's index in the NodeList
});

// el('.my-div').on('click', function () {
//   alert('The value of #testinput changed');
// });

el('.toggle-btn').on('click', function () {
  el('.child-div').toggle('.child-div', '.child-div', true);
});
