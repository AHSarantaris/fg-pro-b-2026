# Programmering B · Frederikssund Gymnasium

Simpelt kursussite med en kort introduktion og en ugeplan over forløbene.

## Struktur

```
fg-pro-b-2026/
├─ index.html        ← Forside: intro + ugeplan
├─ css/
│  └─ site.css       ← Al styling
├─ README.md
└─ lektion01/        ← Slideshow 1 (Reveal.js)
   ├─ index.html · main.js · styles.css · variables.css · images/
```

Forsiden er én tabel, hvor **forløbene (F1–F12) er overkategorier** (markerede
gruppe-rækker) og **ugerne er rækker** med link til slides i kolonnen "Slides".

## Tilføj slides til en uge

Find ugen i `index.html` og udskift `<span class="muted">–</span>` i Slides-kolonnen
med et link:

```html
<tr><td class="uge-col">2</td><td><a href="lektion02/index.html">Lektion 2 →</a></td></tr>
```

## Tilføj en ny lektion

1. Kopiér mappen `lektion01/` til `lektion02/`.
2. Erstat indholdet i `lektion02/index.html` og opdater titel samt billeder i `lektion02/images/`.
3. Tilføj et link i **Slides**-kolonnen på de relevante uger (se ovenfor).

## Tilføj et nyt forløb

Indsæt en gruppe-række fulgt af sine uger i `<tbody>`:

```html
<tr class="forlob"><th colspan="2">F13 · Mit nye forløb</th></tr>
<tr><td class="uge-col">31</td><td><span class="muted">–</span></td></tr>
```

## Kør lokalt

Åbn blot `index.html` i en browser – der er ikke behov for at bygge noget.
Reveal.js, plugins (`reveal.js-menu`, `reveal.js-multimodal`) og qrcode.js hentes
alle via CDN i slide-decket, så der er ingen runtime-afhængighed af `node_modules`.
`node_modules/` bruges kun af npm under udvikling (uaktuel for denne side, men
skadeløs) og er ignoreret af git via `.gitignore`.

## Deploy til GitHub Pages

Alle stier er relative, så sitet virker både ved projekt-sider
(`https://<brugernavn>.github.io/fg-pro-b-2026/`) og ved root-domaener.

1. Push ændringerne til GitHub (`origin/main`).
2. I repoen: **Settings → Pages**.
3. Sæt **Source** = `Deploy from a branch`, **Branch** = `main`, **Folder** = `/ (root)`.
4. Gem – GitHub bygger siden på et par minutter.