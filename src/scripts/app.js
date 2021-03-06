
const app = {};

app.carousel = function() {
    var elem = document.querySelector('.main-carousel');
    var flkty = new Flickity(elem, {
        contain: true,
        draggable: '>1',
        wrapAround: true
    });
}

app.events = function() {
    
    // when a hamburger nav is clicked
    document.querySelector('.menuCircle').addEventListener('click', function(e) {
        const menu = document.querySelector('.menu');
        if (menu.classList.contains('showFlex')) {
            menu.classList.remove('showFlex');
        } else {
            menu.classList.add('showFlex');
        }
    });

    // FAQ events
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
            });
        }
    }

    // testimonial events
    if (document.querySelector('.testimonialsMain')) {

        const names = document.getElementsByClassName(`name`);
        
        // add an event listener to all the testimonial names
        for (let i = 0; i < names.length; i++) {
            names[i].addEventListener('click', function() {
                const clicked = this.getAttribute('class');
                const clickedName = clicked.split(' ')[1];
                
                // unselect previous testimonial
                const previousQuote = document.getElementsByClassName('quote show');
                previousQuote[0].classList.remove('show');

                const previousImage = document.getElementsByClassName('imageContainer show');
                previousImage[0].classList.remove('show');

                document.querySelector('.active').classList.remove('active');

                // select clicked testimonial
                document.querySelector(`.testimonialNames .${clickedName}`).classList.add('active');
                
                const currentElements = document.getElementsByClassName(clickedName);
                for (let i = 0; i < currentElements.length - 1; i++) {
                    currentElements[i].classList.add('show');
                }
            }); // end of event listener
        } // end of for loop

        const namesNav = document.querySelector('.namesNav');

        namesNav.addEventListener('click', function(e) {
            e.preventDefault();
            const namesList = document.querySelector('.testimonialNames ul');
            if (namesList.classList.contains('show')) {
                namesList.classList.remove('show');
            } else {
                namesList.classList.add('show');
            };

            const names = document.getElementsByClassName(`name`);

            // add an event listener to all the testimonial names
            for (let i = 0; i < names.length; i++) {
                names[i].addEventListener('click', function () {
                    document.querySelector('.testimonialNames ul').classList.remove('show');
                });
            }
        });
    } // end of testimonial events
}

app.init = function() {
    app.events();
    app.carousel();
}; 

(function() {
    app.init();
})();