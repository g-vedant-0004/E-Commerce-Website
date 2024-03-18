let main_image = document.getElementById("main_image");
let small_image = document.getElementsByClassName("small_image");

small_image[0].onclick = function () {
    main_image.src = small_image[0].src;
}

small_image[1].onclick = function () {
    main_image.src = small_image[1].src;
}

small_image[2].onclick = function () {
    main_image.src = small_image[2].src;
}

small_image[3].onclick = function () {
    main_image.src = small_image[3].src;
}
