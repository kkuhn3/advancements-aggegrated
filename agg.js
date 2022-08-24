let data = {};
let userIdToName = {};

async function loadContent() {
	const allAdvancementsRes = await fetch('./static/1_19_2.json', {
		method: 'GET'
	});
	const allAdvancements = await allAdvancementsRes.json();
	const loFilesRes = await fetch('./list.php', {
		method: 'GET'
	});
	const filesText = await loFilesRes.text();
	const loFiles = JSON.parse(filesText.substring(0, filesText.length-1));
	for(let i = 0; i < loFiles.length; i++) {
		const fileName = loFiles[i];
		const file = await fetch(fileName, {
			method: 'GET'
		});
		const json = await file.json();
		const worldName = fileName.split("/")[1];
		if(!data[worldName]) {
			data[worldName] = {};
			data[worldName].all = {};
		}
		const userId = fileName.split("/")[3].slice(0, -5);
		data[worldName][userId] = {};
		for(const advancement in allAdvancements) {
			const advancementTag = advancement.split(":")[1];
			if(!data[worldName][userId][advancementTag]) {
				data[worldName][userId][advancementTag] = {};
			}
			if(!data[worldName].all[advancementTag]) {
				data[worldName].all[advancementTag] = {};
			}
			let doneCount = 0;
			let totalCount = 0;
			for(const requirement in allAdvancements[advancement].criteria) {
				totalCount++;
				if(!json[advancement]) {
					data[worldName][userId][advancementTag][requirement] = 0;
				}
				else if(!json[advancement].criteria[requirement]) {
					data[worldName][userId][advancementTag][requirement] = 0;
				}
				else {
					doneCount++;
					data[worldName][userId][advancementTag][requirement] = 1;
				}
			}
			data[worldName][userId][advancementTag].done = doneCount / totalCount;
			data[worldName].all[advancementTag][userId] = doneCount / totalCount;
			if(!json[advancement]) {
				data[worldName][userId][advancementTag].done = 0;
			}
			else {
				if(json[advancement].done) {
					data[worldName][userId][advancementTag].done = 1;
					data[worldName].all[advancementTag][userId] = 1;
				}
			}
		}
	}
	addOptiontoWorldSel(Object.keys(data));
}

function addOptiontoWorldSel(loWorldNames) {
	const sel = document.getElementById("worldSel");
	for(let i = 0; i < loWorldNames.length; i++) {
		let option = document.createElement("option");
		option.text = loWorldNames[i];
		option.value = loWorldNames[i];
		sel.add(option);
	}
}

async function loadUserIdToName() {
	const whitelistRes = await fetch('./static/whitelist.json', {
		method: 'GET'
	});
	const json = await whitelistRes.json();
	for(let i = 0; i < json.length; i++) {
		userIdToName[json[i].uuid] = json[i].name;
	}
	userIdToName["all"] = "All";
}