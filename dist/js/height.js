document.body.onload = ()=>{
    document.body.style.minHeight = window.innerHeight + 'px';
}
let timeoutId;
const top = document.getElementById("top");
const confirm = document.getElementById("confirm");
const select = document.getElementById("select");

window.addEventListener("resize", () => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
        document.top.style.minHeight = window.innerHeight + 'px';
        document.confirm.style.minHeight = window.innerHeight + 'px';
        document.select.style.minHeight = window.innerHeight + 'px';
    }, 500);
});