# Packaging Website Translation Guide (English → Italian)

This document explains how to translate the Packaging site from English to Italian safely and consistently.

## Goal

Convert all **user-facing website copy** from English to Italian while keeping:

- code logic unchanged
- routes unchanged
- variable names unchanged
- styling unchanged
- SEO coherent and localized

This is **not** a full i18n setup.  
The site will be **Italian-only** after this migration.

---

## Scope

Translate only the text visible to users, including:

- navigation labels
- hero headings
- section titles
- body paragraphs
- buttons / CTAs
- form labels
- input placeholders
- validation messages
- toast / success / error messages shown to users
- footer text
- FAQ content
- metadata titles and descriptions
- image alt text
- Open Graph / social preview text

Do **not** translate:

- variable names
- function names
- component names
- import paths
- route paths / slugs
- CSS / Tailwind classes
- API field names
- database keys
- enum values used in logic
- internal status strings unless they are rendered to users

---

## Important Rule

Translate **meaning**, not just words.

The site is a **packaging website**, so the Italian copy should sound:

- professional
- industrial / B2B appropriate
- clear
- trustworthy
- natural to an Italian-speaking client

Avoid awkward literal translation.

Example:

- `Request a Quote` → `Richiedi un preventivo`
- `Learn More` → `Scopri di più`
- `Sustainable Packaging Solutions` → `Soluzioni di packaging sostenibile`

For marketing copy, prefer **natural Italian phrasing** over word-for-word translation. Localization guidance emphasizes adapting the message so it sounds native rather than mechanically translated. :contentReference[oaicite:0]{index=0}

---

## Translation Style Guidelines

### Tone

Use a tone that is:

- professional
- concise
- modern
- credible
- suitable for manufacturing / packaging clients

### Vocabulary

Prefer common Italian business and packaging terminology such as:

- packaging
- imballaggio / imballaggi
- confezionamento
- soluzioni su misura
- materiali sostenibili
- qualità
- filiera
- produzione
- logistica
- preventivo
- assistenza
- contattaci

### CTA Examples

Recommended CTA style:

- `Contact Us` → `Contattaci`
- `Get in Touch` → `Mettiti in contatto con noi`
- `Request a Quote` → `Richiedi un preventivo`
- `Discover More` → `Scopri di più`
- `View Products` → `Scopri i prodotti`

---

## File Handling Rules

When editing files:

1. Change only hardcoded **user-visible English text**
2. Preserve JSX / TSX / HTML structure
3. Preserve formatting where possible
4. Do not rename props, functions, variables, or exported symbols
5. Do not alter business logic
6. Do not translate comments unless explicitly requested
7. Do not translate JSON keys unless they are visible content keys used directly in UI output

---

## Safe Translation Targets

Examples of text that **should** be translated:

```tsx
<h1>Smart Packaging for Modern Brands</h1>
<button>Request a Quote</button>
<input placeholder="Enter your email" />
<p>We create sustainable packaging solutions for food, retail, and e-commerce.</p>
```
