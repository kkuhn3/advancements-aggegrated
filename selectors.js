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
	updateNodes(worldName, "all");
}

function updateNodes(worldName, userId) {
	const nodes = document.getElementsByClassName("node");
	for(node of nodes) {
		if(data[worldName][userId][node.id].done === 1) {
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
				totalCount++;
				if(data[worldName][userId][node.id][requirement] === 1) {
					doneCount++;
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
	}
}

function setNodeBackground(node, color) {
	node.style.background = "url('images/"+node.id+"'), "+color+";";
}

function playerUpdate(userId) {
	updateNodes(worldSel.value, userId);
}