function launch() {
	let url = "../?"
	if (worldSel.value) {
		url = url + "&w=" + worldSel.value;
	}
	if (isArch.value) {
		url = url + "&a=true";
	}
	url = url.replace("?&", "?");
	window.open(url, "_self");
}

async function loadWorlds() {
	const loFilesRes = await fetch('../list.php', {
		method: 'GET'
	});
	const filesText = await loFilesRes.text();
	const loFiles = JSON.parse(filesText.substring(0, filesText.length-1));
	let addedWorlds = [];
	for (let i = 0; i < loFiles.length; i++) {
		const worldName = loFiles[i].split("/")[1];
		if (!addedWorlds.includes(worldName)) {
			let opt = document.createElement('option');
			opt.value = worldName;
			opt.innerHTML = worldName;
			worldSel.appendChild(opt);
			addedWorlds.push(worldName);
		}
	}
}