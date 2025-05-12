---
title: "Study Buddy"
description: "Study buddy je školní projekt snažící se o vytvoření systému pro procvičování otázek vytvořených z materiálů nahraných uživatelem prostřednictvím Discordu. Projekt se skládá z několika částí: Custom GPT založené na GPT-4, Discord bota psaného v Pythonu, JS/Expressu backednu a PostgreSQL databázi"
image: "../../assets/study-buddy.png"
tags:
  [
    "JavaScript",
    "Node.js",
    "Express",
    "Python",
    "ChatGPT",
    "PostgreSQL",
    "Discord",
  ]
link: "https://github.com/maruzek/study-buddy"
---

```txt
Study Buddy vyvíjí GPT model, který si uloží studentovy kurzy a materiály, identifikuje společná témata, vytvoří z nich přehledné souhrny s procvičovacími otázkami a pomocí Discord Webhooků je odešle do vybraných kanálů, kde bot zajistí jejich uložení na backend a na studentský příkaz postupně zobrazí otázky k procvičení.
```

# Course Synthesizer

## Obsah

-

## 1. Členové týmu

- 💶 👑 Martin Růžek (ruzm12)
- 🩴 Quang Thanh Nguyen
- 🍐 Jindřich Krupka
- 🐵 Jakub Holý
- Ondřej Marek
- 🤌 Daniel Vít

## 3. Zadání

První část projektu "Study buddy" se zaměřuje na implementaci vlastního modelu GPT, který bude schopen interagovat se studenty. Do modelu se budou zapisovat názvy kurzů, které momentálně absolvují v průběhu semestru, a následně se budou nahrávat materiály z těchto kurzů. Dále bude model GPT identifikovat podobnosti mezi různými kurzy a syntetizovat jejich studijní materiály. Tato funkcionalita přispěje k efektivnějšímu využívání času studentů a poskytne jim komplexní pohled na témata, která se prolínají napříč jejich aktuálně studovanými předměty. Model bude z vytovřených materiálů také generovat otázky pro procvičení.

Po vytvoření materiálů a otázek model GPT vše pošle do uživatelem stanovených Discord kanálů pomocí Discord Web Hooks. Pomocí Discord bota budeme materiály a otázky dále posílat na back-end, kde dojde k dalšímu zpracování a následnému nahrání do databáze.

Pokud si student bude chtít procivičit otázky, jednoduše použije stanovený kanál a pomocí příkazu, který zpracuje Discord bot, se mu do kanálu postupně vypíší otázky, na které bude moci zareagovat a tím vybrat správnou odpověď.

## 4. Use Case diagram
