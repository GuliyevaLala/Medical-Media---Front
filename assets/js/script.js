"use strict";

let rightChevron = document.querySelector("#highlights .up .icons .right")
let leftChevron = document.querySelector("#highlights .up .icons .left")
let all = document.querySelectorAll("#highlights  .down .boxes")


all.forEach(eachItem => {
    let newDimension = eachItem.getBoundingClientRect();
    rightChevron.addEventListener("click", function () {
        eachItem.scrollLeft += newDimension.width / 4
    })

    leftChevron.addEventListener("click", function () {
        eachItem.scrollLeft -= newDimension.width / 4
    })
})