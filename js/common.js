window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    var tab = document.querySelectorAll('.service__tab'),
        service = document.querySelector('.service__header'),
        tabContent = document.querySelectorAll('.service__tabcontent');

    function hideTabContent(a) {
        for (var i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1);

    function highlightButton() {
        tab.forEach(function(item, k) {
            tab[k].addEventListener('click', function() {
                for (var n = 0; n < tab.length; n++) {
                    if (tab[n].classList.contains('active')) {
                        tab[n].classList.remove('active');
                    }
                }
                tab[k].classList.add('active');

            });
        });
    }
    highlightButton();
    

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    service.addEventListener('click', function(event) {
        var target = event.target;
        
        if (target && target.classList.contains('service__tab')) {
            for (var i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });


});