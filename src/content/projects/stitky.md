---
title: "Generátor pro tvorbu štítků na rozvaděče"
description: "Jednoduchá React aplikace, která generuje štítky pro rozvaděče. Umožňuje uživateli zadat popis štítku a jeho velikost a následně vygenerovat PDF s danými štítky."
image: "../../assets/stitky.png"
tags: ["React", "TypeScript", "Vibe coding", "GitHub Copilot"]
link: "https://github.com/maruzek/stitky"
deploy: "https://stitky.martinruzek.eu"
order: 3
---

## O projektu

Tento projekt vznikl jako jednoduchý nástroj pro generování štítků na rozvaděče. Cílem bylo vytvořit aplikaci, která umožní uživatelům snadno zadat popis štítku a jeho velikost a následně vygenerovat PDF s daným štítkem.

Aplikace má řešit problém, se kterým se setkávám při práci s mým tátou, při které je potřeba, aby bylo možné rychle a jednoduše vytvořit štítky pro různé rozvaděče. Běžně jsme pro tuto činnost používali Excel, ale to nebylo vždy ideální řešení. Proto jsem se rozhodl vytvořit jednoduchou webovou aplikaci, která tento proces zjednoduší a zpříjemní.

Pro celý projekt byl použit tzv. "vibe coding", což znamená, že jsem psal pouze prompty pro GitHub Copilot a ten generoval kód za mě. Tento přístup mi umožnil rychleji. Byl to pro mě zajímavý experiment, který ukázal, jak moc může AI pomoci při vývoji aplikací. Bylo to poprvé, kdy jseme použil GitHub Copilot pro celý projekt a musím říct, že jsem byl velmi spokojený s výsledkem.

> There's a new kind of coding I call "vibe coding", where you fully give in to the vibes, embrace exponentials, and forget that the code even exists. It's possible because the LLMs (e.g. Cursor Composer w Sonnet) are getting too good. Also I just talk to Composer with SuperWhisper so I barely even touch the keyboard. I ask for the dumbest things like "decrease the padding on the sidebar by half" because I'm too lazy to find it. I "Accept All" always, I don't read the diffs anymore. When I get error messages I just copy paste them in with no comment, usually that fixes it. The code grows beyond my usual comprehension, I'd have to really read through it for a while. Sometimes the LLMs can't fix a bug so I just work around it or ask for random changes until it goes away. It's not too bad for throwaway weekend projects, but still quite amusing. I'm building a project or webapp, but it's not really coding - I just see stuff, say stuff, run stuff, and copy paste stuff, and it mostly works.

[Andrej Karpathy na X](https://x.com/karpathy/status/1886192184808149383)

Podle původní definice vibe codingu od Andreje Karpathyho (ex Director AI v Tesle) byl právě projekt Štítků úplně ideální. Nezáleželo mi moc na výsledku, ale kdyby se povledlo vytvořit funkční aplikaci, bylo to skvělé. Takový "weekend throwaway project", o kterém mluví.

## Cíle

Cílem bylo vytvořit jednoduchou aplikaci, která umožní uživatelům:

- zadat popis štítku a jeho velikost,
- vygenerovat PDF s daným štítkem,
- stáhnout vygenerovaný štítek ve formátu PDF.

## Budoucnost

Aplikace je momentálně připravená k použití a plně funkční. Do budoucna bych rád aplikaci vylepšil o chytré rozmisťování štítků na stránku, aby bylo možné vytisknout více štítků najednou.

### Tech stack

#### Front end

- TypeScript,
- React 19,
- Tailwind,
- Shadcn UI,
- jspdf,
- Vite,
- ESLint, Prettier,
- pnpm

#### Deploy

- Wedos NoLimit hosting
