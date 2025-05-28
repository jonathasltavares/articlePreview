var shareButton = document.getElementById('shareButton');
var shareBox= document.getElementById('shareBox');

shareButton.onclick = function() {
    shareBox.classList.toggle('hidden');
    shareButton.classList.toggle('active');
}