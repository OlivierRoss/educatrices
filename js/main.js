let decembre = 10;

window.onload = function () {
	for(let i in contenus) {
		let jour = parseInt(i) + 1;
		if(new Date(2023, decembre, jour) < new Date()) {
			let div = document.createElement("div");
			div.className = "post-review";
			div.innerHTML = `
				<h2 class="post-title" style="font-size: 25px"> ${contenus[i].desc}</h2>
				<p class="post-meta">Créé par les parents le ${jour} décembre 2023</p>
			`;
			document.querySelector("#posts").appendChild(div);
		}
	}
}

