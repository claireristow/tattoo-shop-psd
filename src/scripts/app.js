
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
        console.log('question item is on the page')
        const questionItems = document.getElementsByClassName('questionItem');
        for(let i = 0; i < questionItems.length; i++) {
            questionItems[i].addEventListener('click', function(e) {
                e.preventDefault();
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


}

app.init = function() {
    app.events();
}; 

(function() {
    app.init();
})();