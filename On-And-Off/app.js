const btn = document.querySelector(".btn");
const bulb = document.querySelector(".bulb");
const body = document.body;

const allTexts = [
    "I miss you",
    "Akin ka na lang",
    "Pogi si Dave Lazarte",
    "Yawa 3:00 AM ko nahuman ani",
    "Alam mo ba girl",
    "Kuya doc",
    "I miss my cutiepatootie",
    "Suggest unsay ibutang diri",
    // Add more text options as needed
];

let remainingTexts = shuffle([...allTexts]); // Shuffle the array initially

btn.addEventListener("click", () => {
    body.classList.toggle("on");

    const isOn = body.classList.contains("on");

    // Check if the text element already exists
    const textElement = document.querySelector(".on-text");

    if (isOn) {
        if (remainingTexts.length > 0) {
            // If there are remaining texts, add a random text inside the bulb
            const newText = remainingTexts.pop();
            const newTextElement = document.createElement("div");
            newTextElement.className = "on-text";
            newTextElement.textContent = newText;
            bulb.appendChild(newTextElement);
        } else {
            // If all texts have been shown, reset the array
            remainingTexts = shuffle([...allTexts]);
        }
    } else if (!isOn && textElement) {
        // If the light is turned off and text exists, remove text
        textElement.remove();
    }
});

// Function to shuffle an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
