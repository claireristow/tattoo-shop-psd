
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
    if (document.getElementById('questionItem')) {
        document.getElementById('questionItem').addEventListener('click', function(e) {
            const clickedItem = this;
            console.log(clickedItem);
        })
    }


}

app.init = function() {
    app.events();
}; 

(function() {
    app.init();
})();