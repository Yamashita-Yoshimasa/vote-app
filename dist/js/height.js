// const TopID = document.getElementById("top");
// const ConfirmID = document.getElementById("confirm");
// const SelectID = document.getElementById("select");
// window.onload = ()=>{
//     TopID.style.minHeight = window.innerHeight + 'px';
//     ConfirmID.style.minHeight = window.innerHeight + 'px';
//     SelectID.style.minHeight = window.innerHeight + 'px';
// }
let timeoutId;

window.addEventListener("resize", () => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
        document.getElementById("top").style.minHeight = window.innerHeight + 'px';
        document.getElementById("confirm").style.minHeight = window.innerHeight + 'px';
        document.getElementById("select").style.minHeight = window.innerHeight + 'px';
    }, 500);
});