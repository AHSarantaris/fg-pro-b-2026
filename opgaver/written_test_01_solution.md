# Skriftlig prøve 01 - Løsning

Frederikssund Gymnasium - Programmering B

27-10-2026

Forløb 13 og 14

## Formaliteter

- I har 20 minutter.
- Ingen hjælpemidler. Jeres bærbar skal være lukket i.
- Ingen toiletbesøg.
- Ingen kommunikation.
- Ved tvivl om spørgsmålene kan I række hånden op. I må ikke sige noget som kan hjælpe andre under jeres spørgsmål.
- Besvarelsen skal tydeligt angive hvilket svar der besvares (fx. 2.1), og svaret må ikke være tvetydigt.

## Spørgsmål til forløb 13

### 1. JavaScript

1.1. Hvilket keyword skal man bruge når man skal definere en funktion i JavaScript? Svarmuligheder: `def`, `class`, `function`, `let`.

    function

1.2. Skriv kommandoen til at printe `Hello world` til konsolen/terminalen.

    console.log("Hello world")

1.3. Skriv kode til at lave et array `numbers` der indeholder alle tal fra 1 til 100 ved brug af en for-løkke.

    let numbers = [];
    for (let i = 1; i <= 100; i++) {
        numbers[i] = i;
    }

1.4. Skriv kode til at lave et objekt med en attributterne `x` og `y` med værdierne `3` og `4`, henholdsvist, samt en metode `move` der lægger 1 til værdien af `x`. Objektet skal gemmes i en variabel `p`.

    let p = {
        x: 3,
        y: 4,
        move() {
            x++;
        }
    }

### 2. p5.js

2.1. Hvad hedder funktionen som kaldes af p5.js-biblioteket kun én gang, og hvad hedder den funktion der kaldes hver frame?

    Den der kaldes kun én gang: setup()
    Den der kaldes hver frame: draw()

2.2. Skriv p5.js kode til at lave et lærred der er 300 pixel højt og 400 pixel bredt.

    canvas(400,300)

2.3. Skriv p5.js kode for at tegne en cirkel på lærredet med centrum i nederste højre hjørne, der har en radius på 20 pixel. Lærredet er 300 pixel højt og 400 pixel bredt.

    circle(400,300,20)

2.4. Hvad er bredden og højden (i pixel) på et rektangel tegnet med koden `rect(20,30,40,100)` når `rectMode` er sat til `CORNER` (standardværdien)? Hvad med når det er sat til `CORNERS`?

    Når rectMode er CORNER: 
    Bredde = 40, højde = 100

    Når rectMode er CORNERS: 
    Bredde = 20, højde = 70

## Spørgsmål til forløb 14

### 3. SDLC

3.1. Hvilken fase er mellem Kravspecifickation og implementering?

    Design

3.2. Hvad står forkortelsen MoSCoW for, i forbindelse med prioritering af features?

    Must have, Should have, Could have, Won't have

3.3. I hvilken fase skriver man pseudokode?

    Design-fasen

3.4. Bør man umiddelbart udføre en enhedstest som alfatest eller betatest?

    Alfatest

3.5. Er en UAT en white-, grey- eller black-box test?

    Black-box

### 4. Git og GitHub

4.1. Hvilke to kommandoer køres når man puller?

    git fetch
    git merge

4.2. Hvilke kommandoer kan man bruge for at skifte branch?

    git switch
    git checkout

4.3. Hvilket fil-format skal readme-filer være, og er der specifikke regler/konventioner for navngigvning af readme-filer?

    Filformat: Markdown (.md)
    Skal hedde "README.md"

4.4. Hvis man skal merge en feature-branch ind i `main`, hvilken branch skal man stå i når man kører kommandoen `merge`?

    main

### 5. AI

5.1. Giv to eksempler på hvordan man ikke må bruge AI i programmering B, og to eksempler på hvordan man gerne må. Besvarelsen må gerne være i form af specifikke prompts.

    Hvordan man ikke må:
    - "Skriv dette afsnit i min synopsis"
    - "Løs denne opgave for mig"

    Hvordan man gerne må:
    - "Hvordan kan man lave en trekant i p5.js, og hvor står det i referencen?"
    - "Hjælp mig igang med at lave et klassediagram til mit tower defence spil, ud fra denne kravspecifikation."


