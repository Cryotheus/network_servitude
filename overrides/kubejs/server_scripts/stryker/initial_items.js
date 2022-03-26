function color_random() {return Math.floor(Math.random() * 16777215)}

function grant_items(player) {
	//sophisticatedbackpacks:backpack
	player.setOffHandItem(Item.of("minecraft:shield", '{Enchantments:[{id:"unbreaking",lvl:1}],"quark:RuneAttached":1,"quark:RuneColor":{Count:1,id:"quark:blank_rune"},display:{Name:"{\\"text\\":\\"§fWorker Rights§r\\"}",Lore:["{\\"text\\":\\"§7Standard issue for Network Serfs§r\\"}"]}}'))
	
	player.give("minecraft:iron_pickaxe")
	player.give("minecraft:iron_shovel")
	player.give("minecraft:iron_axe")
	player.give("minecraft:iron_sword")
	
	player.give(Item.of("sophisticatedbackpacks:backpack", "{borderColor:" + color_random() + ",clothColor:" + color_random() + "}"))
	player.give("2x lootbagmod:lootbag")
	
	player.setLegsArmorItem(Item.of("environmental:yak_pants", '{Unbreakable:1,Enchantments:[{id:"cyclic:traveler",lvl:1}],"quark:RuneAttached":1,"quark:RuneColor":{Count:1,id:"quark:blank_rune"},display:{Name:"{\\"text\\":\\"§fSerious Slacks§r\\"}",Lore:["{\\"text\\":\\"§7Standard issue for Network Serfs§r\\"}","{\\"text\\":\\"§7Although they are called \\\\\\"Slacks\\\\\\" please do not do so§r\\"}"]}}'))
}

onEvent("player.logged_in", event => {
	if (!event.player.stages.has("stryker_initial_items")) {
		player = event.player
		
		player.stages.add("stryker_initial_items")
		
		//legacy support, mainly for quests
		player.stages.add("initial_items")
		player.stages.add("starting_items")
		
		grant_items(player)
	}
})

onEvent('ftbquests.completed.initial_items', event => {
	player = event.player
	
	if (player) {
		//event.notifiedPlayers.tell(Text.of(`${player.name} completed... something!`).green())
		//player.tell('Hello! affirmative?')
		
		grant_items(player)
	}
})

/*
onEvent('ftbquests.custom_reward', event => {
  log.info('Custom reward! general')
  event.player.tell('Hello! general')
})

onEvent('ftbquests.custom_reward.7AE9D8367D8B0811', event => {
  log.info('Custom reward! upper')
  event.player.tell('Hello! upper')
})

onEvent('ftbquests.custom_reward.7ae9d8367d8b0811', event => {
  log.info('Custom reward! lower')
  event.player.tell('Hello! lower')
}) //*/