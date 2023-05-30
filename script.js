function mudar(){
    mudarclasses();
    mudartexto();
}
function mudarclasses(){
    button.classList.toggle('dark-mode');
    h1.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
   footer.classList.toggle('dark-mode');

}
function mudartexto(){
    const lightmode= 'light mode';
    const darkmode='dark mode';
    if(button.classList.contains('dark-mode')){
        button.innerHTML= lightmode;
        h1.innerHTML=darkmode+' on';
        return;
    }
    button.innerHTML= darkmode;
        h1.innerHTML=lightmode+' on';
}
const button=document.getElementById('mode-selector');
const h1=document.getElementById('titulo');
const body=document.getElementsByTagName('body')[0];
const footer=document.getElementsByTagName('footer')[0];

button.addEventListener('click', mudar);