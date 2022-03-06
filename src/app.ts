//AMN - Ts doesn't know (because it has no access) that there is the 
// querySelector anchor tag. If we are sure that it is then we can avoid a mistake
// by using the !. This ! says Ts that there is for sure an anchor tag.
const anchor = document.querySelector('a')!;
if(anchor) {
  console.log(anchor.href);
}
console.log(anchor.href);

// AMN - Ts using ! defines the querySelector .new-item-form as an element
// NOT as a HTMLFormElement because by the class name it doens't know the 
// type of element .new-item-form is. But we can tell it to Ts by adding the
// type, in this case we are grabbing an HTMLFormElement.
//const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(
    type.value, 
    tofrom.value, 
    details.value, 
    amount.valueAsNumber
  );
});