const accordion = document.querySelector('.accordion');
// To narrow it down to select the item within the div element
const items = accordion.querySelectorAll('li');
const questions = accordion.querySelectorAll('.question');


function toggleAccordion() {
    const thisItem = this.parentNode;
    /* But here we want to target the li, to target the li we use the parentNode .
    This here is the referring to question in the forEach*/
    // console.log(this.parentNode);


    // Condition to check and open 1 accordion at a time.
    items.forEach(item => {
        if (thisItem == item) {
            thisItem.classList.toggle('open')
            return;
        }
        item.classList.remove('open')
    });

}


questions.forEach(question => {
    question.addEventListener('click', toggleAccordion);
});