

window.addEventListener('scroll', ShowItem);

function ShowItem() {
    const WindowHeight = window.innerHeight;
    const HiddenItems = document.querySelectorAll('.hidden');
    const HiddenLines = document.querySelectorAll('.hidden_line');
    let ScrollSize = window.scrollY;
    
    HiddenItems.forEach(function(item) {
        const DistanceToItem = item.getBoundingClientRect().top + window.pageYOffset;
        
        if (ScrollSize + WindowHeight > DistanceToItem + 200) {
            item.classList.add('show');
        }
    });
}


/* Copyright (c) 2026 Zundamorphism ver.1.0 */
