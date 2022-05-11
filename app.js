// import functions and grab DOM elements
import { getZodiac } from '../fetch-util.js';
import { renderZodiac } from './utils.js';

const zodiacsEl = document.getElementById('zodiacs');

async function loadData() {
    const zodiacs = await getZodiac();

    for (let zodiac of zodiacs) {
        const zodiacDiv = renderZodiac(zodiac);
        zodiacsEl.append(zodiacDiv);
    }
}

loadData();