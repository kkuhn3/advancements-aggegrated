function tabUpdate(cat) {
	hideAllCategories();
	document.getElementById(cat).style.display = "block";
}

function hideAllCategories() {
	const cats = document.getElementsByClassName("category");
	for(cat of cats) {
		cat.style.display = "none";
	}
}

function worldUpdate(worldName) {
	if (worldName === "") {
		alert("No valid world selected.");
	}
	else {
		playerSel.options.length = 0;
		let allOption = document.createElement("option");
		allOption.text = "All";
		allOption.value = "all";
		playerSel.add(allOption);
		for(const userId in data[worldName]) {
			if(userId !== "all" && userIdToName[userId]) {
				let option = document.createElement("option");
				option.text = userIdToName[userId];
				option.value = userId;
				playerSel.add(option);
			}
		}
		const urlSearch = new URLSearchParams(window.location.search);
		updateNodes(worldName, "all", urlSearch.get("isArchipelago"));
	}
}

const archExcludedNodes = [
	// hard
	"adventure/very_very_frightening", 
	"nether/all_potions",
	"husbandry/bred_all_animals",
	"adventure/two_birds_one_arrow",
	"adventure/arbalistic",
	"adventure/kill_all_mobs",
	"nether/create_full_beacon",
	"husbandry/balanced_diet",
	"nether/uneasy_alliance",
	"nether/netherite_armor",
	"husbandry/complete_catalogue",
	"adventure/lightning_rod_with_villager_no_fire",
	"adventure/play_jukebox_in_meadows",
	"adventure/trade_at_world_height",
	"husbandry/leash_all_frog_variants",
	"husbandry/froglights",
	// unreasonable
	"nether/all_effects",
	"adventure/adventuring_time",
	// ender dragon
	"end/kill_dragon",
	"end/dragon_egg",
	"end/respawn_dragon",
	"end/dragon_breath",
	"adventure/kill_all_mobs",
	"adventure/spyglass_at_dragon",
	// new as of 1.20.1, not yet in archipelago logic
	"adventure/read_power_of_chiseled_bookshelf",
	"adventure/trim_with_any_armor_pattern",
	"adventure/trim_with_all_exclusive_armor_patterns",
	"adventure/salvage_sherd",
	"adventure/craft_decorated_pot_using_only_sherds",
	"husbandry/obtain_sniffer_egg",
	"husbandry/feed_snifflet",
	"husbandry/plant_any_sniffer_seed"
]

function updateNodes(worldName, userId, isArchipelago) {
	const nodes = document.getElementsByClassName("node");
	for(node of nodes) {
		if(isArchipelago && archExcludedNodes.includes(node.id)) {
			node.style.backgroundColor = "grey";
		}
		else if(data[worldName][userId][node.id].done === 1) {
			node.style.backgroundColor = "green";
		}
		else if(data[worldName][userId][node.id].done > 0) {
			node.style.backgroundColor = "yellow";
		}
		else if(data[worldName][userId][node.id].done === 0) {
			node.style.backgroundColor = "red";
		}
		else {
			let doneCount = 0;
			let totalCount = 0;
			for(const requirement in data[worldName][userId][node.id]) {
				if(userIdToName[requirement]) {
					totalCount++;
					if(data[worldName][userId][node.id][requirement] === 1) {
						doneCount++;
					}
				}
			}
			if(totalCount === doneCount) {
				node.style.backgroundColor = "green";
			}
			else if(doneCount > 0) {
				node.style.backgroundColor = "yellow";
			}
			else {
				node.style.backgroundColor = "red";
			}
		}
		
		let info = document.getElementById("info:"+node.id);
		const advancement = advancements[node.id];
		info.innerHTML = 
			"<span><b>" + advancement.name + "<b></span><br>" +
			"<span><I>" + advancement.description + "<I></span><br>" +
			"<br>";
		for(const requirement in data[worldName][userId][node.id]) {
			let color = "red";
			if(data[worldName][userId][node.id][requirement] === 1) {
				color = "green";
			}
			else if(data[worldName][userId][node.id][requirement] > 0) {
				color = "yellow";
			}
			if(userId === "all") {
				if(userIdToName[requirement]) {
					info.innerHTML = info.innerHTML + '<span style="color: ' + color + ';">&nbsp;-&nbsp;' + userIdToName[requirement] + "<span><br>";
				}
			}
			else if(requirement !== "done") {
				info.innerHTML = info.innerHTML + '<span style="color: ' + color + ';">&nbsp;-&nbsp;' + requirement + "<span><br>";
			}
		}
	}
}

function playerUpdate(userId) {
	updateNodes(worldSel.value, userId);
}