const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const name = document.querySelector('#name');

const arr = ['Dhruv', 'Aadhya', 'Chava', 'Ariel', 'Khadija', 'Salman', 'Dharma', 'Pax', ' Theodores', 'Magdalene'];

function clickValue() {
  const x = input.value;
    if(x == ''){
    return 
}

  const z = Math.floor(Math.random() * 10);
  const spirit = arr[z];
  const spiritName = x + ' ' + spirit;


  name.textContent = spiritName;
  console.log(x);

}
btn.addEventListener('click', clickValue)
