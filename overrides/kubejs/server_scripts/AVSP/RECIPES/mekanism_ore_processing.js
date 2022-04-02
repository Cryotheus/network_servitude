//   #    #     #  #####  ######  
//  # #   #     # #     # #     # 
// #   #  #     # #       #     # 
//#     # #     #  #####  ######  
//#######  #   #        # #       
//#     #   # #   #     # #       
//#     #    #     #####  #       
//
//MEKANISM ORE PROCESSING RECIPE INTEGRATION.
//BY NEEPNOOP & ANOKKA / 2021
//
//MASSIVE SHOUTOUT TO CALLMEJAY758 FOR HELPING ME FIGURE THIS OUT.
//Also huge shoutout to the guys behind mekanism.
//https://github.com/mekanism/Mekanism/blob/v10.1/src/datagen/generated/mekanism/data/mekanism/recipes/processing
//

//hello reader, I'm Cryotheum, one of the guys who made the Network Servitude modpack
//I reworked this script so it's no longer massive copy paste spam, but instead tiny copy paste spam
//also I'm only doing metals because shit like emerald and coal slurry make zero sense
//a diamond crystal is just a diamond lol

function mekanism_ore_processing(event, material_tag, allow_enrichment)
{
	//dissolution
	event.custom({
		type: 'mekanism:dissolution',
		itemInput: {ingredient: {tag: 'forge:chunks/' + material_tag}},
		gasInput: {
			amount: 1,
			gas: 'mekanism:sulfuric_acid'
		},
		output: {
			slurry: 'emendatusenigmatica:dirty_' + material_tag,
			amount: 1000,
			chemicalType: 'slurry'
		}
	})
	
	//washing
	event.custom({
		type: 'mekanism:washing',
		fluidInput: {
			amount: 5,
			tag: 'minecraft:water'
		},
		slurryInput: {
			amount: 1,
			slurry: 'emendatusenigmatica:dirty_' + material_tag
		},
		output: {
			slurry: 'emendatusenigmatica:clean_' + material_tag,
			amount: 1
		}
	})
	
	//crystallizing
	event.custom({
		type: 'mekanism:crystallizing',
		chemicalType: 'slurry',
		input: {
			amount: 200,
			slurry: 'emendatusenigmatica:clean_' + material_tag
		},
		output: {item: 'emendatusenigmatica:' + material_tag + '_crystal'}
	})
	
	//injecting
	event.custom({
		type: 'mekanism:injecting',
		itemInput: {ingredient: {tag: 'mekanism:crystals/' + material_tag}},
		gasInput: {
			amount: 1,
			gas: 'mekanism:hydrogen_chloride'
		},
		output: {item: 'emendatusenigmatica:' + material_tag + '_shard'}
	})
	
	//injecting for 4x
	event.custom({
		type: 'mekanism:injecting',
		itemInput: {ingredient: {tag: 'forge:chunks/' + material_tag}},
		gasInput: {
			amount: 1,
			gas: 'mekanism:hydrogen_chloride'
		},
		output: {
			item: 'emendatusenigmatica:' + material_tag + '_shard',
			count: 4
		}
	})
	
	//purifying
	event.custom({
		type: 'mekanism:purifying',
		itemInput: {ingredient: {tag: 'mekanism:shards/' + material_tag}},
		gasInput: {
			amount: 1,
			gas: 'mekanism:oxygen'
		},
		output: {item: 'emendatusenigmatica:' + material_tag + '_clump'}
	})
	
	//purifying for 3x
	event.custom({
		type: 'mekanism:purifying',
		itemInput: {ingredient: {tag: 'forge:chunks/' + material_tag}},
		gasInput: {
			amount: 1,
			gas: 'mekanism:oxygen'
		},
		output: {
			item: 'emendatusenigmatica:' + material_tag + '_clump',
			count: 3
		}
	})
	
	//crushing
	event.custom({
		type: 'mekanism:crushing',
		input: {ingredient: {tag: 'mekanism:clumps/' + material_tag}},
		output: {item: 'emendatusenigmatica:' + material_tag + '_dirty_dust'}
	})
	
	//enriching
	event.custom({
		type: 'mekanism:enriching',
		input: {ingredient: {tag: 'mekanism:dirty_dusts/' + material_tag}},
		output: {item: 'emendatusenigmatica:' + material_tag + '_dust'}
	})
	
	if (allow_enrichment)
	{
		//enriching for 2x
		event.custom({
			type: 'mekanism:enriching',
			input: {ingredient: {tag: 'forge:chunks/' + material_tag}},
			output: {
				item: 'emendatusenigmatica:aluminum_dust',
				count: 2
			}
		})
	}
}

onEvent('recipes', event => {
	mekanism_ore_processing(event, 'aluminum', true)
	mekanism_ore_processing(event, 'cobalt', true)
	mekanism_ore_processing(event, 'nickel', true)
	mekanism_ore_processing(event, 'iridium', true)
	mekanism_ore_processing(event, 'silver', true)
	mekanism_ore_processing(event, 'zinc', true)
})