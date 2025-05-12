---
title: "Ticketing systém pro fotbalový klub"
description: 'Jednoduchý ticketing systém pro místní fotbalový klub, který slouží jako náhrada za "tužku, papír a šatnové bločky". Front end aplikace je napsaná v Reactu a back end v Symfony.'
image: "../../assets/buldok-admindash.png"
tags: ["React", "TypeScript", "PHP", "Symfony", "Docker"]
link: "https://github.com/maruzek/buldok-ticketing"
---

## O projektu

Nápad na tuto aplikaci mě napadl už pár let před jejím stvořením. Na jednom víkendovém domácím zápase karlovarského fotbalového klubu TJ Karlovy Vary-Dvory (neboli Buldoci) jsem musel zaskočit za svou sestru při vybírání vstupného. Po zjištění, že vstupenky se prodávají pomocí papírových šatnových bločků a zaznamenávají se jednoduše na kus papíru, mě napadlo, že by bylo možné celý proces zefektivnit, digitalizovat, ulehčit tak práci lidem, kteří vstupenky takovýmto způsobem prodávají a zajistit možnost sledování podrobných statistik z prodejů.

## Cíle

Cílem bylo vytvořit jednoduchý webový nástroj, který by umožnil:

- rychlejší a jednoduchý prodej vstupenek na mobilním zařízení pokladního,
- přehledné sledování tržeb a návštěvnosti,
- omamžité vyhodnocení prodejů ihned po jeho ukončení

![Mobilni cast](../../assets/buldok-ticketing.png)
![Mobilni cast](../../assets/buldok-mark.png)

## Budoucnost

Momentálně projekt prošel prvním testováním a vše zatím naznačuje tomu, že se aplikace od příští sezóny bude používat na všechn zápasech Buldoků. Před plným nasazením od srpna se bude muset doladit několik maličkostí, ale jako koncept aplikace uspěla a byla uvítána jako pozitivní vylepšení fungování klubu

## Tech stack

### Front end

- TypeScript,
- React 19,
- Vite,
- ESLint, Prettier,
- pnpm

### Back end

- PHP 8.2,
- Symfony 7,
- MariaDB,
- Symfony Flex,
- Composer,
- Apache

### Security

- JWT (LexikJWT)

### Prostředí

- Docker,
- Docker Compose,
- Git,
- GitHub

### Deploy

- Wedos NoLimit hosting
