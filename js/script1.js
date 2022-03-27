var card = document.querySelector('.main_title');

card.onclick = function(e) {
    console.log(123)
    gtag('event', 'кнопка 1', { 'event_category': 'href', 'event_action': 'click'});
};
