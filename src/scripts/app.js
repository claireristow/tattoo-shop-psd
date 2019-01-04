
const app = {};

app.events = function() {
    
    // when a hamburger nav is clicked
    document.querySelector('.menuCircle').addEventListener('click', function(e) {
        const menu = document.querySelector('.menu');
        if (menu.classList.contains('showFlex')) {
            menu.classList.remove('showFlex');
        } else {
            menu.classList.add('showFlex');
        }
    })

    // when a faq is clicked
    if (document.querySelector('.questionItem')) {
        const questionItems = document.getElementsByClassName('questionItem');

        // loop through the elements with questionItem class
        for(let i = 0; i < questionItems.length; i++) {

            // add event listener to each question item
            questionItems[i].addEventListener('click', function(e) {

                const questionId = this.getAttribute('id');

                // unselected previous question
                document.querySelector('.active').classList.remove('active');
                document.querySelector('.show').classList.remove('show');

                // select clicked question
                document.getElementById(questionId).classList.add('active');
                document.querySelector(`.${questionId}`).classList.add('show');
            })
        }
    }

    if (document.querySelector('.testimonialsMain')) {

        const names = document.getElementsByClassName(`name`);
        
        for (let i = 0; i < names.length; i++) {
            names[i].addEventListener('click', function() {
                const clicked = this.getAttribute('class');
                const clickedName = clicked.split(' ')[1];
                console.log(clickedName)
                
                // unselect previous testimonial
                document.querySelector('.active').classList.remove('active');
                const previousElements = document.getElementsByClassName('show');
                for (let i = 0; i < previousElements.length; i++) {
                    previousElements[i].classList.remove('show');
                }

                // select clicked testimonial
                document.querySelector(`.testimonialNames .${clickedName}`).classList.add('active');
                const currentElements = document.getElementsByClassName(clickedName);
                for (let i = 0; i < currentElements.length; i++) {
                    currentElements[i].classList.add('show');
                }
            }) // end of event listener
        } // end of for loop
    } // end of testimonial events


}

app.init = function() {
    app.events();
}; 

(function() {
    app.init();
})();