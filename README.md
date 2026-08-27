# Far – 80 år

Denne mappen er klar for GitHub Pages.

## Filene

- `index.html` – selve siden. Du trenger vanligvis ikke redigere denne.
- `content.js` – **her redigerer du innholdet**.
- `style.css` – farger, størrelser, layout og design.
- `script.js` – funksjonaliteten på siden.
- `pappa.png` – bildet på forsiden.
- `.nojekyll` – for GitHub Pages.

## Legge inn YouTube-spillelister

Åpne `content.js`.

Helt øverst finner du:

```js
const youtubePlaylists = {
  "40": "",
  "50": "",
  "60": "",
  "70": "",
  "80": "",
  "90": "",
  "00": "",
  "10": "",
  "20": ""
};
```

Lim spillelistelenken mellom anførselstegnene.

Eksempel:

```js
"70": "https://www.youtube.com/playlist?list=DIN_SPILLELISTE_ID",
```

Lagre/commit filen. GitHub Pages oppdateres automatisk.

## Endre en milepæl

I `content.js`, søk etter årstallet, for eksempel:

```js
"year": 1969
```

Der kan du endre `title`, `text`, kilde og sanger.

## Endre musikkhistorien

I `content.js`, søk etter for eksempel:

```js
"label": "1970-tallet"
```

Da finner du teksten om disco, punk og hip-hop.

## Endre priser

Søk etter:

```js
const priceItems
```

## Publisering

Last opp alle filene i denne mappen til roten av GitHub-repoet `Far`.
GitHub Pages kan fortsatt bruke `main` + `/(root)`.

Den offentlige adressen kan fortsatt være:

`https://sjipo.github.io/Far/`

Så lenge repo-navnet og GitHub Pages-oppsettet ikke endres, trenger QR-koden ikke endres.
