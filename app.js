const sideBar = document.querySelector("#sidebar")
const overlay = document.querySelector("#overlay")
const bodyWrapper = document.querySelector(".wrapper")

const toggleSidebar = () => {
    bodyWrapper.classList.toggle("resize")
    sideBar.classList.toggle("show")
    overlay.classList.toggle("show")
    // console.log("clicked");
}

const windowWidth = document.querySelector("#window-width")
const windowHeight = document.querySelector("#window-height")

if (window.addEventListener) {
    window.addEventListener('resize', () => {
        
        windowWidth.textContent = window.innerWidth
        windowHeight.textContent = window.innerHeight

        // if (windowWidth.innerWidth <= 500) {
            
        // }
    }, true)
}