function download(){
  
const downloadButtons = document.querySelectorAll('.download-button');

downloadButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Download starting!');
  });
});

}

