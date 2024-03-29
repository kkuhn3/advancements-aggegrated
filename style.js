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

function placeMinecraft() {
	setTopLeft("story/root", 2.5, 1);
	setTopLeft("story/mine_stone", 2.5, 2);
	setTopLeft("story/upgrade_tools", 2.5, 3);
	setTopLeft("story/smelt_iron", 2.5, 4);
	setTopLeft("story/obtain_armor", 1, 5);
	setTopLeft("story/lava_bucket", 2, 5);
	setTopLeft("story/iron_tools", 3.5, 5);
	setTopLeft("story/deflect_arrow", 1, 6);
	setTopLeft("story/form_obsidian", 2, 6);
	setTopLeft("story/mine_diamond", 3.5, 6);
	setTopLeft("story/enter_the_nether", 2, 7);
	setTopLeft("story/shiny_gear", 3, 7);
	setTopLeft("story/enchant_item", 4, 7);
	setTopLeft("story/cure_zombie_villager", 1.5, 8);
	setTopLeft("story/follow_ender_eye", 2.5, 8);
	setTopLeft("story/enter_the_end", 2.5, 9);
}

function placeNether() {
	setTopLeft("nether/root", 4.75, 1);
	setTopLeft("nether/return_to_sender", 1, 2);
	setTopLeft("nether/find_bastion", 2, 2);
	setTopLeft("nether/obtain_ancient_debris", 3.5, 2);
	setTopLeft("nether/fast_travel", 4.5, 2);
	setTopLeft("nether/find_fortress", 5.5, 2);
	setTopLeft("nether/obtain_crying_obsidian", 7, 2);
	setTopLeft("nether/distract_piglin", 8, 2);
	setTopLeft("nether/ride_strider", 9, 2);
	setTopLeft("nether/uneasy_alliance", 1, 3);
	setTopLeft("nether/loot_bastion", 2, 3);
	setTopLeft("nether/use_lodestone", 3, 3);
	setTopLeft("nether/netherite_armor", 4, 3);
	setTopLeft("nether/get_wither_skull", 5, 3);
	setTopLeft("nether/obtain_blaze_rod", 6, 3);
	setTopLeft("nether/charge_respawn_anchor", 7, 3);
	setTopLeft("nether/ride_strider_in_overworld_lava", 8.5, 3);
	setTopLeft("nether/explore_nether", 9.5, 3);
	setTopLeft("nether/summon_wither", 5, 4);
	setTopLeft("nether/brew_potion", 6, 4);
	setTopLeft("nether/create_beacon", 5, 5);
	setTopLeft("nether/all_potions", 6, 5);
	setTopLeft("nether/create_full_beacon", 5, 6);
	setTopLeft("nether/all_effects", 6, 6);
}

function placeEnd() {
	setTopLeft("end/root", 2.5, 1);
	setTopLeft("end/kill_dragon", 2.5, 2);
	setTopLeft("end/dragon_egg", 1, 3);
	setTopLeft("end/enter_end_gateway", 2, 3);
	setTopLeft("end/respawn_dragon", 3, 3);
	setTopLeft("end/dragon_breath", 4, 3);
	setTopLeft("end/find_end_city", 2, 4);
	setTopLeft("end/elytra", 1.5, 5);
	setTopLeft("end/levitate", 2.5, 5);
}

function placeAdventure() {
	setTopLeft("adventure/root", 9, 1);
	setTopLeft("adventure/voluntary_exile", 1, 2);
	setTopLeft("adventure/spyglass_at_parrot", 2, 2);
	setTopLeft("adventure/kill_a_mob", 5, 2);
	setTopLeft("adventure/read_power_of_chiseled_bookshelf", 6.5, 2);
	setTopLeft("adventure/trade", 8.5, 2);
	setTopLeft("adventure/trim_with_any_armor_pattern", 10, 2);
	setTopLeft("adventure/honey_block_slide", 11, 2);
	setTopLeft("adventure/ol_betsy", 12, 2);
	setTopLeft("adventure/lightning_rod_with_villager_no_fire", 13, 2);
	setTopLeft("adventure/fall_from_world_height", 14, 2);
	setTopLeft("adventure/salvage_sherd", 15, 2);
	setTopLeft("adventure/avoid_vibration", 16, 2);
	setTopLeft("adventure/sleep_in_bed", 17, 2);
	setTopLeft("adventure/hero_of_the_village", 1, 3);
	setTopLeft("adventure/spyglass_at_ghast", 2, 3);
	setTopLeft("adventure/throw_trident", 3, 3);
	setTopLeft("adventure/kill_mob_near_sculk_catalyst", 4, 3);
	setTopLeft("adventure/shoot_arrow", 5, 3);
	setTopLeft("adventure/kill_all_mobs", 6, 3);
	setTopLeft("adventure/totem_of_undying", 7, 3);
	setTopLeft("adventure/summon_iron_golem", 8, 3);
	setTopLeft("adventure/trade_at_world_height", 9, 3);
	setTopLeft("adventure/trim_with_all_exclusive_armor_patterns", 10, 3);
	setTopLeft("adventure/two_birds_one_arrow", 11, 3);
	setTopLeft("adventure/whos_the_pillager_now", 12, 3);
	setTopLeft("adventure/arbalistic", 13, 3);
	setTopLeft("adventure/craft_decorated_pot_using_only_sherds", 15, 3);
	setTopLeft("adventure/adventuring_time", 16, 3);
	setTopLeft("adventure/play_jukebox_in_meadows", 17, 3);
	setTopLeft("adventure/walk_on_powder_snow_with_leather_boots", 18, 3);
	setTopLeft("adventure/spyglass_at_dragon", 2, 4);
	setTopLeft("adventure/very_very_frightening", 3, 4);
	setTopLeft("adventure/sniper_duel", 4.5, 4);
	setTopLeft("adventure/bullseye", 5.5, 4);
}

function placeHusbandry() {
	setTopLeft("husbandry/root", 6.5, 1);
	setTopLeft("husbandry/safely_harvest_honey", 1, 2);
	setTopLeft("husbandry/breed_an_animal", 2, 2);
	setTopLeft("husbandry/allay_deliver_item_to_player", 3, 2);
	setTopLeft("husbandry/ride_a_boat_with_a_goat", 4, 2);
	setTopLeft("husbandry/tame_an_animal", 5, 2);
	setTopLeft("husbandry/make_a_sign_glow", 6, 2);
	setTopLeft("husbandry/fishy_business", 7, 2);
	setTopLeft("husbandry/silk_touch_nest", 8, 2);
	setTopLeft("husbandry/tadpole_in_a_bucket", 9, 2);
	setTopLeft("husbandry/obtain_sniffer_egg", 10, 2);
	setTopLeft("husbandry/plant_seed", 11.5, 2);
	setTopLeft("husbandry/wax_on", 1, 3);
	setTopLeft("husbandry/bred_all_animals", 2, 3);
	setTopLeft("husbandry/allay_deliver_cake_to_note_block", 3, 3);
	setTopLeft("husbandry/complete_catalogue", 5, 3);
	setTopLeft("husbandry/tactical_fishing", 7, 3);
	setTopLeft("husbandry/leash_all_frog_variants", 9, 3);
	setTopLeft("husbandry/feed_snifflet", 10, 3);
	setTopLeft("husbandry/balanced_diet", 11, 3);
	setTopLeft("husbandry/obtain_netherite_hoe", 12, 3);
	setTopLeft("husbandry/wax_off", 1, 4);
	setTopLeft("husbandry/axolotl_in_a_bucket", 7, 4);
	setTopLeft("husbandry/froglights", 9, 4);
	setTopLeft("husbandry/plant_any_sniffer_seed", 10, 4);
	setTopLeft("husbandry/kill_axolotl_target", 7, 5);
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