import type { CampsiteConfig } from "../types";

/**
 * Stellplatz am Ossiacher See — Bodensdorf, Kärnten (seestellplatz.at).
 * Alle Texte/Fakten belegt aus dem Scrape (raw/pages/*.md, Stand 2026-06).
 * Bilder = ausschließlich eigene Fotos des Platzes in /public/campsites/seestellplatz/
 * (3 Stock-/Pexels-Motive der Quelle wurden bewusst NICHT verwendet).
 *
 * EHRLICH:
 * - Es ist ein WOHNMOBIL-/CARAVAN-STELLPLATZ (kein voller Campingplatz, keine
 *   Mietunterkünfte) → mobilheime / kinder / aktivitaeten ausgelassen.
 * - Der Platz liegt NICHT direkt am See, sondern ~250 m / 5 Gehminuten entfernt
 *   ("nahe dem Ossiacher See") — nie als "direkt am Wasser" geframt.
 * - Preise = reale Werte von der Preisseite (€ 25 / € 28 für 2 Pers., all-in).
 *   Die Quelle führt zusätzlich eine ältere Saison-2023-Tabelle (€ 10–19) und
 *   einen Fließtext (€ 15/Tag) — Widersprüche sind im REPORT für den Menschen
 *   markiert. pricesArePlaceholder bleibt false (echte Preise vorhanden).
 * - Keine Auszeichnung auf der Quelle → awards leer.
 */
const IMG = "/campsites/seestellplatz";

export const seestellplatz: CampsiteConfig = {
  name: "Stellplatz am Ossiacher See",
  shortName: "Seestellplatz",
  slug: "seestellplatz",
  ort: "Bodensdorf am Ossiacher See",
  region: "Kärnten",
  brandKind: "Wohnmobil-Stellplatz",
  see: "Ossiacher See",
  regionLong: "Bodensdorf · Ossiacher See · Kärnten · Österreich",

  claim: "Ihr Stellplatz nahe dem Ossiacher See",
  claimEmphasis: "nahe dem Ossiacher See",
  intro:
    "Gemütlich übernachten im idyllischen Obstgarten – nur fünf Gehminuten vom Ossiacher See. Wohnmobile und Caravane jeder Größe sind willkommen, täglich von 8 bis 21 Uhr.",

  logo: { src: `${IMG}/logo-seestellplatz.png`, alt: "Stellplatz am Ossiacher See – Logo" },

  statement: {
    text: "Hier gönnen sich Wohnmobil und Caravan eine Auszeit – fünf Gehminuten vom Ossiacher See, mitten in Kärnten.",
    emphasis: "eine Auszeit",
  },

  pillars: [
    {
      title: "Genug Platz für jeden",
      text: "Stellplätze für Wohnwägen und Caravane in beliebiger Länge und Größe – nach Verfügbarkeit ist für jeden Platz.",
      image: { src: `${IMG}/stellplatz-wiese.webp`, alt: "Weitläufige Stellplatz-Wiese mit Obstbäumen und Bergblick in Bodensdorf" },
    },
    {
      title: "Gasthof Leo direkt nebenan",
      text: "Direkt neben dem Stellplatz lädt der Gasthof Leo am See zu einer warmen Mahlzeit – so lässt sich der Sommer genießen.",
      image: { src: `${IMG}/gasthof-leo.webp`, alt: "Gasthof zum Leo mit Terrasse direkt neben dem Stellplatz" },
    },
    {
      title: "Kaffee, Kuchen & Eis",
      text: "Kaffee und Kakao, Kuchen und Desserts, Eis und gekühlte Getränke – auf der Terrasse des Gasthof Leo gleich nebenan.",
      image: { src: `${IMG}/gasthof-leo-terrasse.webp`, alt: "Sonnige Terrasse des Gasthof Leo mit Sonnenschirmen" },
    },
  ],

  usps: [
    "Frischwasser & Entsorgung inklusive",
    "Orts- & Nächtigungstaxe inklusive",
    "WC im Gasthof Leo",
    "20 % Rabatt im Fahrradverleih Leo",
    "Nur 5 Gehminuten zum Ossiacher See",
    "Stromanschlüsse am Platz",
    "Täglich 8–21 Uhr geöffnet",
  ],

  trust: {
    heading: "Worauf Sie sich bei uns verlassen können",
    headingEmphasis: "verlassen",
    intro:
      "Persönlich geführt von Christian Toff, faire Tagespreise inklusive Orts- und Nächtigungstaxe und eine ruhige Lage im Obstgarten – nur fünf Gehminuten vom Ossiacher See, mit dem Gasthof Leo direkt nebenan.",
  },

  // Keine belegbare Auszeichnung auf der Quelle → ehrlich leer (Band zeigt nur USP-Pills).
  awards: [],

  // Belegte Saison-Monate aus der Preisliste (Quelle: "Saison 2023" → Low Season
  // "Juni und September", High Season "Juli und August"). Juni = frühester,
  // September = spätester benannter Monat; kein anderer Eröffnungsmonat belegt.
  saison: { von: "Juni", bis: "September" },

  hero: {
    aerial: { src: `${IMG}/stellplatz-ueberblick.webp`, alt: "Überblick über den Stellplatz am Ossiacher See mit Wohnmobilen und Bergpanorama" },
  },

  camping: {
    heading: "Ihr Stellplatz in Bodensdorf",
    intro:
      "Ruhige Stellplätze im idyllischen Obstgarten für Wohnmobile und Caravane jeder Größe. Passende Stromanschlüsse (6, 10 und 16 Ampere) sind vorhanden, eine WC-Anlage steht im Gasthof Leo bereit, Duschen im Gästehaus gegen einen kleinen Unkostenbeitrag. Täglich von 8 bis 21 Uhr geöffnet.",
    features: [
      {
        title: "Ruhe im Obstgarten",
        text: "Bei uns genießen Sie Ruhe auf Ihrem Stellplatz im idyllischen Obstgarten – und erleben Action rund um den See.",
        image: { src: `${IMG}/stellplatz-obstgarten.webp`, alt: "Wohnmobil unter Obstbäumen auf der Stellplatz-Wiese" },
      },
      {
        title: "Herzlich willkommen",
        text: "Anmeldung ganz unkompliziert im Gasthof Leo oder telefonisch unter +43 664 870 33 15 – bei uns sind alle willkommen.",
        image: { src: `${IMG}/willkommen-schild.webp`, alt: "Willkommensschild Camping-Stellplatz mit Anmeldung im Gasthof Leo" },
      },
      {
        title: "Stellplatz mit Bergblick",
        text: "Stellplätze mit Blick auf die umliegenden Berge und die Gerlitzen – Natur in ihrer Schönheit erleben.",
        image: { src: `${IMG}/stellplatz-wiese.webp`, alt: "Weitläufige Stellplatz-Wiese im Obstgarten mit Blick auf die Berge rund um den Ossiacher See" },
      },
    ],
  },

  anreise: {
    heading: "So finden Sie uns",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die Autobahn A10: rund 9 km bzw. 10 Minuten von der Abfahrt bis zum Stellplatz. Adresse: Bahnhofstraße 10, 9551 Bodensdorf am Ossiacher See.",
      },
      {
        title: "Zu Fuß erreichbar",
        text: "Nur rund 250 m bzw. fünf Gehminuten zum Ossiacher See; Supermarkt (240 m), Bäckerei (210 m) und Bank (220 m) sind fußläufig erreichbar.",
      },
      {
        title: "Anmeldung & Kontakt",
        text: "Anmeldung im Gasthof Leo oder telefonisch unter +43 664 870 33 15. Täglich von 8 bis 21 Uhr geöffnet.",
      },
    ],
  },

  galerie: {
    heading: "Ein Platz zum Wohlfühlen",
    headingEmphasis: "Wohlfühlen",
    intro:
      "Obstgarten, Bergblick und der Gasthof Leo gleich nebenan – ein paar Eindrücke vom Stellplatz in Bodensdorf am Ossiacher See.",
    tag: "Juni bis September",
    images: [
      { src: `${IMG}/stellplatz-ueberblick.webp`, alt: "Überblick über den Stellplatz am Ossiacher See mit Wohnmobilen und Bergpanorama" },
      { src: `${IMG}/stellplatz-obstgarten.webp`, alt: "Wohnmobil unter Obstbäumen auf dem Stellplatz" },
      { src: `${IMG}/gasthof-leo.webp`, alt: "Gasthof zum Leo neben dem Stellplatz" },
      { src: `${IMG}/gasthof-leo-terrasse.webp`, alt: "Terrasse des Gasthof Leo mit Sonnenschirmen" },
    ],
  },

  booking: {
    heading: "Verfügbarkeit & Anfrage",
    intro:
      "Stellplatz frei? Ein kurzer Anruf genügt – Christian Toff und das Team vom Gasthof Leo bestätigen Ihnen Ihren Platz am Ossiacher See.",
    pricesArePlaceholder: false,
    priceNote:
      "Stellplatz für 2 Personen/Nacht – inkl. Frischwasser, Entsorgung sowie Orts- & Nächtigungstaxe. Jede weitere Person € 3, Kleinkinder bis 4 J. frei. Strom € 3–9 je nach Anschluss, Dusche € 2, Hund € 2. Preise laut Website – Stand bitte beim Platz bestätigen.",
    highlight: {
      title: "Ortstaxe inklusive",
      text: "Im Stellplatzpreis enthalten: Frischwasser, Entsorgung, die WC-Anlage im Gasthof Leo sowie die Orts- und Nächtigungstaxe.",
    },
    categories: [
      // Reale Preisliste seestellplatz.at: € 25 Stellplatz (2 Pers., all-in), € 28 Auto mit Wohnwagen; jede weitere Person € 3.
      { id: "stellplatz", label: "Stellplatz", perNight: 25, perExtraGuest: 3 },
      { id: "auto-wohnwagen", label: "Auto mit Wohnwagen", perNight: 28, perExtraGuest: 3 },
    ],
  },

  kontakt: {
    tel: "+43 664 870 33 15",
    telHref: "tel:00436648703315",
    mail: "anfrage@seestellplatz.at",
    adresse: "Bahnhofstraße 10 · 9551 Bodensdorf am Ossiacher See · Kärnten",
    coords: { lat: 46.682073, lng: 13.972981 },
  },

  languages: ["DE"],

  nav: [
    {
      label: "Stellplatz",
      href: "#camping",
      children: [
        { label: "Ruhe im Obstgarten", href: "#camping" },
        { label: "Platz für jeden", href: "#camping" },
        { label: "Strom & Sanitär", href: "#camping" },
      ],
    },
    { label: "Galerie", href: "#galerie" },
    {
      label: "Preise",
      href: "#booking",
      children: [
        { label: "Stellplatz-Preise", href: "#booking" },
        { label: "Saison", href: "#booking" },
      ],
    },
    {
      label: "Anreise & Kontakt",
      href: "#anreise",
      children: [
        { label: "Anreise", href: "#anreise" },
        { label: "Kontakt", href: "#anreise" },
      ],
    },
  ],
};

export default seestellplatz;
