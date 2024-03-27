
function switch_theme_main() {
    var elements = document.getElementsByClassName("main");
    for (let element of elements) {
        if (element.classList.contains("light-main")) {
            element.classList.remove("light-main");
            element.classList.add("dark-main");
        } else {
            element.classList.remove("dark-main");
            element.classList.add("light-main");
        }
    }

}

function switch_theme_1() {
    var elements = document.getElementsByClassName("1");
    for (let element of elements) {
        if (element.classList.contains("light-1")) {
            element.classList.remove("light-1");
            element.classList.add("dark-1");
        } else {
            element.classList.remove("dark-1");
            element.classList.add("light-1");
        }
    }
}

function switch_theme_2() {
    var elements = document.getElementsByClassName("2");
    for (let element of elements) {
        if (element.classList.contains("light-2")) {
            element.classList.remove("light-2");
            element.classList.add("dark-2");
        } else {
            element.classList.remove("dark-2");
            element.classList.add("light-2");
        }
    }
}

function switchMode() {
    switch_theme_main();
    switch_theme_1();
    switch_theme_2();
}