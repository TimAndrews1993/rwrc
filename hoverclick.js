var hoverclick = document.getElementsByClassName('dropdown')[0];
hoverclick.onclick = function() {
  //Trigger the 'hover' event on the dropdown
  hoverclick.onhover.call(hoverclick);
};
