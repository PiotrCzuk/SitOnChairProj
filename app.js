document.addEventListener('DOMContentLoaded', function () {

    //Slider functionality

    var prevPicture = document.getElementById('prevPicture');
    var nextPicture = document.getElementById("nextPicture");
    var li_elements = document.querySelectorAll(".slider > div> ul > li");

    var pic_index = 0;

    li_elements[pic_index].classList.add("visible")

    var moveSlideLeft = function() {
        li_elements[pic_index].classList.remove("visible");
        li_elements[pic_index].style.left = "-1000px";

        pic_index--;
        if (pic_index<0) {
            pic_index=li_elements.length-1
        }
        li_elements[pic_index].style.left = "0";
        li_elements[pic_index].classList.add("visible");
    }

    var moveSlideRight = function() {
        li_elements[pic_index].classList.remove("visible");
        li_elements[pic_index].style.left = "-1000px";

        pic_index++;
        if (pic_index>li_elements.length-1) {
            pic_index=0
        }
        li_elements[pic_index].style.left = "0";
        li_elements[pic_index].classList.add("visible");
    }

    prevPicture.addEventListener("click", moveSlideLeft);
    nextPicture.addEventListener("click", moveSlideRight);


    // On click plans functionality change colors
    const chooserButtons = document.querySelectorAll('.plans-option button'),
        plans = document.querySelectorAll('.plans-option');

    function makeActive(event) {
        for (let plan of plans) {
            plan.classList.remove('active');
            plan.classList.add('inactive');
        }
        event.target.parentElement.classList.remove('inactive');
        event.target.parentElement.classList.add('active');
    }

    for (let chooserButton of chooserButtons) {
        chooserButton.addEventListener('click', makeActive);
    }

    //Trying to implement the chair app
    const allLiElements = document.querySelectorAll('.list_panel li'),
            chairTypes = document.querySelectorAll('.drop_down_list:first-child .list_panel li'),
        listArrows = document.querySelectorAll('.list_arrow'),
        transportCheckbox = document.querySelector('#transport');

});