export function renderZodiac(zodiac) {
    console.log(zodiac);
    const div = document.createElement('div');
    div.classList.add('zodiac');

    const h1 = document.createElement('h1');
    h1.textContent = zodiac.name;

    const img = document.createElement('img');
    img.src = zodiac.image;

    const p = document.createElement('p');
    p.textContent = `${zodiac.name} are the ${zodiac.number} air sign of the zodiac. Under the tropical zodiac, the sun transits this sign between ${zodiac.birth_range}. ${zodiac.name} are ruled by ${zodiac.ruling_planet}, and their symbol is ${zodiac.symbol}`;

    const a = document.createElement('a');
    a.href = `./zodiac-details/?id=${zodiac.id}`;

    div.append(h1, img, p);
    a.append(div);
    return a;
}