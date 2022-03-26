onEvent('recipes', (event) => {
    event.custom({
        "type": "mekanism:compressing",
        "itemInput": {
            "item": "kubejs:stellaric_composite"
        },
        "gasInput": {
            "amount": 1,
            "gas": "mekanism:liquid_osmium"
        },
        "output": {
            "item": "forbidden_arcanus:stellarite_piece"
        }
    })

    event.custom({
        "type": "mekanism:metallurgic_infusing",
        "itemInput": {
            "item": "appliedenergistics2:sky_stone_block"
        },
        "infusionInput": {
            "amount": 80,
            "tag": "mekanism:refined_obsidian"
        },
        "output": {
            "item": "kubejs:stellaric_composite"
        }
    })
})