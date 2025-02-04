const imageArray = [
	"/assets/img/horse1",
	"/assets/img/horse2",
	"/assets/img/horse3",
	"/assets/img/horse4",
	"/assets/img/horse5",
	"/assets/img/horse6",
	"/assets/img/horse7",
	"/assets/img/horse8",
	"/assets/img/horse9",
	"/assets/img/horse10",
	"/assets/img/horse11",
	"/assets/img/horse12",
	"/assets/img/horse13",
	"/assets/img/horse14",
	"/assets/img/horse15",
	"/assets/img/horse16",
	"/assets/img/horse17",
	"/assets/img/horse18",
	"/assets/img/horse19",
	"/assets/img/horse20",
	"/assets/img/horse21",
	"/assets/img/horse22",
	"/assets/img/horse23",
	"/assets/img/horse24"
];

const image = document.querySelector("img");
const source = document.querySelector("source");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
	let randomNum = Math.floor(Math.random() * array.length); 
	image.setAttribute("src", array[randomNum] + "-m" + ".jpg");
	source.setAttribute("srcset", array[randomNum] + ".jpg");
}
