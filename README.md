# Henkilöbrändi-sivusto

Tämä on React + Vite -projekti, joka esittelee henkilöbrändiäsi ja tarjoaa CV-latauslinkin.

## Käyttöönotto

1. Asenna riippuvuudet:
   ```bash
   npm install
   ```
2. Käynnistä kehityspalvelin:
   ```bash
   npm run dev
   ```

## Rakenne

- `src/App.tsx` sisältää henkilöbrändin sisältösivun ja AI-agentin kysymys-vastausosioita.
- `src/styles.css` sisältää sivun tyylit.
- `src/content/JariPicture.jpg` ja `src/content/JTY_CV_ENG.pdf` ovat projektissa käytettävät media- ja CV-tiedostot.

## Muutosohjeet

- Korvaa `src/App.tsx`-tiedoston profiilitekstit omilla tiedoillasi.
- Lisää oikea `cv.pdf` tiedosto `public`-kansioon.
- Voit laajentaa AI-agentin toiminnallisuutta myöhemmin omalla backendillä tai OpenAI-integraatiolla.
