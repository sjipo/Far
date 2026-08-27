// ============================================================
// 80 ÅR – INNHOLDET DU VANLIGVIS SKAL REDIGERE
// ============================================================
//
// Tips:
// 1. Skal du bare legge inn YouTube-spillelister? Bruk blokken rett under.
// 2. Skal du endre en historisk milepæl? Søk etter årstallet under MILEPÆLER.
// 3. Skal du endre musikkhistorien? Søk etter tiåret under MUSIKKHISTORIE.
// 4. Designet ligger i style.css. Det trenger du vanligvis ikke røre.
//
// ============================================================
// YOUTUBE-SPILLELISTER
// ============================================================
// Eksempel:
// "70": "https://www.youtube.com/playlist?list=DIN_ID",
//
// Du kan endre sangene inne på YouTube senere uten å endre denne filen.
// Behold bare den samme spillelisten/URL-en.

const youtubePlaylists = {
  "40": "", // 1946–1949 – lim inn YouTube-spillelisten mellom anførselstegnene
  "50": "", // 1950-tallet – lim inn YouTube-spillelisten mellom anførselstegnene
  "60": "", // 1960-tallet – lim inn YouTube-spillelisten mellom anførselstegnene
  "70": "", // 1970-tallet – lim inn YouTube-spillelisten mellom anførselstegnene
  "80": "", // 1980-tallet – lim inn YouTube-spillelisten mellom anførselstegnene
  "90": "", // 1990-tallet – lim inn YouTube-spillelisten mellom anførselstegnene
  "00": "", // 2000-tallet – lim inn YouTube-spillelisten mellom anførselstegnene
  "10": "", // 2010-tallet – lim inn YouTube-spillelisten mellom anførselstegnene
  "20": "", // 2020–2026 – lim inn YouTube-spillelisten mellom anførselstegnene
};


// ============================================================
// PRISER – 1946 VS. 2026
// ============================================================

const priceItems = [
  {
    "icon": "⛽",
    "name": "1 liter bensin",
    "old": "1946: ca. 0,45 kr",
    "now": "2026: ca. 21,50 kr"
  },
  {
    "icon": "🥛",
    "name": "1 liter melk",
    "old": "1946: ca. 0,32 kr",
    "now": "2026: ca. 23 kr"
  },
  {
    "icon": "📰",
    "name": "En avis",
    "old": "1946: ca. 0,20 kr",
    "now": "2026: ca. 45 kr"
  },
  {
    "icon": "🎟️",
    "name": "Kinobillett",
    "old": "1946: ca. 1,50 kr",
    "now": "2026: ca. 160 kr"
  }
];


// ============================================================
// MILEPÆLER – VERDEN, NORGE OG LIVET 1946–2026
// ============================================================
// Hver post har:
// year = årstall
// age = hvor gammel han var det året
// icon = lite symbol
// title = overskrift
// text = teksten på siden
// source/source_label = kildeknappen
// songs = to låter som vises når årstallet åpnes

const milestones = [
  {
    "year": 1946,
    "age": 0,
    "icon": "👶",
    "title": "30. august 1946 · historien begynner",
    "text": "Vår far blir født i et Norge preget av gjenreisning etter krigen. Radioen samler familiene, rasjonering er fortsatt en del av hverdagen, og verden er på vei inn i en helt ny tid.",
    "source": "https://snl.no/Norge_i_etterkrigstiden_-_1945%E2%80%931970",
    "source_label": "Store norske leksikon",
    "songs": [
      [
        "The Gypsy",
        "The Ink Spots"
      ],
      [
        "(Get Your Kicks on) Route 66",
        "Nat King Cole"
      ]
    ]
  },
  {
    "year": 1952,
    "age": 6,
    "icon": "❄️",
    "title": "Vinter-OL i Oslo",
    "text": "Oslo arrangerer vinter-OL. Hjalmar «Hjallis» Andersen blir en av de store norske heltene etter tre gull på skøyter.",
    "source": "https://ol.museum.no/om-olympiske-leker/vinterleker/oslo-1952",
    "source_label": "Norges Olympiske Museum",
    "songs": [
      [
        "Blue Tango",
        "Leroy Anderson"
      ],
      [
        "You Belong to Me",
        "Jo Stafford"
      ]
    ]
  },
  {
    "year": 1954,
    "age": 8,
    "icon": "📻",
    "title": "Radioen samler familien – og TV nærmer seg",
    "text": "Radioen er fortsatt et av hjemmets viktigste medier. Samtidig eksperimenterer NRK med fjernsyn, som snart skal forandre norske stuer.",
    "source": "https://info.nrk.no/rapporter/",
    "source_label": "NRK rapportarkiv",
    "songs": [
      [
        "Rock Around the Clock",
        "Bill Haley & His Comets"
      ],
      [
        "Mambo Italiano",
        "Rosemary Clooney"
      ]
    ]
  },
  {
    "year": 1957,
    "age": 11,
    "icon": "🛰️",
    "title": "Romalderen begynner",
    "text": "Sovjetunionen sender Sputnik 1 i bane – verdens første kunstige satellitt. Et lite radiosignal fra verdensrommet blir starten på romkappløpet.",
    "source": "https://www.nasa.gov/history/dawn-of-the-space-age/",
    "source_label": "NASA",
    "songs": [
      [
        "Jailhouse Rock",
        "Elvis Presley"
      ],
      [
        "That'll Be the Day",
        "Buddy Holly"
      ]
    ]
  },
  {
    "year": 1958,
    "age": 12,
    "icon": "🎸",
    "title": "Rock'n'roll blir ungdommens lyd",
    "text": "Elvis Presley, Chuck Berry, Little Richard og andre gjør rock'n'roll til et internasjonalt ungdomsfenomen. Musikk blir stadig tydeligere knyttet til identitet, klær og generasjonsforskjeller.",
    "source": "https://www.loc.gov/collections/songs-of-america/articles-and-essays/musical-styles/popular-songs-of-the-day/rock/",
    "source_label": "Library of Congress",
    "songs": [
      [
        "Johnny B. Goode",
        "Chuck Berry"
      ],
      [
        "Jailhouse Rock",
        "Elvis Presley"
      ]
    ]
  },
  {
    "year": 1960,
    "age": 14,
    "icon": "📺",
    "title": "TV flytter inn i norske hjem",
    "text": "NRK Fjernsynet åpnes offisielt. Et nytt møbel får plass i stua, og levende bilder begynner å samle familier rundt skjermen.",
    "source": "https://norskfolkemuseum.no/optimismens-tiar",
    "source_label": "Norsk Folkemuseum",
    "songs": [
      [
        "It's Now or Never",
        "Elvis Presley"
      ],
      [
        "Save the Last Dance for Me",
        "The Drifters"
      ]
    ]
  },
  {
    "year": 1961,
    "age": 15,
    "icon": "🚀",
    "title": "Det første mennesket i verdensrommet",
    "text": "Jurij Gagarin blir det første mennesket i bane rundt jorden. Ferden med Vostok 1 varer 108 minutter.",
    "source": "https://science.nasa.gov/resource/yuri-gagarin-first-human-in-space/",
    "source_label": "NASA",
    "songs": [
      [
        "Stand by Me",
        "Ben E. King"
      ],
      [
        "Runaway",
        "Del Shannon"
      ]
    ]
  },
  {
    "year": 1960,
    "age": 14,
    "icon": "🚗",
    "title": "Bilrasjoneringen oppheves",
    "text": "1. oktober 1960 blir restriksjonene på import av personbiler opphevet. Det fantes allerede mange biler på norske veier, men nå ble det langt enklere for folk flest å kjøpe bil. Bilholdet økte raskt gjennom 1960-årene.",
    "source": "https://www.ssb.no/transport-og-reiseliv/artikler-og-publikasjoner/bilen-ble-allemannseie-i-1960",
    "source_label": "SSB",
    "songs": [
      [
        "Twist and Shout",
        "The Isley Brothers"
      ],
      [
        "Return to Sender",
        "Elvis Presley"
      ]
    ]
  },
  {
    "year": 1965,
    "age": 19,
    "icon": "🎵",
    "title": "Beatlemania og en ny popgenerasjon",
    "text": "The Beatles er blant verdens største artister, og popmusikken blir stadig viktigere for ungdomskulturen. I Norge markerer også artister som Wenche Myhre seg sterkt.",
    "source": "https://rockheim.no/wenche-myhre",
    "source_label": "Rockheim",
    "songs": [
      [
        "Help!",
        "The Beatles"
      ],
      [
        "La meg være ung",
        "Wenche Myhre"
      ]
    ]
  },
  {
    "year": 1969,
    "age": 23,
    "icon": "🌕",
    "title": "Månelanding – og olje i Nordsjøen",
    "text": "Apollo 11 lander på månen. Samme år blir Ekofisk oppdaget i norsk sektor av Nordsjøen – to hendelser som på hver sin måte peker mot en ny tid.",
    "source": "https://www.nasa.gov/history/july-20-1969-one-giant-leap-for-mankind/",
    "source2": "https://www.norskpetroleum.no/en/facts/field/ekofisk/",
    "source_label": "NASA",
    "source_label2": "Norskpetroleum",
    "songs": [
      [
        "Come Together",
        "The Beatles"
      ],
      [
        "Suspicious Minds",
        "Elvis Presley"
      ]
    ]
  },
  {
    "year": 1972,
    "age": 26,
    "icon": "🗳️",
    "title": "Norge stemmer nei til EF",
    "text": "Folkeavstemningen om norsk medlemskap i EF engasjerer hele landet. Et flertall stemmer nei.",
    "source": "https://stortinget.no/no/Stortinget-og-demokratiet/Storting-og-regjering/Folkestyret/Folkeavstemninger/",
    "source_label": "Stortinget",
    "songs": [
      [
        "Heart of Gold",
        "Neil Young"
      ],
      [
        "Take Me Home, Country Roads",
        "John Denver"
      ]
    ]
  },
  {
    "year": 1975,
    "age": 29,
    "icon": "🏎️",
    "title": "Flåklypa Grand Prix kommer på kino",
    "text": "Ivo Caprinos «Flåklypa Grand Prix» har premiere og blir en norsk filmklassiker som generasjoner fortsatt kjenner igjen.",
    "source": "https://www.caprino.no/blank-3",
    "source_label": "Caprino",
    "songs": [
      [
        "Bohemian Rhapsody",
        "Queen"
      ],
      [
        "Reodors Ballade",
        "Sigmund Groven"
      ]
    ]
  },
  {
    "year": 1981,
    "age": 35,
    "icon": "💾",
    "title": "PC-en blir et hverdagsord",
    "text": "IBM lanserer Personal Computer 5150. Datamaskinen er på vei fra spesialrom og store virksomheter til vanlige kontorer og etter hvert hjem.",
    "source": "https://www.ibm.com/history/personal-computer",
    "source_label": "IBM",
    "songs": [
      [
        "In the Air Tonight",
        "Phil Collins"
      ],
      [
        "Don't Stop Believin'",
        "Journey"
      ]
    ]
  },
  {
    "year": 1982,
    "age": 36,
    "icon": "⛷️",
    "title": "«Hvor var du da Brå brakk staven?»",
    "text": "Under ski-VM i Oslo brekker Oddvar Brå staven på siste etappe av stafetten. Episoden blir et av de mest kjente øyeblikkene i norsk idrettshistorie.",
    "source": "https://www.skiforeningen.no/holmenkollen/artikler/staven-til-bra-er-tilbake/",
    "source_label": "Skiforeningen / Skimuseet",
    "songs": [
      [
        "Eye of the Tiger",
        "Survivor"
      ],
      [
        "Africa",
        "Toto"
      ]
    ]
  },
  {
    "year": 1985,
    "age": 39,
    "icon": "🇳🇴",
    "title": "Bobbysocks og a-ha setter Norge på popkartet",
    "text": "Bobbysocks vinner Eurovision med «La det swinge», mens a-ha får et internasjonalt gjennombrudd med «Take On Me».",
    "source": "https://eurovision.tv/sites/default/files/uploads/2023-04/EUROVISION%202023%20MEDIA%20HANDBOOK.pdf",
    "source_label": "Eurovision",
    "songs": [
      [
        "Take On Me",
        "a-ha"
      ],
      [
        "La det swinge",
        "Bobbysocks"
      ]
    ],
    "source2": "https://www.officialcharts.com/songs/a-ha-take-on-me/",
    "source_label2": "Official Charts"
  },
  {
    "year": 1989,
    "age": 43,
    "icon": "🌐",
    "title": "Berlinmuren faller – og nettet blir født",
    "text": "Berlinmuren åpnes 9. november. Samme år legger Tim Berners-Lee ved CERN fram ideen som skal bli World Wide Web.",
    "source": "https://www.berlin.de/en/history/8482274-8619314-opening-and-fall-of-the-berlin-wall.en.html",
    "source2": "https://home.cern/science/computing/the-birth-of-the-web/where-web-was-born/",
    "source_label": "Berlin.de",
    "source_label2": "CERN",
    "songs": [
      [
        "Like a Prayer",
        "Madonna"
      ],
      [
        "Another Day in Paradise",
        "Phil Collins"
      ]
    ]
  },
  {
    "year": 1994,
    "age": 48,
    "icon": "❄️",
    "title": "Hele verden ser mot Lillehammer",
    "text": "Vinter-OL på Lillehammer blir en norsk folkefest og et av de sterkeste felles minnene fra 1990-tallet.",
    "source": "https://ol.museum.no/om-olympiske-leker/vinterleker/lillehammer-1994",
    "source_label": "Norges Olympiske Museum",
    "songs": [
      [
        "The Sign",
        "Ace of Base"
      ],
      [
        "Zombie",
        "The Cranberries"
      ]
    ]
  },
  {
    "year": 1998,
    "age": 52,
    "icon": "⚽",
    "title": "Norge slår Brasil i fotball-VM",
    "text": "Norge slår de regjerende verdensmesterne Brasil 2–1 i Marseille. Kampen blir stående som et av norsk fotballs mest berømte øyeblikk.",
    "source": "https://www.fotball.no/fotballdata/kamp/?fiksId=1698406&underside=kamphendelser",
    "source_label": "Norges Fotballforbund",
    "songs": [
      [
        "My Heart Will Go On",
        "Celine Dion"
      ],
      [
        "The Cup of Life",
        "Ricky Martin"
      ]
    ]
  },
  {
    "year": 2005,
    "age": 59,
    "icon": "▶️",
    "title": "Norge markerer 100 år – og YouTube blir født",
    "text": "Norge markerer hundreårsjubileet for unionsoppløsningen i 1905. Samme år blir YouTube etablert og varsler en helt ny måte å dele video og musikk på.",
    "source": "https://www.kongehuset.no/taler-og-budskap/kong-harald-v/stortingsmiddagen-2005-kongens-tale",
    "source2": "https://blog.youtube/news-and-events/youtube-at-15-my-personal-journey/",
    "source_label": "Kongehuset",
    "source_label2": "YouTube",
    "songs": [
      [
        "You're Beautiful",
        "James Blunt"
      ],
      [
        "Boulevard of Broken Dreams",
        "Green Day"
      ]
    ]
  },
  {
    "year": 2007,
    "age": 61,
    "icon": "📱",
    "title": "Telefonen blir en liten datamaskin",
    "text": "Apple presenterer den første iPhone. Mobiltelefon, musikkspiller og internett samles i én berøringsskjerm.",
    "source": "https://www.apple.com/no/newsroom/2007/01/09Apple-Reinvents-the-Phone-with-iPhone/",
    "source_label": "Apple",
    "songs": [
      [
        "Umbrella",
        "Rihanna feat. Jay-Z"
      ],
      [
        "Rehab",
        "Amy Winehouse"
      ]
    ]
  },
  {
    "year": 2020,
    "age": 74,
    "icon": "🏠",
    "title": "En verden stenger ned",
    "text": "11. mars karakteriserer WHO covid-19 som en pandemi. Arbeid, reiser, familieliv og sosiale møter blir brått forandret over hele verden.",
    "source": "https://www.who.int/news-room/speeches/item/who-director-general-s-opening-remarks-at-the-media-briefing-on-covid-19---11-march-2020",
    "source_label": "WHO",
    "songs": [
      [
        "Blinding Lights",
        "The Weeknd"
      ],
      [
        "Levitating",
        "Dua Lipa"
      ]
    ]
  },
  {
    "year": 2022,
    "age": 76,
    "icon": "🔭",
    "title": "Universet kommer nærmere",
    "text": "James Webb-romteleskopets første fullfargebilder gir verden nye, detaljerte blikk på galakser, stjerner og planeter langt utenfor vårt eget nabolag.",
    "source": "https://science.nasa.gov/mission/webb/webbs-first-images/",
    "source_label": "NASA",
    "songs": [
      [
        "As It Was",
        "Harry Styles"
      ],
      [
        "Bad Habit",
        "Steve Lacy"
      ]
    ]
  },
  {
    "year": 2026,
    "age": 80,
    "icon": "🎂",
    "title": "30. august 2026 · 80 år",
    "text": "Fra radio og grammofon til streaming, smarttelefoner, romteleskoper og kunstig intelligens. I dag er det først og fremst én milepæl som teller: 80-årsdagen.",
    "source": null,
    "source_label": null,
    "songs": []
  }
];


// ============================================================
// MUSIKKHISTORIE PER TIÅR
// ============================================================
// key brukes til knappene og YouTube-spillelistene.
// p1/p2 er hovedteksten.
// highlight vises i boksen "Hvorfor det betydde noe".
// tags er de små sjanger-knappene.

const decadeStories = [
  {
    "key": "40",
    "label": "1946–1949",
    "title": "Etterkrigstid, swing og croonere",
    "sub": "De første årene i tidsreisen",
    "p1": "Da tidsreisen begynner i 1946, er storband, swing, jazz og vokalpop fortsatt viktige deler av populærmusikken. Radioen er sentral, og grammofonplaten er et fysisk produkt man setter seg ned for å høre på.",
    "p2": "Samtidig ligger spirene til noe nytt i rhythm & blues, gospel og elektrisk blues. Sterkere rytmer, elektriske gitarer og nye innspillingsmetoder skal snart være med på å skape rock'n'roll.",
    "highlight": "Musikken begynner gradvis å gå fra storbandenes epoke til mindre grupper, tydeligere rytmer og en mer ungdomsrettet lyd.",
    "tags": [
      "Swing",
      "Jazz",
      "Vokalpop",
      "Rhythm & blues"
    ]
  },
  {
    "key": "50",
    "label": "1950-tallet",
    "title": "Rock'n'roll skaper en ungdomskultur",
    "sub": "Gitaren, 45-platen og tenåringene",
    "p1": "På 1950-tallet bryter rock'n'roll for alvor gjennom. Musikken henter mye fra afroamerikansk rhythm & blues, gospel og blues, samtidig som den blandes med country. Artister som Chuck Berry, Little Richard og Elvis Presley blir symboler på en ny lyd.",
    "p2": "Dette er også tiåret hvor tenåringer blir en tydelig målgruppe for musikkindustrien. Billigere platespillere, 45-plater, radio og etter hvert transistorapparater gjør det lettere å ha sin egen musikk – uavhengig av foreldrenes smak.",
    "highlight": "Rock'n'roll endrer ikke bare lyden. Den gjør populærmusikken til en sterkere del av ungdomsidentitet, mote og opprør.",
    "tags": [
      "Rock'n'roll",
      "Rhythm & blues",
      "Doo-wop",
      "Country"
    ]
  },
  {
    "key": "60",
    "label": "1960-tallet",
    "title": "Pop, soul og studioet som instrument",
    "sub": "Beatles, Motown og store samfunnsendringer",
    "p1": "1960-tallet eksploderer i ulike retninger. The Beatles og andre britiske band får enorm internasjonal betydning, Motown gjør soul til stor popmusikk, og folkrock knytter musikken tett til protest, politikk og samfunnsendringer.",
    "p2": "Mot slutten av tiåret blir studioet nesten et instrument i seg selv. Flersporsopptak, nye effekter og eksperimentering gjør det mulig å lage musikk som ikke nødvendigvis kan gjenskapes på samme måte på en scene.",
    "highlight": "Populærmusikk blir i større grad et sted der en hel generasjon diskuterer identitet, krig, frihet, kjærlighet og samfunn.",
    "tags": [
      "Beat",
      "Soul",
      "Motown",
      "Folkrock",
      "Psykedelisk rock"
    ]
  },
  {
    "key": "70",
    "label": "1970-tallet",
    "title": "Disco, punk – og hip-hop blir født",
    "sub": "Et av de mest mangfoldige tiårene",
    "p1": "1970-tallet rommer nesten alt samtidig: hardrock, progrock, singer-songwriters, funk, glam, disco og punk. Disco gjør klubben og dansegulvet til et sentrum for populærkulturen, mens punk reagerer mot det polerte og kompliserte med kortere, råere og mer direkte musikk.",
    "p2": "I Bronx i New York begynner DJ-er tidlig på 1970-tallet å isolere og forlenge rytmiske «breaks» fra funk-, soul- og discoplater. MC-er snakker og rimer over rytmene, mens breaking og graffiti blir del av den samme kulturen. Dette utvikler seg til hip-hop.",
    "highlight": "Rap var altså ikke bare en ny måte å synge på. Hip-hop gjorde platespilleren til et instrument, sampling og rytmisk gjenbruk til skapende verktøy, og ga nye grupper en direkte måte å fortelle om egne liv og omgivelser.",
    "tags": [
      "Disco",
      "Funk",
      "Punk",
      "Hardrock",
      "Hip-hop"
    ],
    "source": "https://nmaahc.si.edu/explore/stories/hip-hop-bronx",
    "sourceLabel": "Smithsonian: Hip-Hop in the Bronx"
  },
  {
    "key": "80",
    "label": "1980-tallet",
    "title": "Musikken blir visuell – og hip-hop vokser",
    "sub": "Synthesizere, trommemaskiner, MTV og CD",
    "p1": "Synthesizere og trommemaskiner setter et tydelig preg på 1980-tallet. Popproduksjoner blir større og glattere, og musikkvideoen får enorm betydning. Artister må ikke bare høres – de skal også ha et visuelt uttrykk.",
    "p2": "Samtidig går hip-hop fra lokale miljøer til et langt større publikum. Rap, DJ-ing, scratching og sampling blir stadig mer avansert. Mot slutten av tiåret brukes hip-hop også tydelig til politiske og sosiale kommentarer.",
    "highlight": "Hip-hop begynner å påvirke hvordan popmusikk bygges opp: fokus på beat, sampling, remix og rytmisk vokal sprer seg langt utenfor selve rap-sjangeren.",
    "tags": [
      "Synthpop",
      "New wave",
      "Pop",
      "Metal",
      "Hip-hop"
    ],
    "source": "https://americanhistory.si.edu/press/releases/hip-hop-comes-smithsonian",
    "sourceLabel": "Smithsonian: Hip-Hop Comes to the Smithsonian"
  },
  {
    "key": "90",
    "label": "1990-tallet",
    "title": "Alt splittes opp – og alt møtes",
    "sub": "Grunge, elektronika, R&B og rap i sentrum",
    "p1": "1990-tallet har ikke én dominerende lyd. Grunge og alternativ rock bryter med mye av 80-tallets polerte uttrykk, britpop vokser fram, elektronisk dansemusikk får større plass, og moderne R&B blir en sentral del av popbildet.",
    "p2": "Rap går fra å være en voksende sjanger til å bli en av de viktigste kreftene i populærmusikken. Ulike regionale uttrykk, gangsta rap, mer bevisst og politisk rap og nye produksjonsstiler gjør hip-hop stadig bredere.",
    "highlight": "Innflytelsen merkes også utenfor musikken: språk, klær, dans, grafisk uttrykk og ungdomskultur påvirkes av hip-hop i store deler av verden.",
    "tags": [
      "Grunge",
      "Britpop",
      "R&B",
      "Techno",
      "House",
      "Rap"
    ],
    "source": "https://americanhistory.si.edu/press/releases/national-museum-american-history-displays-recent-hip-hop-acquisitions",
    "sourceLabel": "Smithsonian: hip-hop som global kultur"
  },
  {
    "key": "00",
    "label": "2000-tallet",
    "title": "Internett endrer hvordan vi finner musikk",
    "sub": "MP3, nedlasting, YouTube og en ny musikkøkonomi",
    "p1": "På 2000-tallet blir selve måten vi skaffer musikk på forandret. MP3-filer, fildeling, digitale musikkbutikker og etter hvert YouTube gjør at man ikke lenger er avhengig av platebutikken eller radioen for å oppdage nye artister.",
    "p2": "Hip-hop og R&B ligger tett på sentrum av mainstream-pop, mens elektronisk musikk og produksjonsteknikker blir stadig viktigere på tvers av sjangre. Samarbeid mellom rappere, popartister og produsenter blir vanlig.",
    "highlight": "Albumet mister gradvis noe av rollen som den eneste måten å presentere musikk på. Enkeltlåter kan spres raskt på nettet og nå et internasjonalt publikum uten de gamle distribusjonsveiene.",
    "tags": [
      "Hip-hop",
      "R&B",
      "Indierock",
      "Pop-punk",
      "Elektronika"
    ]
  },
  {
    "key": "10",
    "label": "2010-tallet",
    "title": "Streaming tar over",
    "sub": "Hele musikkbiblioteket flytter inn i mobilen",
    "p1": "På 2010-tallet blir streaming den dominerende måten mange hører musikk på. I stedet for å kjøpe én plate eller én fil får lytteren tilgang til enorme kataloger. Spillelister og anbefalingssystemer blir nye innganger til musikk.",
    "p2": "Sjangrene flyter mer sammen. Hip-hop – særlig trap-inspirert produksjon – setter dype spor i pop, R&B og elektronisk musikk. Samtidig gjør streaming og sosiale medier det lettere for latinamerikansk pop, K-pop og andre regionale uttrykk å få et globalt publikum.",
    "highlight": "Rap og hip-hop går fra å påvirke populærmusikken til i stor grad å være en del av selve grunnspråket i moderne popproduksjon: beats, flow, sampling og produsentkultur finnes overalt.",
    "tags": [
      "Streaming",
      "Trap",
      "EDM",
      "K-pop",
      "Latin pop",
      "Indie"
    ],
    "source": "https://www.ifpi.org/wp-content/uploads/2020/03/GMR2021_STATE_OF_THE_INDUSTRY.pdf",
    "sourceLabel": "IFPI: utviklingen i streaming"
  },
  {
    "key": "20",
    "label": "2020–2026",
    "title": "Musikken har ingen faste grenser",
    "sub": "Streaming, korte videoer, gamle hits og nye verktøy",
    "p1": "I 2020-årene kan en låt bli verdensomspennende gjennom streaming eller korte videoer på svært kort tid. Nye artister konkurrerer om oppmerksomheten side om side med eldre katalogmusikk, og en flere tiår gammel sang kan plutselig få et nytt liv.",
    "p2": "Skillet mellom sjangrene blir stadig mindre tydelig. Pop kan inneholde rap, country, elektronika, rock og latinamerikanske rytmer i samme produksjon. Samtidig har vinyl fått en ny rolle som fysisk samleobjekt – midt i en ellers svært digital musikkhverdag.",
    "highlight": "I 2025 sto streaming for 69,6 % av globale inntekter fra innspilt musikk. Det sier mye om hvor langt vi har beveget oss fra grammofonplaten som møtte verden i 1946.",
    "tags": [
      "Streaming",
      "Genreblanding",
      "Kortvideo",
      "Vinyl-revival",
      "AI-verktøy"
    ],
    "source": "https://www.ifpi.org/wp-content/uploads/2026/03/GMR2026_SOTI.pdf",
    "sourceLabel": "IFPI Global Music Report 2026"
  }
];
