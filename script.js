function moveProgress(val) {
    const bar = document.getElementById('liquidBar');
    const text = document.getElementById('percentText');


    bar.style.width = val + '%';


    text.innerText = val + '%';
}