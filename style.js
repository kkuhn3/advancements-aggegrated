let size = 0;
let fullWidth = 0;

function setScaleSize() {
	fullWidth = document.getElementById(tabSel.value).clientWidth;
	// the biggest advancement horizontally has 9 elements. with 1 between and .5 margins
	const maxNodewidth = fullWidth / 18;
	document.documentElement.style.setProperty('--size', maxNodewidth);
	size = maxNodewidth;
	placeMinecraft();
	placeNether();
	placeEnd();
	placeAdventure();
	placeHusbandry();
	placeArchipelago();
}

function addResizer() {
	window.addEventListener('resize', function(event){
		setScaleSize();
		positionInfo();
	});
}

//setTopLeft("category/id", from the top in squares, from the left in squares);
function placeMinecraft() {
	setTopLeft("story/root", 2.5, 1);
	setTopLeft("story/mine_stone", 2.5, 2);
	setTopLeft("story/upgrade_tools", 2.5, 3);
	setTopLeft("story/smelt_iron", 2.5, 4);
	setTopLeft("story/lava_bucket", 3, 5);
	setTopLeft("story/iron_tools", 1.5, 5);
	setTopLeft("story/obtain_armor", 4, 5);
	setTopLeft("story/form_obsidian", 3, 6);
	setTopLeft("story/mine_diamond", 1.5, 6);
	setTopLeft("story/deflect_arrow", 4, 6);
	setTopLeft("story/enter_the_nether", 3, 7);
	setTopLeft("story/enchant_item", 1, 7);
	setTopLeft("story/shiny_gear", 2, 7);
	setTopLeft("story/follow_ender_eye", 3.5, 8);
	setTopLeft("story/cure_zombie_villager", 2.5, 8);
	setTopLeft("story/enter_the_end", 3.5, 9);
}

function placeNether() {
	setTopLeft("nether/root", 5.25, 1);
	setTopLeft("nether/find_bastion", 1, 2);
	setTopLeft("nether/distract_piglin", 2, 2);
	setTopLeft("nether/find_fortress", 3, 2);
	setTopLeft("nether/ride_strider", 5, 2);
	setTopLeft("nether/return_to_sender", 6.5, 2);
	setTopLeft("nether/obtain_crying_obsidian", 7.5, 2);
	setTopLeft("nether/obtain_ancient_debris", 8.5, 2);
	setTopLeft("nether/fast_travel", 9.5, 2);
	setTopLeft("nether/loot_bastion", 1, 3);
	setTopLeft("nether/obtain_blaze_rod", 2.5, 3);
	setTopLeft("nether/get_wither_skull", 3.5, 3);
	setTopLeft("nether/explore_nether", 4.5, 3);
	setTopLeft("nether/ride_strider_in_overworld_lava", 5.5, 3);
	setTopLeft("nether/uneasy_alliance", 6.5, 3);
	setTopLeft("nether/charge_respawn_anchor", 7.5, 3);
	setTopLeft("nether/netherite_armor", 8.5, 3);
	setTopLeft("nether/brew_potion", 2.5, 4); //TODO - new image!
	setTopLeft("nether/summon_wither", 3.5, 4);
	setTopLeft("nether/all_potions", 2.5, 5);
	setTopLeft("nether/create_beacon", 3.5, 5);
	setTopLeft("nether/all_effects", 2.5, 6);
	setTopLeft("nether/create_full_beacon", 3.5, 6);
}

function placeEnd() {
	setTopLeft("end/root", 2.5, 1);
	setTopLeft("end/kill_dragon", 2.5, 2);
	setTopLeft("end/dragon_breath", 3, 3);
	setTopLeft("end/respawn_dragon", 1, 3);
	setTopLeft("end/dragon_egg", 2, 3);
	setTopLeft("end/enter_end_gateway", 4, 3);
	setTopLeft("end/find_end_city", 4, 4);
	setTopLeft("end/elytra", 3.5, 5);
	setTopLeft("end/levitate", 4.5, 5);
}

function placeAdventure() {
	setTopLeft("adventure/root", 13.75, 1);

	setTopLeft("adventure/heart_transplanter", 1, 2);
	setTopLeft("adventure/crafters_crafting_crafters", 2, 2);
	setTopLeft("adventure/spyglass_at_parrot", 3, 2);
	setTopLeft("adventure/sleep_in_bed", 5, 2);
	setTopLeft("adventure/trade", 7.5, 2);
	setTopLeft("adventure/fall_from_world_height", 9.25, 2);
	setTopLeft("adventure/minecraft_trials_edition", 11, 2);
	setTopLeft("adventure/use_lodestone", 12.25, 2);
	setTopLeft("adventure/brush_armadillo", 13.5, 2);
	setTopLeft("adventure/honey_block_slide", 15, 2);
	setTopLeft("adventure/kill_a_mob", 16.25, 2);
	setTopLeft("adventure/avoid_vibration", 18.5, 2);
	setTopLeft("adventure/ol_betsy", 21.5, 2);
	setTopLeft("adventure/trim_with_any_armor_pattern", 23.5, 2);
	setTopLeft("adventure/lightning_rod_with_villager_no_fire", 24.5, 2);
	setTopLeft("adventure/salvage_sherd", 25.5, 2);
	setTopLeft("adventure/voluntary_exile", 26.5, 2);
	setTopLeft("adventure/read_power_of_chiseled_bookshelf", 27.5, 2);
	
	setTopLeft("adventure/spyglass_at_ghast", 3, 3);
	setTopLeft("adventure/play_jukebox_in_meadows", 4, 3);
	setTopLeft("adventure/adventuring_time", 5, 3);
	setTopLeft("adventure/walk_on_powder_snow_with_leather_boots", 6, 3);
	setTopLeft("adventure/trade_at_world_height", 7, 3);
	setTopLeft("adventure/summon_iron_golem", 8, 3);
	setTopLeft("adventure/who_needs_rockets", 9, 3);
	setTopLeft("adventure/blowback", 10, 3);
	setTopLeft("adventure/lighten_up", 11, 3);
	setTopLeft("adventure/under_lock_and_key", 12, 3);
	setTopLeft("adventure/overoverkill", 13, 3);
	setTopLeft("adventure/kill_mob_near_sculk_catalyst", 14, 3);
	setTopLeft("adventure/kill_all_mobs", 15, 3);
	setTopLeft("adventure/totem_of_undying", 16, 3);
	setTopLeft("adventure/throw_trident", 17, 3);
	setTopLeft("adventure/shoot_arrow", 18.5, 3);
	setTopLeft("adventure/spear_many_mobs", 19.5, 3);
	setTopLeft("adventure/whos_the_pillager_now", 20.5, 3);
	setTopLeft("adventure/arbalistic", 21.5, 3);
	setTopLeft("adventure/two_birds_one_arrow", 22.5, 3);
	setTopLeft("adventure/trim_with_all_exclusive_armor_patterns", 23.5, 3);
	setTopLeft("adventure/craft_decorated_pot_using_only_sherds", 25.5, 3);
	setTopLeft("adventure/hero_of_the_village", 26.5, 3);
	
	setTopLeft("adventure/spyglass_at_dragon", 3, 4);
	setTopLeft("adventure/revaulting", 12, 4);
	setTopLeft("adventure/very_very_frightening", 17, 4);
	setTopLeft("adventure/bullseye", 18, 4);
	setTopLeft("adventure/sniper_duel", 19, 4);
}

function placeHusbandry() {
	setTopLeft("husbandry/root", 8, 1);
	setTopLeft("husbandry/ride_a_boat_with_a_goat", 1, 2);
	setTopLeft("husbandry/fishy_business", 2, 2);
	setTopLeft("husbandry/tame_an_animal", 4.5, 2);
	setTopLeft("husbandry/tadpole_in_a_bucket", 7, 2);
	setTopLeft("husbandry/allay_deliver_item_to_player", 8, 2);
	setTopLeft("husbandry/safely_harvest_honey", 9, 2);
	setTopLeft("husbandry/breed_an_animal", 10, 2);
	setTopLeft("husbandry/obtain_sniffer_egg", 11, 2);
	setTopLeft("husbandry/make_a_sign_glow", 12, 2);
	setTopLeft("husbandry/silk_touch_nest", 13, 2);
	setTopLeft("husbandry/plant_seed", 14, 2);
	setTopLeft("husbandry/place_dried_ghast_in_water", 15, 2);
	setTopLeft("husbandry/uh_oh", 16, 2);
	
	setTopLeft("husbandry/tactical_fishing", 2, 3);
	setTopLeft("husbandry/whole_pack", 3, 3);
	setTopLeft("husbandry/repair_wolf_armor", 4, 3);
	setTopLeft("husbandry/remove_wolf_armor", 5, 3);
	setTopLeft("husbandry/complete_catalogue", 6, 3);
	setTopLeft("husbandry/leash_all_frog_variants", 7, 3);
	setTopLeft("husbandry/allay_deliver_cake_to_note_block", 8, 3);
	setTopLeft("husbandry/wax_on", 9, 3);
	setTopLeft("husbandry/bred_all_animals", 10, 3);
	setTopLeft("husbandry/feed_snifflet", 11, 3);
	setTopLeft("husbandry/obtain_netherite_hoe", 13.5, 3);
	setTopLeft("husbandry/balanced_diet", 14.5, 3);
	
	setTopLeft("husbandry/axolotl_in_a_bucket", 2, 4);
	setTopLeft("husbandry/froglights", 7, 4);
	setTopLeft("husbandry/wax_off", 9, 4);
	setTopLeft("husbandry/plant_any_sniffer_seed", 11, 4);
	
	setTopLeft("husbandry/kill_axolotl_target", 2, 5);
}

function placeArchipelago() {
	setTopLeft("archipelago/root", 3.5, 1);
	setTopLeft("archipelago/get_wood", 1.5, 2);
	setTopLeft("archipelago/craft_sword", 2, 3);
	setTopLeft("archipelago/get_pickaxe", 1, 3);
	setTopLeft("archipelago/cow_tipper", 3.5, 2);
	setTopLeft("archipelago/hot_topic", 1, 4);
	setTopLeft("archipelago/bake_bread", 5.5, 2);
	setTopLeft("archipelago/ride_minecart", 4.5, 2);
	setTopLeft("archipelago/overpowered", 5, 3);
	setTopLeft("archipelago/the_lie", 6, 3);
	setTopLeft("archipelago/overkill", 2, 4);
	setTopLeft("archipelago/obtain_bookshelf", 3, 3);
	setTopLeft("archipelago/ride_pig", 4, 3);
}

function setTopLeft(eleId, t, l) {
	const ele = document.getElementById(eleId);
	ele.style.top = ((t-1) * 1.25) * size;
	ele.style.left = ((l-1) * 2 + .5) * size;
}

function addImages() {
	const nodes = document.getElementsByClassName("node");
	for(node of nodes) {
		node.innerHTML = '<img src="./images/' + node.id + '.png">';
	}
}

function addInfoDivs() {
	const nodes = document.getElementsByClassName("node");
	for(node of nodes) {
		let info = document.createElement('div');
		info.className = "info";
		info.id = "info:" + node.id;
		sizeInfo(info, node);
		info.style.display = "none";
		node.parentElement.appendChild(info);
		node.onmouseover = () => {info.style.display = "block";};
		node.onmouseout = () => {info.style.display = "none";};
		info.onmouseover = () => {info.style.display = "block";};
		info.onmouseout = () => {info.style.display = "none";};
	}
}

function positionInfo() {
	const infos = document.getElementsByClassName("info");
	for(info of infos) {
		const node = document.getElementById(info.id.split(":")[1]);
		sizeInfo(info, node);
	}
}

function sizeInfo(info, node) {
	info.style.top = node.style.top;
	const nodeLeft = parseInt(node.style.left);
	if(nodeLeft > fullWidth / 2) {
		info.style.right = fullWidth - nodeLeft - 2;
	}
	else {
		info.style.left = nodeLeft + size + 6;
	}
}