colors = [
	'white',
	'orange',
	'magenta',
	'light_blue',
	'yellow',
	'lime',
	'pink',
	'gray',
	'light_gray',
	'cyan',
	'purple',
	'blue',
	'brown',
	'green',
	'red',
	'black'
]

function add_quest_tag(event, item, quest) {
	event.add('kubejs:stryker_quests', item)
	
	if (quest) {event.add('kubejs:stryker_quests/' + quest, item)}
}

onEvent('item.tags', event => {
	colors.forEach(color => {
		add_quest_tag(event, 'comforts:sleeping_bag_' + color, 'sleeping_bag')
		add_quest_tag(event, 'comforts:hammock_' + color, 'hammock')
	})
})
