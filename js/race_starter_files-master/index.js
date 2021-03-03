let player1Steps = document.querySelectorAll('#player1-race td');
let player2Steps = document.querySelectorAll('#player2-race td');
let currentaPlayer1 = 0;
let currentaPlayer2 = 0;

document.addEventListener('keyup', (e) => {
	console.log(e.key);
	if (e.key === 'ArrowRight') {
		player1Steps[currentaPlayer1].classList.remove('active');
		currentaPlayer1++;
		if (currentaPlayer1 == player1Steps.length - 1) {
			player1Steps[currentaPlayer1].classList.add('active');
			window.alert('Player 1  win!!');
			window.location.reload();
		} else {
			player1Steps[currentaPlayer1].classList.add('active');
		}
	} else if (e.key == 'l') {
		player2Steps[currentaPlayer2].classList.remove('active');
		currentaPlayer2++;
		if (currentaPlayer2 === player2Steps.length - 1) {
			player1Steps[currentaPlayer1].classList.add('active');
			window.alert('Player 2 win!!');
			window.location.reload();
		} else {
			player2Steps[currentaPlayer2].classList.add('active');
		}
	}
});
