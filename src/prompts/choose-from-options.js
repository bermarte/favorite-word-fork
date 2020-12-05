'use strict';

console.log('--- loading prompt --> ');

/**
 * presents a user with a list of options
 * continually prompts the user until they select an option from the list
 * @param {string[]} [options=['yes', 'no']] - the options a user can select from
 * @param {string} [instructions='pick one'] - to explain the options to the user
 * @returns {string} the selected option
 */
const chooseFromOptions = (options = ['yes', 'no'], instructions = 'pick one') => {
  // 1. render the options message for the user
  // 2. begin an I/O loop
  //  a. prompt the user with the message
  //  b. continue if the user input is empty
  //  c. continue if the user input is not in the options array
  //  d. ask the user to confirm their choice

  let choice;

  while (true) {
    const choose = `${instructions}\n- "${options[0]}"\n- "${options[1]}"`;
    let askToConfirm = prompt(choose);

    if (!askToConfirm || askToConfirm == '') {
      alert('there is no escape!');
      continue;
    }
    if (askToConfirm === "vowels" || askToConfirm === "consonants") {

      choice = askToConfirm;
      //confirm
      const sure = confirm(`are you sure?\n\n- "${choice}"`);

      //confirm
      if (sure === '' || !sure) {
        continue;
      }
      else {
        break;
      }
    }
    else {
      alert(`"${askToConfirm}" is not an option`);
      continue;
    }
  }
  return choice;
}


/*
{
  // store I/O functions and console.log for later
  const consoleLog = console.log;
  const globalPrompt = prompt;
  const globalConfirm = confirm;
  const globalAlert = alert;
  // over-write non-interactive I/O with empty functions
  alert = () => { };
  console.log = () => { };
  //a  function that simulates a user inputting a series of values
  const mockUser = (values, index = 0) => () => values[index++];

  try {
    prompt = mockUser(['yes']);
    confirm = mockUser([true]);
    console.assert(chooseFromOptions() === 'yes', 'Test 0 a');

    prompt = mockUser(['no']);
    confirm = mockUser([true]);
    console.assert(chooseFromOptions() === 'no', 'Test 0 b');

    prompt = mockUser(['x', 'y', 'b', 'c']);
    confirm = mockUser([false, true]);
    console.assert(chooseFromOptions(['a', 'b', 'c']) === 'c', 'Test 1');

    prompt = mockUser(['dogs', 'mice', 'dogs']);
    confirm = mockUser([false, true]);
    console.assert(chooseFromOptions(['cats', 'dogs']) === 'dogs', 'Test 2');

    prompt = mockUser(['white chocolte', 'white chocolate', 'dark chocolate']);
    confirm = mockUser([false, true]);
    console.assert(
      chooseFromOptions([
        'white chocolate',
        'milk chocolate',
        'dark chocolate',
      ]) === 'dark chocolate',
      'Test 3'
    );
  } catch (err) {
    console.error(err);
  }

  // reassign the global functions now that testing is over
  prompt = globalPrompt;
  confirm = globalConfirm;
  alert = globalAlert;
  console.log = consoleLog;
}
*/