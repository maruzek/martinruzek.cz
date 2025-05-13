---
title: "Study Buddy"
description: "Study buddy je školní projekt snažící se o vytvoření systému pro procvičování otázek vytvořených z materiálů nahraných uživatelem prostřednictvím Discordu. Projekt se skládá z několika částí: Custom GPT založené na GPT-4, Discord bota psaného v Pythonu, JS/Expressu backednu a PostgreSQL databázi"
image: "../../assets/study-buddy.png"
tags:
  [
    "JavaScript",
    "Node.js",
    "Express.js",
    "Python",
    "ChatGPT",
    "PostgreSQL",
    "Discord",
  ]
link: "https://github.com/maruzek/study-buddy"
order: 2
---

## O projektu

Projekt Study Buddy vznikl jako semestrální práce s cílem vytvořit inteligentní nástroj pro efektivnější učení. Hlavní myšlenkou je systém, kde si studenti nahrají své studijní materiály, ze kterých Custom GPT model vygeneruje procvičovací otázky. Původním záměrem bylo vytvářet i nové shrnovací materiály, ale v tu dobu (prosinec 2023) nebyl GPT-4 schopen takového výkonu. Otázky jsou následně přes Discord Webhooky odeslány na Discord server, kde si je studenti pomocí Python bota mohou interaktivně procvičovat. Veškerá data jsou ukládána a spravována přes Node.js/Express backend a PostgreSQL databázi.

Má role v tomto projektu byla původně manažerská, ale posléze se rozrostla. Hlavní premisou semestrální práce bylo zkusit si vytvořit vlastní aplikaci napojenou na custom GPT, která vznikla velmi krátce před zahájením práce na tomto projektu.

Proto jsem já osobně s vyučujícím musel vymýšlet, jak by bylo možné takový projekt vytvořit. Nakonec mě napadlo využít Discord Webhooks, což je funkce Discordu posílat zprávy a data do daného kanálu pouze pomocí jedné URL. To bylo ideální zejména protože jsme v tu chvíli neměli možnost využít vlastní API zahostované někde na serveru. Zároveň to otevřelo možnost si zkusit něco nového pro mé kolegy a to vytváření Discord bota v Pythonu.

## Cíle

Cílem projektu bylo vytvořit funkční systém, který by umožnil:

- automatické generování procvičovacích otázek z uživatelských studijních materiálů,
- interaktivní procvičování znalostí v prostředí Discordu,
- ukládání a správu otázek a odpovědí

## Technologie

Systém je logicky rozdělen na několik hlavních částí, z nichž každá využívá specifické technologie:

### Custom GPT Model

Srdcem aplikace je model postavený na GPT-4 od OpenAI. Tento model je zodpovědný za analýzu textových materiálů, identifikaci klíčových informací, tvorbu souhrnů a generování otázek. Pro komunikaci s Discordem využívá Discord Webhooky.

### Discord Bot

Bot je napsán v Pythonu s využitím knihovny jako discord.py. Jeho úkolem je zpracovávat data přijatá přes Webhooky, komunikovat s backendovým API a obsluhovat příkazy uživatelů pro spouštění kvízů a zobrazování otázek.

### Backend API

Backend je realizován pomocí Node.js a frameworku Express.js. Poskytuje RESTful API pro Discord bota a zajišťuje veškerou logiku pro práci s daty, která jsou následně ukládána do databáze.

### Databáze

Pro ukládání dat byla zvolena PostgreSQL databáze. Uchovává informace o kurzech, nahraných materiálech, vygenerovaných otázkách, odpovědích a případně o uživatelích a jejich pokroku.

## Členové týmu Study buddy

- Martin Růžek
- Quang Thanh Nguyen
- Jindřich Krupka
- Jakub Holý
- Ondřej Marek
- Daniel Vít
