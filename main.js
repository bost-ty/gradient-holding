const body = document.getElementById("body");
const bs = body.style;

const display = document.getElementById("display");
// Get query param from URL, set display text to value
display.textContent = window.location.search.substring(1).split("+").join(" ");

let j = 50;
let k = 0;

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

async function percentChanger() {
	while (j == 50) {
		if (j == 50) {
			for (j = 50; j < 66; j++) {
				await sleep(100);
			}
		}
		if (j == 66) {
			for (j = 66; j > 50; j--) {
				await sleep(100);
			}
		}
	}
}

async function rotator() {
	for (k = 0; k <= 360; k++) {
		await sleep(200);
		if (k == 360) {
			k = 0;
		}
	}
}

async function darkChanger() {
	for (let i = 0; i < 361; i++) {
		prop = "hsla(" + i + ",75%,70%,1)";
		temp = i + 30;
		prop2 = "hsla(" + temp + ",65%,70%,1)";
		temp = temp + 20;
		prop3 = "hsla(" + temp + ",55%,70%,1)";
		prop4 = k + "deg";
		prop5 = j + "%";
		await sleep(100);

		bs.setProperty("--dark", prop);
		bs.setProperty("--medium", prop2);
		bs.setProperty("--light", prop3);
		bs.setProperty("--angle", prop4);
		bs.setProperty("--perc", prop5);

		if (i == 360) {
			i = 0;
		}
	}
}

async function main() {
	rotator();
	darkChanger();
	percentChanger();
}

main();
