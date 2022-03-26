onEvent("item.pickup", event => {
	player = event.player
	
	player.tell("I'm guessing here")
})