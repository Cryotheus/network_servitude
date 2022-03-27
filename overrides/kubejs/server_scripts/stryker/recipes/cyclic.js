onEvent("recipes", event => {
	//deletions
	event.remove({id: "cyclic:crafting_stick"})
	
	//additions
	//shaped
	event.shaped("cyclic:crafting_stick", [" C", "S "], {
		C: "#forge:workbench",
		S: "#forge:rods/wooden"
	})
})