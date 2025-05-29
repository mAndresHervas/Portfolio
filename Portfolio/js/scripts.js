const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');

const toggleColors = document.getElementById('toggle-colors');

const rootStyles = document.documentElement.style;

const flagsElement = document.getElementById('flags');

const textsToChange = document.querySelectorAll('[data-section]');

const bromeraImage = document.getElementById('bromera-image');

const changueLanguage = async language => {
    const requestJson = await fetch(`./languages/${language}.json`);
    const texts = await requestJson.json();

    for (const textToChange of textsToChange) {

        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;
        textToChange.innerHTML = texts[section][value];
    }
}

flagsElement.addEventListener('click', (e) => {
    changueLanguage(e.target.parentElement.dataset.language);
});