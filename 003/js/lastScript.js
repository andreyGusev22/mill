active_search.onclick = function() {
    document.getElementById("search_img").classList.add("search_active");
    document.getElementById("bg_white").classList.add("header_white");
    document.querySelector(".search_input-active").classList.add("visib");
}

const search = document.getElementById("search_img");
const header_white = document.getElementById("bg_white");
const input = document.querySelector(".search_input-active");
document.addEventListener('click', (e) => {
    const click = e.composedPath().includes(search);
    if( !click ) {
        search.classList.remove("search_active");
        header_white.classList.remove("header_white");
        input.classList.remove("visib");
    }
});