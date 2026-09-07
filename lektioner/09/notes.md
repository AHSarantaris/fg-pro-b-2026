# Lektion 09

## 1Ø \- Video om AI:

- [The Vibe Coding Era: Why AI Won’t Replace Software Engineers](https://www.youtube.com/watch?v=xYU7zaaRjmE)
- Osmani beskriver produktivitetsforbedringer fra omkring **10–15 % med tidligere AI-værktøjer til omkring 30–50 % med nyere værktøjer**, samtidig med at arbejdsfordelingen ændrer sig.
  - En AI kan sagtens producere noget, der:
    - ser flot ud
    - fungerer i de normale tilfælde
    - har masser af features
    - kan demonstreres
  - ...men som samtidig har alvorlige problemer.
  - For eksempel:
    - dårlig arkitektur
    - skjulte bugs
    - sikkerhedsproblemer
    - dårlig performance
    - uforudsete afhængigheder
    - kode, der er vanskelig at ændre
    - problemer ved skalering
  - Derfor bliver test, forståelse og kvalitetssikring vigtigere, ikke mindre vigtigt.
- Jamie Grove:
  - “For the initial run to take some spreadsheets that we had that we were working with to get an actual workable sample ready to go took me less than a day.”
  - “There's absolutely no way I could have done any of this without AI.”
  - “Even someone who is a very fast coder could not have built all these solutions. Impossible.”
  - “If I were to do it with a team of programmers, I could have five programmers working on this full-time and still not deliver as many results.”
  - Prisen for hvis han skulle have en eksisterende softwareløsning:
    - “We might be talking about an annual license of anywhere between $6,000 and $10,000 a year, scaling all the way up to maybe $30,000 to $50,000 a year...”
    - “Now, for about $20 a month, business owners like Grove are building their own software solutions.”
- Addy Osmani
  - “Vibe coding is enabling people to go from idea to execution faster than ever.”
  - “If you are vibe coding, you're pretty much just giving into the vibes.”
  - “If you are engineering, that's where you have to apply rigor to it. You have to have this clear set of requirements. You are testing.”
  - “You're going to have effectively a virtual team of agents that you're responsible for.”
  - “And you have to own the outcomes.”
  - “If you're building any kind of serious software, you still need to have some idea of what is the quality bar? What are my quality gates?”
  - “How am I making sure this is actually going to meet the needs of my users in a consistent way?”
  - “How many lines of code are being generated? Which is not in any way a good proxy for productivity.”
  - “In the earlier days of AI, I would have said, you know, that boost is 10 to 15 percent. These days, it's anywhere from 30 to 50 percent. And I see that number only continuing to go up.”
  - “If AI can write code, then what is the role of the software engineer?”
  - “Today it's all about quality.”
  - “They don't care if a human has been authoring it or AI has been authoring it.”
  - “It doesn't help them get the job done in a reliable way.”
  - “Absolutely not. I think that vibe coding has a lot of value.”
  - “It has completely changed how many teams approach prototyping.”
  - “Vibe coding a thing does not necessarily mean that you have a production ready artifact that's going to be battle hardened.”
- Frank Nagle fra MIT:
  - “When coders started using these types of tools, they massively shift the amount of their time that they allocate to coding.”
  - og:
  - “And they take away a whole lot of their allocated time from project management.”
- Bliver programmører erstattet?
  - “Since 2022, employment for software engineers right out of college has fallen by nearly 20%.”
  - “If you don't hire any new people, who's going to run the company in 10 to 15 years?”
    - Hvad er problemet med dette argument? De hyrer jo stadig nogen, bare ikke ligeså mange.
- Cynthia Chen:
  - “It's like technically I can make it, but an engineer probably could have made this in a much shorter timeline and probably with, like, much more robust code.”
- Budskaber
  - Vibe coding:
    - prøv noget
    - giv AI instruktioner
    - se hvad der sker
    - iterér
  - Engineering:
    - krav
    - systematisk udvikling
    - test
    - kvalitet
    - ansvar
  - Det er ikke nok, at AI kan få noget til at virke. Vi skal vide, om det virker korrekt.

## 2U \-

- “AI vil erstatte softwareudviklere”:
  - Da computeren blev introduceret så mistede de menneskelige “computere” deres job. Var det godt eller dårligt?
    - Fra wikipedia:
      - The term "computer", in use from the early 17th century (the first known written reference dates from 1613),\[1\] meant "one who computes": a person performing mathematical calculations, before electronic calculators became available.
        - Teams of people, often women from the late nineteenth century onwards, were used to undertake long and often tedious calculations; the work was divided so that this could be done in parallel. The same calculations were frequently performed independently by separate teams to check the correctness of the results.
        - It was not until World War I that computing became a profession. "The First World War required large numbers of human computers. Computers on both sides of the war produced map grids, surveying aids, navigation tables and artillery tables. With the men at war, most of these new computers were women and many were college educated."\[Grier, David Alan 2001\]
        - [https://en.wikipedia.org/wiki/Computer\_%28occupation%29?wprov=sfla1](https://en.wikipedia.org/wiki/Computer_%28occupation%29?wprov=sfla1)
    - Vibe coding:
      - Ham der fandt på begrebet brugte det ikke på en positiv måde, men mere melankolsk og opgivende.
        - Andrej Karpathy 2025: “There's a new kind of coding I call "vibe coding", where you fully give in to the vibes, embrace exponentials, and forget that the code even exists. It's possible because the LLMs (e.g. Cursor Composer w Sonnet) are getting too good. Also I just talk to Composer with SuperWhisper so I barely even touch the keyboard. I ask for the dumbest things like "decrease the padding on the sidebar by half" because I'm too lazy to find it. I "Accept All" always, I don't read the diffs anymore. When I get error messages I just copy paste them in with no comment, usually that fixes it. The code grows beyond my usual comprehension, I'd have to really read through it for a while. Sometimes the LLMs can't fix a bug so I just work around it or ask for random changes until it goes away. It's not too bad for throwaway weekend projects, but still quite amusing. I'm building a project or webapp, but it's not really coding \- I just see stuff, say stuff, run stuff, and copy paste stuff, and it mostly works.”
        - Coderabbit \- David Kravets 2026 ([https://www.coderabbit.ai/blog/a-semantic-history-how-the-term-vibe-coding-went-from-a-tweet-to-prod](https://www.coderabbit.ai/blog/a-semantic-history-how-the-term-vibe-coding-went-from-a-tweet-to-prod)): More than anything, it’s a signal that many engineering teams have added AI to their stacks and are struggling with the quality of its output and its downstream effects. In fact, the use of vibe coding to describe the generation of code for production-grade systems has taken on somewhat negative connotations.

        The term was invoked by many precisely to emphasize that, in some cases, relying too much on AI-generated code at work was trusting an LLM’s vibes in a way better suited for a weekend project, rather than for customer-facing applications of a publicly listed company.

        For example, as AI coding agents were adopted by more teams in 2025, devs on LinkedIn renamed themselves Vibe Code Cleanup Specialists in their profiles (a joke we ran with for our AWS Re:invent booth this year). What’s more, Collins’ competitor Merriam Webster went in another direction for their word of the year choice. They chose slop, highlighting the large gulf that still existed between AI optimism and AI output.

        Indeed, for many, the promise of AI coding agents have translated into hours spent reviewing AI slop, reworking code due to unclear prompts or intent, and dealing with incidents or bugs in production.
        - Andrej Karpathy 2026: A lot of people quote tweeted this as 1 year anniversary of vibe coding. Some retrospective \-

        I've had a Twitter account for 17 years now (omg) and I still can't predict my tweet engagement basically at all. This was a shower of thoughts throwaway tweet that I just fired off without thinking but somehow it minted a fitting name at the right moment for something that a lot of people were feeling at the same time, so here we are: vibe coding is now mentioned on my Wikipedia as a major memetic "contribution" and even its article is longer. lol

        The one thing I'd add is that at the time, LLM capability was low enough that you'd mostly use vibe coding for fun throwaway projects, demos and explorations. It was good fun and it almost worked. Today (1 year later), programming via LLM agents is increasingly becoming a default workflow for professionals, except with more oversight and scrutiny. The goal is to claim the leverage from the use of agents but without any compromise on the quality of the software. Many people have tried to come up with a better name for this to differentiate it from vibe coding, personally my current favorite "agentic engineering":

        \- "agentic" because the new default is that you are not writing the code directly 99% of the time, you are orchestrating agents who do and acting as oversight.

        \- "engineering" to emphasize that there is an art & science and expertise to it. It's something you can learn and become better at, with its own depth of a different kind.

        In 2026, we're likely to see continued improvements on both the model layer and the new agent layer. I feel excited about the product of the two and another year of progress.

    - Programmører vil blive mere som projektledere.
      - En projektleder behøver ikke at kunne det som kollegerne i hans team kan, men hvis han kan er det bedre.
        - Han kan så bedre forstå outputtet og sige mere præcist hvad han vil have og ved hvad der er muligt.
        - Han kan selv gå ind og ændre småting fremfor at skulle forklare til en anden hvordan han vil have det, især hvis medarbejderen ikke giver ham hvad han ønsker.
    - Kildekritik og Hype:
      - AI-virksomhederne ønsker selvfølgelig at portrættere deres produkt så godt som muligt
      - Min hjemmeside:
        - AI’en gav mig ikke det jeg ønskede så det var godt at jeg selv kunne gå ind og ændre i koden, fremfor at skulle skrive frem og tilbage med den for at få den til at gøre det på den måde jeg ønskede det, hvilket også ville have kostet en del.
      - Konklusion:
        - Brug AI som en hjælper men lær tingene selv så du i det mindste kan review’e hvad den har lavet og guide til hvad den skal gøre.
    - Tænk på AI som en klassekammerat/kollega/team medlem/assistent der har rigtig meget viden, og som forsøger at gøre hvad du beder den om.
      - Dens output er således betinget af:
        - Dens viden, hvilket er delt op i to, det som den har lært af dem der har udviklet den, samt det som du har lært den i dens “kontekst vindue”.
        - Hvor godt den forstår hvad du siger, hvilket kun er noget som dens udviklere kan ændre på, samt hvor godt du har forklaret den hvad den skal gøre.
      - Så der er kun 2 ting du kan gøre for at forbedre output, hvilket er at forklare det du vil meget præcist og tydeligt, samt at give den noget forudgående viden (kontekst) som den skal benytte.
      - Softwareudviklerens rolle er nu blevet mere en projektleder som styrer forskellige AI agenter til at gøre det som softwareudvikleren ønsker.
      - En softwareudvikler der accepterer og påtager sig denne rolle vil have et output der svarer til et helt hold af professionelle udviklere, der alle arbejder med lynets hast og giver resultater på en brøkdel af den tid som den softwareudvikler der ikke påtager sig denne rolle ville bruge.
      - Der er dog en flaskehals, hvilket er ens tid, ens kapital, ens evne til at få agenterne til at gøre det som man beder dem om (se ovenstående), samt ens fantasi. Den sidste er den vigtigste og den som man skal arbejde mest på.

  - Mindre konkurrence?
    - DTU har ledige pladser på softwareteknologi for første gang.

## 2U \- Typer

- Prompt engineering
  - Hvordan skal jeg skrive et prompt til dig så du laver det bedste tower defence spil på kortest tid.
- Context engineering
  - Agent platform
  - Model Context Protocla
  - Rules:
    - [https://agents.md/](https://agents.md/)
  - Skills:
    - [https://agentskills.io](https://agentskills.io/skill-creation/best-practices)/
  - Harness engineering:
    - [https://openai.com/index/harness-engineering/](https://openai.com/index/harness-engineering/)
- “The reason for the failure of any AI model is never a bad prompt. AI models fail because of the absence of any context. Future advancements in large language models, or LLMs, will come from the area of context rather than prompts.”
  - [https://www.ibm.com/think/topics/vibe-coding\#675692303](https://www.ibm.com/think/topics/vibe-coding#675692303)

## 2Ø \- Øvelse:

- Formål:
  - I skal lave det bedste tower defence spil som I kan, og den der laver det bedste spil vinder, og alt er tilladt, pånær at I ikke må skrive kode, I må kun bruge AI. Alle får hver én stemme og man må ikke stemme på sig selv.
- Værktøjer:
  - [p5.js](http://p5.js)
  - VS Code
  - AI værktøjer:
    - I skal bruge Cline udvidelsen til VS Code med en gratis model
      - I kan starte med Deep Seek flash v4
    - Bare giv den tilladelse til alt, den vil kun ændre filer i jeres workspace (sørg for at jeres workspace kun er et tomt p5js projekt).
- Hjælp fra mig:
  - Sig til hvis I får et problem som I ikke kan løse med AI.
- Mulige problemer:
  - en feature virker ikke helt
  - AI'en ændrer noget andet, når den retter en fejl
  - variabler og klasser bliver inkonsistente
  - AI'en glemmer tidligere krav
  - koden bliver stadig mere kompleks
  - nogle bugs er svære at forklare til AI
  - en ændring i én del af spillet ødelægger en anden
  - AI'en kan producere kode, eleverne ikke selv forstår
- Spørgsmål efter øvelsen:
  - Hvor hurtigt kom I fra idé til prototype?
  - Hvor mange features kunne AI lave?
  - Hvor mange fejl opstod?
  - Forstod I den kode, AI skrev?
  - Hvad skete der, da I bad AI om at ændre en eksisterende feature?
  - Opstod der nye bugs, da AI fik rettet gamle bugs?
  - Hvornår kunne I ikke længere styre projektet?
  - Hvilken programmeringsviden ville have gjort jer bedre i stand til at bruge AI?
  - Var AI bedst til **at skabe** eller **at vedligeholde**?
  - Kan man lave et stort, komplekst spil på denne måde?

## 3U \- Brugen af AI i undervisningen:

- I må gerne bruge AI til at
  - Stille generelle spørgmål
    - “Hvad betyder dette ord?”
    - “Hvor kan jeg finde information om dette koncept?”
    - “Hvad er forskellen på disse to koncepter?”
    - “Giv mig et eksempel hvor denne metode anvendes”
  - Forklare kode
    - “Forklar hvad denne funktion gør”
    - “Hvor i koden sker dette?”
  - Planlægge projekter
    - “Hvilken struktur kan jeg bruge i dette projekt?”
    - “Hvilke biblioteker findes til dette og hvad er deres fordele og ulemper?”
  - Generere visuelle hjælpemidler
    - Noter
    - Oversigtsdokumenter (f.eks. til projekter)
    - Slides (f.eks. i reveal.js)
- I må ikke ikke bruge AI til at generere kode som er en del af pensum eller opgaver. Hvis I har et god grund til at generere kode, eller I er i tvivl, så spørg mig. En god tommelfingerregel er at I skal overveje jeres intention med at få AI til det. Er det fordi I gerne vil hoppe over hvor gærdet er lavest, og gøre mindst muligt arbejde så lad være. Men hvis det er for at forstå og lære, eller for at komme godt igang og forbedre kvaliteten, eller for at aflaste gentagne handlinger der ellers ville være “slavearbejde” så er det fint, og måske endda bedst at bruge AI, da I så lærer at bruge AI som et konstruktivt redskab.
  - “Lav denne opgave i Programmering B for mig”
  - “Lav hele dette projekt fra start til slut”
  - “Skriv denne rapport for mig”
