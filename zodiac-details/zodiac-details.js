import { getZodiacById } from '../fetch-util.js';
import { renderZodiacList } from '../utils.js';

const zodiacDetailContainer = document.getElementById('zodiac-detail-container');

async function loadData() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const zodiacz = await getZodiacById(id);
    const zodiacInfo = renderZodiacList(zodiacz);

    zodiacDetailContainer.append(zodiacInfo);
}
loadData();