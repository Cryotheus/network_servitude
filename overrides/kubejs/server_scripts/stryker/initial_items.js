disabled_initial_spawns = [
	"alexsmobs:animal_dictionary",
	"enigmaticlegacy:cursed_ring",
	"enigmaticlegacy:enigmatic_amulet",
	"tconstruct:materials_and_you",
	"theoneprobe:probenote"
]

disabled_count = disabled_initial_spawns.length
standard_issue_nbt = '{display:{Lore:["{\\"text\\":\\"§7Standard issue for Network Serfs§r\\"}"]}}'

function color_random() {return Math.floor(Math.random() * 16777215)}

function grant_items(player) {
	inventory = player.inventory
	
	player.setLegsArmorItem(Item.of("environmental:yak_pants", '{Unbreakable:1,Enchantments:[{id:"cyclic:traveler",lvl:1}],"quark:RuneAttached":1,"quark:RuneColor":{Count:1,id:"quark:blank_rune"},display:{Name:"{\\"text\\":\\"§fSerious Slacks§r\\"}",Lore:["{\\"text\\":\\"§7Standard issue for Network Serfs§r\\"}","{\\"text\\":\\"§7Although they are called \\\\\\"Slacks\\\\\\" please do not do so§r\\"}"]}}'))
	player.setOffHandItem(Item.of("minecraft:shield", '{Enchantments:[{id:"unbreaking",lvl:1}],"quark:RuneAttached":1,"quark:RuneColor":{Count:1,id:"quark:blank_rune"},display:{Name:"{\\"text\\":\\"§fWorker Rights§r\\"}",Lore:["{\\"text\\":\\"§7Standard issue for Network Serfs§r\\"}"]}}'))
	
	//hotbar
	inventory.set(0, Item.of("minecraft:iron_pickaxe", '{Enchantments:[{id:"unbreaking",lvl:2}],"quark:RuneAttached":1,"quark:RuneColor":{Count:1,id:"quark:blank_rune"},display:{Lore:["{\\"text\\":\\"§7Standard issue for Network Serfs§r\\"}"]}}'))
	inventory.set(1, Item.of("minecraft:iron_shovel", standard_issue_nbt))
	inventory.set(2, Item.of("minecraft:iron_axe", '{Enchantments:[{id:"unbreaking",lvl:1},{id:"enigmaticlegacy:nemesis_curse",lvl:1}],"quark:RuneAttached":1,"quark:RuneColor":{Count:1,id:"quark:blank_rune"},display:{Lore:["{\\"text\\":\\"§7Damn thing is useless in combat§r\\"}","{\\"text\\":\\"§7Standard issue for Network Serfs§r\\"}"]}}'))
	inventory.set(3, Item.of("minecraft:iron_sword", standard_issue_nbt))
	
	inventory.set(7, Item.of("3x extendedmushrooms:mushroom_bread", '{display:{Name:"{\\"text\\":\\"§fBRED 46a-2§r\\"}",Lore:["{\\"text\\":\\"§7Expired... but still edible§r\\"}","{\\"text\\":\\"§7Standard issue for Network Serfs§r\\"}"]}}'))
	inventory.set(8, Item.of("sophisticatedbackpacks:backpack", "{borderColor:" + color_random() + ",clothColor:" + color_random() + "}"))
	
	//inventory
	inventory.set(9, "2x lootbagmod:lootbag")
	inventory.set(10, Item.of("2x pamhc2foodextended:driedsoupitem", '{display:{Name:"{\\"text\\":\\"§fMeat Supplement v2.4.19d (Revision A)§r\\"}",Lore:["{\\"text\\":\\"§7Best described as a \\\\\\"Jerky Brick\\\\\\"§r\\"}","{\\"text\\":\\"§7Standard issue for Network Serfs§r\\"}"]}}'))
}

function remove_items(player) {
	march = 0
	inventory = player.inventory
	stages = player.stages
	stage_tracker = {}
	
	disabled_initial_spawns.forEach(id => {
		slot = inventory.find(Item.of(id).ignoreNBT())
		stage_id = "stryker_initial_removals_" + id
		
		if (stages.has(stage_id) && !stage_tracker[stage_id])
		{
			march++
			stage_tracker[stage_id] = true
		}
		else if (slot > -1) {
			item = inventory.get(slot)
			
			inventory.clear(item)
			
			if (!stage_tracker[stage_id])
			{
				march++
				stage_tracker[stage_id] = true
				
				stages.add(stage_id)
			}
		}
	})
	
	if (march >= disabled_count) {stages.add("stryker_initial_removals")}
}

onEvent('ftbquests.completed.initial_items', event => {
	player = event.player
	
	if (player) {grant_items(player)}
})

onEvent('ftbquests.completed.initial_items_removal', event => {
	player = event.player
	stages = player.stages
	
	if (player) {
		//disabled_initial_spawns.forEach(id => {stages.remove("stryker_initial_removals_" + id)})
		
		//stages.remove("stryker_initial_removals")
		remove_items(player)
	}
})

onEvent('player.inventory.changed', event => {
	player = event.player
	stages = player.stages
	
	if (stages.has("stryker_initial_items") && !stages.has("stryker_initial_removals")) {
		remove_items(player)
	}
})

onEvent("player.logged_in", event => {
	if (!event.player.stages.has("stryker_initial_items")) {
		player = event.player
		stages = player.stages
		
		grant_items(player)
		
		stages.add("stryker_initial_items")
		
		//legacy support, mainly for quests
		stages.add("initial_items")
		stages.add("starting_items")
	}
})

/*onEvent("item.pickup", event => {
	item = event.item
	player = event.player
	id = item.id
	
	if (event.item) {
		if (id) {
			player.tell("test succeeded")
			player.tell(id)
			
			if (disable_initial[id]) {
				item.count = 0
				player.tell("disabled")
			} else {player.tell("not disabled")}
		}
		else {"test failed"}
	}
	else {player.tell("aw ffs")}
})*/

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