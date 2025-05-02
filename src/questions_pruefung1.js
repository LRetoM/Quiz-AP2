export default [
    {
      question: "1. Wofür dient ein UML-Klassendiagramm?",
      options: [
        "Modellierung von Abläufen",
        "Definition der Systemarchitektur",
        "Darstellung von Klassen, Attributen, Methoden und Beziehungen",
        "Auflistung aller Use Cases"
      ],
      correctIndex: 2,
      explanation:
        "Ein Klassendiagramm zeigt Klassen (z. B. Kunde), deren Attribute/Methoden und Beziehungen (z. B. Vererbung). Damit legst du das Grundgerüst für objektorientierten Code fest."
    },
    {
      question: "2. Welches UML-Symbol steht für Vererbung (Generalisation)?",
      options: [
        "Gefüllter Diamant",
        "Leerer Diamant",
        "Pfeil mit offenem Dreieck",
        "Strichmännchen"
      ],
      correctIndex: 2,
      explanation:
        "Der Pfeil mit offenem Dreieck zeigt, dass eine Unterklasse (z. B. Student) von einer Oberklasse (z. B. Person) erbt."
    },
    {
      question: "3. Was unterscheidet Aggregation von Komposition?",
      options: [
        "Bei Komposition kann das Teilobjekt allein existieren",
        "Aggregation ist stärker als Komposition",
        "Aggregation = lockere Beziehung, Komposition = starke",
        "Beide sind identisch"
      ],
      correctIndex: 2,
      explanation:
        "Aggregation (leerer Diamant) erlaubt eigenständiges Teilobjekt (z. B. Rad), Komposition (gefüllt) nicht – das Teil gehört fest zum Ganzen (Auto)."
    },
    {
      question: "4. Wofür nutzt man ein Use-Case-Diagramm?",
      options: [
        "Ablauf eines Algorithmus",
        "Struktur von Datenbanktabellen",
        "Darstellung von Akteuren und Systemfunktionen",
        "Sequenz von User-Interaktionen"
      ],
      correctIndex: 2,
      explanation:
        "Use-Case-Diagramme zeigen Akteure (z. B. Kunde) und Anwendungsfälle (z. B. Bestellung aufgeben), damit du Anforderungen grob skizzierst."
    },
    {
      question: "5. Welches Symbol kennzeichnet im Use-Case-Diagramm einen Akteur?",
      options: ["Ellipse", "Rechteck", "Strichmännchen", "Pfeil"],
      correctIndex: 2,
      explanation:
        "Ein Strichmännchen symbolisiert einen Akteur (z. B. Kunde oder Admin), der mit dem System interagiert."
    },
    {
      question: "6. Wofür verwendet man ein Aktivitätsdiagramm?",
      options: [
        "Datenmodellierung",
        "Prozess- und Ablaufdarstellung",
        "Klassenhierarchie",
        "Benutzeroberflächen-Design"
      ],
      correctIndex: 1,
      explanation:
        "Aktivitätsdiagramme zeigen Abläufe mit Aktionen und Verzweigungen – z. B. Bestellprozess: Warenkorb → Zahlung → Versand."
    },
    {
      question: "7. Was stellt ein Sequenzdiagramm dar?",
      options: [
        "Klassenbeziehungen",
        "Zeitlicher Ablauf von Nachrichten",
        "Tabellenstrukturen",
        "Systemkomponenten"
      ],
      correctIndex: 1,
      explanation:
        "Sequenzdiagramme zeigen, wie Objekte (z. B. Client-Server) Nachrichten austauschen – z. B. Login-Anfrage → Authentifizierung → Antwort."
    },
    {
      question: "8. Wofür dient ein ER-Modell?",
      options: [
        "Ablaufdiagramm",
        "Entität-Beziehungs-Modell",
        "Zustandsautomat",
        "Komponentenmodell"
      ],
      correctIndex: 1,
      explanation:
        "Ein ER-Modell beschreibt Entitäten (z. B. Kunde), Attribute (Name) und Beziehungen (Kunde — Bestellung) als Basis für Datenbanken."
    },
    {
      question: "9. Was ist die 3. Normalform (3NF)?",
      options: [
        "Jede Tabelle enthält einen Datensatz",
        "Keine nicht-schlüssel-abhängigen Attribute",
        "Alle Spalten sind Primärschlüssel",
        "Es gibt drei Tabellen"
      ],
      correctIndex: 1,
      explanation:
        "3NF: Jedes Nicht-Schlüssel-Attribut darf nur vom Primärschlüssel abhängen, um Redundanz zu vermeiden."
    },
    {
      question: "10. Welches Diagramm zeigt Zustandsübergänge?",
      options: ["Zustandsdiagramm", "Use-Case", "Aktivitätsdiagramm", "Klassendiagramm"],
      correctIndex: 0,
      explanation:
        "Zustandsdiagramme zeigen, in welchen Zuständen ein Objekt ist (z. B. offen, in Bearbeitung, geschlossen)."
    },
    {
      question: "11. Lastenheft vs. Pflichtenheft: Wer erstellt das Lastenheft?",
      options: [
        "Kunde",
        "Entwickler",
        "Projektleiter",
        "Testmanager"
      ],
      correctIndex: 0,
      explanation:
        "Das Lastenheft beschreibt der Kunde, was er möchte. Im Pflichtenheft setzt der Entwickler um, WIE er es realisiert."
    },
    {
      question: "12. Was ist Stakeholder-Management?",
      options: [
        "Verwaltung von Lagerbeständen",
        "Betreuung von Projektbeteiligten",
        "Erstellung von UML-Diagrammen",
        "Programmieren von Schnittstellen"
      ],
      correctIndex: 1,
      explanation:
        "Stakeholder-Management heißt: Interessen aller Beteiligten (z. B. Kunde, Vertrieb, Entwickler) identifizieren und steuern."
    },
    {
      question: "13. Welche Phase ist im Wasserfallmodell ganz am Anfang?",
      options: [
        "Testen",
        "Analyse",
        "Design",
        "Implementierung"
      ],
      correctIndex: 1,
      explanation:
        "Im Wasserfall kommt zuerst die Analyse (Anforderungen sammeln), dann Design, Implementierung und am Ende Test."
    },
    {
      question: "14. Agile vs. Wasserfall: Was ist typisch für Agile?",
      options: [
        "Feste Phasen mit Reviews",
        "Iterative Sprints mit Feedback",
        "Einmaliger Test am Ende",
        "Keine Kundenbeteiligung"
      ],
      correctIndex: 1,
      explanation:
        "Agile arbeitet in kurzen Sprints (z. B. 2 Wochen), liefert inkrementell und holt stetiges Feedback ein."
    },
    {
      question: "15. Welcher Rolle gehört der Scrum Master an?",
      options: [
        "Product Owner",
        "Entwickler",
        "Teamcoach",
        "Manager"
      ],
      correctIndex: 2,
      explanation:
        "Der Scrum Master ist Moderator und Coach für das Team, schützt vor Störungen und sorgt für den Scrum-Prozess."
    },
    {
      question: "16. Was zeigt ein Kanban-Board?",
      options: [
        "Testfälle",
        "Quellcode",
        "Aufgabenstatus (To Do, Doing, Done)",
        "Datenmodelle"
      ],
      correctIndex: 2,
      explanation:
        "Kanban-Boards visualisieren Aufgaben in Spalten (z. B. To Do, In Arbeit, Fertig) und fördern Flow."
    },
    {
      question: "17. Wozu dient ein Komponenten­diagramm?",
      options: [
        "Ablaufmodell",
        "Releaseplan",
        "Strukturierung großer Systeme in Module",
        "Datenbanknormalisierung"
      ],
      correctIndex: 2,
      explanation:
        "Komponentendiagramme zeigen lose gekoppelte Module/ Bibliotheken und ihre Schnittstellen."
    },
    {
      question: "18. Was gehört ins Pflichtenheft?",
      options: [
        "Projektbudget",
        "Testfälle",
        "Technische Umsetzung der Anforderungen",
        "Arbeitsvertrag"
      ],
      correctIndex: 2,
      explanation:
        "Im Pflichtenheft beschreibst du detailliert, WIE du Anforderungen aus dem Lastenheft realisierst."
    },
    {
      question: "19. Was ist ein Prototyp im Software-Entwicklungsprozess?",
      options: [
        "Endgültige Version",
        "Rohentwurf zum Testen von Konzepten",
        "Testskript",
        "Deploy-Plan"
      ],
      correctIndex: 1,
      explanation:
        "Ein Prototyp ist ein schneller Entwurf (z. B. klickbare UI-Mockups), um Ideen zu validieren."
    },
    {
      question: "20. Was beschreibt die Testpyramide?",
      options: [
        "Nur UI-Tests",
        "Mehr Unit- als Integration- als UI-Tests",
        "Mehr UI- als Unit-Tests",
        "Testreihe in drei Schritten"
      ],
      correctIndex: 1,
      explanation:
        "Die Testpyramide empfiehlt viele schnelle Unit-Tests, mittlere Integrationstests und wenige langsame UI-Tests."
    },
    {
      question: "21. White-Box vs. Black-Box Testing: Was ist Black-Box?",
      options: [
        "Test ohne Kenntnis des Codes",
        "Test am Quellcode",
        "Test der Infrastruktur",
        "Performance-Test"
      ],
      correctIndex: 0,
      explanation:
        "Black-Box-Tests prüfen die Software nur über Eingabe/Ausgabe, ohne internen Code anzuschauen."
    },
    {
      question: "22. Was bedeutet TDD (Test-Driven Development)?",
      options: [
        "Tests nach dem Code schreiben",
        "Code schreiben, dann Tests",
        "Erst Tests, dann Code schreiben",
        "Testdaten generieren"
      ],
      correctIndex: 2,
      explanation:
        "Bei TDD schreibst du zuerst einen fehlschlagenden Test, dann Code, bis der Test grün ist, und refaktorierst."
    },
    {
      question: "23. Wofür steht CI (Continuous Integration)?",
      options: [
        "Manuelles Zusammenführen",
        "Automatischer Build & Test bei jedem Commit",
        "Deployment am Wochenende",
        "Integrationstests einmal im Monat"
      ],
      correctIndex: 1,
      explanation:
        "CI bedeutet: Jeder Code-Push löst automatisch Build und Tests aus, um Integrationsprobleme früh zu finden."
    },
    {
      question: "24. Warum macht man Code-Reviews?",
      options: [
        "Weil es Pflicht ist",
        "Zur Qualitäts- und Wissens­sicherung",
        "Nur für Dokumentation",
        "Zur Versionskontrolle"
      ],
      correctIndex: 1,
      explanation:
        "Code-Reviews verbessern Qualität, finden Bugs und helfen, Wissen im Team zu verteilen."
    },
    {
      question: "25. Wozu dient eine Git-Branch-Strategie?",
      options: [
        "Versionsnummer festlegen",
        "Arbeiten in isolierten Entwicklungszweigen",
        "Datenbankzugriff regeln",
        "UI-Design koordinieren"
      ],
      correctIndex: 1,
      explanation:
        "Mit Branches (z. B. Feature-Branch) entwickelst du parallel, ohne den Main-Zweig zu destabilisieren."
    },
    {
      question: "26. Was beschreibt Semantic Versioning (SemVer)?",
      options: [
        "Datum im Versionsnamen",
        "Major.Minor.Patch",
        "Zufallsnummern",
        "Nur Major-Nummer"
      ],
      correctIndex: 1,
      explanation:
        "SemVer nutzt MAJOR.MINOR.PATCH: 2.1.4 – Major-Update, Minor neue Features, Patch Bugfixes."
    },
    {
      question: "27. Was ist ein Lastenheft?",
      options: [
        "Beschreibung der technischen Lösung",
        "Beschreibung der Kundenanforderungen",
        "Testdokumentation",
        "Projektzeitplan"
      ],
      correctIndex: 1,
      explanation:
        "Im Lastenheft definiert der Auftraggeber, was geliefert werden soll, ohne technische Umsetzung."
    },
    {
      question: "28. Was gehört zu nicht-funktionalen Anforderungen?",
      options: [
        "Login mit Benutzername",
        "Reaktionszeit unter 200ms",
        "Erstellung eines Berichts",
        "Anzahl der Datensätze"
      ],
      correctIndex: 1,
      explanation:
        "Nicht-funktional (Qualitäts-)Anforderungen betreffen Performance, Sicherheit, Skalierbarkeit (z. B. <200 ms Antwortzeit)."
    },
    {
      question: "29. Wozu nutzt man Wireframes im UI-Design?",
      options: [
        "Endgültiges Layout",
        "Skizze für Struktur & Navigation",
        "Fertige Grafiken",
        "Performance-Analyse"
      ],
      correctIndex: 1,
      explanation:
        "Wireframes sind grobe UI-Skizzen (z. B. Platzhalter), um Struktur und Navigation zu planen."
    },
    {
      question: "30. Was bedeutet Barrierefreiheit (Accessibility)?",
      options: [
        "Farben aufhellen",
        "Zugänglichkeit für alle Nutzer (Screenreader, Kontraste)",
        "Nur Mobile Design",
        "Performance-Optimierung"
      ],
      correctIndex: 1,
      explanation:
        "Accessibility sorgt dafür, dass Menschen mit Seh- oder Hörbehinderung Software nutzen können (Kontraste, Screenreader)."
    },
    {
      question: "31. Was ist ein Deployment-Diagramm?",
      options: [
        "Datenflussdiagramm",
        "Showing hardware nodes & software artifacts",
        "Geschäftsprozessmodell",
        "User-Interface-Skizze"
      ],
      correctIndex: 1,
      explanation:
        "Deployment-Diagramme zeigen Server, Container, Prozesse und wie Artefakte (z. B. Jar-Files) verteilt werden."
    },
    {
      question: "32. Wozu dient ein Paketdiagramm?",
      options: [
        "UI-Design",
        "Gruppierung von Klassen in Pakete",
        "Sequenzdarstellung",
        "Datenbankabfragen"
      ],
      correctIndex: 1,
      explanation:
        "Paketdiagramme strukturieren das System, indem sie Klassen in Pakete (Module) gruppieren für bessere Übersicht."
    },
    {
      question: "33. Was ist eine Benutzer-Story?",
      options: [
        "Testfall",
        "Kurze Anforderung in Form: \"Als X möchte ich Y, um Z\"",
        "Use-Case-Diagramm",
        "Architekturbeschreibung"
      ],
      correctIndex: 1,
      explanation:
        "User Stories beschreiben Anforderungen aus Sicht des Anwenders: z. B. Als Kunde möchte ich …, um …."
    },
    {
      question: "34. Was sind Akzeptanzkriterien?",
      options: [
        "Test­skripte",
        "Kriterien zur Abnahme einer User-Story",
        "Performance-Ziele",
        "Backup-Regeln"
      ],
      correctIndex: 1,
      explanation:
        "Akzeptanzkriterien definieren, wann eine Anforderung als erfüllt gilt (z. B. Passwort muss 8 Zeichen haben)."
    },
    {
      question: "35. Wofür steht MVP (Minimum Viable Product)?",
      options: [
        "Most Valuable Process",
        "Funktionale Grundversion mit minimalem Aufwand",
        "Testumgebung",
        "Endprodukt"
      ],
      correctIndex: 1,
      explanation:
        "MVP ist die kleinstmögliche Version, die wertvolle Nutzer-Feedback ermöglicht (z. B. Beta-Release)."
    },
    {
      question: "36. Was ist Refactoring?",
      options: [
        "Neuer Code schreiben",
        "Umstrukturieren von Code ohne Funktionalitätsänderung",
        "Testen von neuen Funktionen",
        "Deployment"
      ],
      correctIndex: 1,
      explanation:
        "Refactoring verbessert Code-Qualität (z. B. Methoden umbenennen, duplicate code entfernen), ohne Logik zu ändern."
    },
    {
      question: "37. Wozu dient eine Risk-Matrix im Projekt?",
      options: [
        "Diagramm für Testfälle",
        "Bewertung von Risiken nach Wahrscheinlichkeit & Auswirkung",
        "UI-Mockup",
        "Versionshistorie"
      ],
      correctIndex: 1,
      explanation:
        "Eine Risk-Matrix zeigt Risiken (z. B. Lieferverzug) nach Eintrittswahrscheinlichkeit und Schadenshöhe."
    },
    {
      question: "38. Was ist Planning Poker?",
      options: [
        "Kartenspiel",
        "Schätztechnik mit Karten für Aufwandsschätzung",
        "Testframework",
        "CI-Tool"
      ],
      correctIndex: 1,
      explanation:
        "Planning Poker ist eine agile Methode, bei der Teammitglieder durch Karten Aufwand in Story Points schätzen."
    },
    {
      question: "39. Was gehört in ein Pflichtenheft?",
      options: [
        "Anforderungen und deren technische Umsetzung",
        "Nur Kundenwünsche",
        "Testberichte",
        "Projektbudget"
      ],
      correctIndex: 0,
      explanation:
        "Im Pflichtenheft beschreibst du, wie jede Anforderung technisch umgesetzt wird (z. B. DB-Schema, Schnittstellen)."
    },
    {
      question: "40. Was ist RESTful API?",
      options: [
        "UI-Design",
        "Architekturprinzip für Web-Services",
        "Teststrategie",
        "Deployment-Methode"
      ],
      correctIndex: 1,
      explanation:
        "REST definiert Ressourcen (URLs) und HTTP-Methoden (GET, POST), um Web-Services einfach zu gestalten."
    },
    {
      question: "41. Welches HTTP-Verfahren liest Daten?",
      options: ["GET", "POST", "PUT", "DELETE"],
      correctIndex: 0,
      explanation:
        "GET-Requests holen Daten vom Server (z. B. /kunden/123 liefert Kundeninfo mit ID 123)."
    },
    {
      question: "42. Welches HTTP-Verfahren aktualisiert Daten?",
      options: ["GET", "POST", "PUT", "OPTIONS"],
      correctIndex: 2,
      explanation:
        "PUT-Requests aktualisieren bestehende Ressourcen, z. B. PUT /bestellung/456 mit neuem Status."
    },
    {
      question: "43. Was ist CORS (Cross-Origin Resource Sharing)?",
      options: [
        "Datenbanktechnik",
        "Browser-Sicherheitsmechanismus",
        "UI-Framework",
        "CI-Tool"
      ],
      correctIndex: 1,
      explanation:
        "CORS regelt, welche Domains auf deine API zugreifen dürfen, um unerlaubte Anfragen zu verhindern."
    },
    {
      question: "44. Wofür steht MVC (Model-View-Controller)?",
      options: [
        "Model-View-Component",
        "Architekturmuster zur Trennung von Daten, Logik und UI",
        "Testparadigma",
        "Deploymentformat"
      ],
      correctIndex: 1,
      explanation:
        "MVC trennt das Datenmodell (Model), UI-Darstellung (View) und Steuerung (Controller) für saubere Struktur."
    },
    {
      question: "45. Was ist Continuous Deployment?",
      options: [
        "Manuelles Deployment",
        "Automatisches Ausrollen in Produktion nach Tests",
        "Nur Testumgebung",
        "UI-Deployment"
      ],
      correctIndex: 1,
      explanation:
        "Continuous Deployment führt nach erfolgreichem CI-Durchlauf automatisch Releases in die Produktion durch."
    },
    {
      question: "46. Warum nutzt man Versionskontrolle?",
      options: [
        "Backup",
        "Nachvollziehbare Änderungen am Code",
        "UI-Design",
        "Architekturdiagramme"
      ],
      correctIndex: 1,
      explanation:
        "Git & Co. ermöglichen, Änderungen zu verfolgen, Branches zu nutzen und bei Fehlern rückgängig zu machen."
    },
    {
      question: "47. Was ist eine Retrospektive im Scrum?",
      options: [
        "Abnahmemeeting",
        "Meeting zur Prozessverbesserung nach Sprint",
        "Releaseplanung",
        "Daily Stand-up"
      ],
      correctIndex: 1,
      explanation:
        "In der Retrospektive reflektiert das Team, was gut lief und was verbessert werden kann."
    },
    {
      question: "48. Wofür steht SOLID (O aus)?",
      options: [
        "Open/Closed Principle",
        "Only Open methods",
        "Open/Conditional design",
        "Optional Components"
      ],
      correctIndex: 0,
      explanation:
        "O = Open/Closed Principle: Klassen sollen offen für Erweiterung, aber geschlossen für Modifikation sein."
    },
    {
      question: "49. Was bedeutet „Closed for Modification“ im OCP?",
      options: [
        "Code nie ändern",
        "Bestehenden Code nicht direkt anfassen, sondern erweitern",
        "Nur Tests ändern",
        "UI-Komponenten sperren"
      ],
      correctIndex: 1,
      explanation:
        "Statt Klassen zu ändern, erweiterst du sie (z. B. über Vererbung oder Strategy-Pattern)."
    },
    {
      question: "50. Was ist das Ziel der „Lessons Learned“?",
      options: [
        "Neue Teammitglieder schulen",
        "Erfahrungen dokumentieren und in Zukunft besser arbeiten",
        "Code reviewen",
        "Budget nachberechnen"
      ],
      correctIndex: 1,
      explanation:
        "In „Lessons Learned“ hältst du fest, was im Projekt gut oder schlecht lief, um beim nächsten Mal effizienter zu sein."
    },
    {
        question: "51. Was beschreibt eine nicht-funktionale Anforderung?",
        options: [
          "Die konkrete Umsetzung in Code",
          "Einzelne Features, die die Software haben muss",
          "Qualitätskriterien wie Performance oder Sicherheit",
          "Der genaue Datenbank-Entwurf"
        ],
        correctIndex: 2,
        explanation: "Nicht-funktionale Anforderungen legen fest, wie gut eine Software etwas tun soll (z. B. Antwortzeiten < 200 ms, Verschlüsselung von Nutzerdaten)."
      },
      {
        question: "52. Welches UML-Diagramm eignet sich am besten zur Darstellung von Systemzuständen?",
        options: [
          "Klassendiagramm",
          "Zustandsdiagramm",
          "Use-Case-Diagramm",
          "Sequenzdiagramm"
        ],
        correctIndex: 1,
        explanation: "Zustandsdiagramme (Statecharts) zeigen, in welchen Zuständen ein Objekt sein kann und welche Ereignisse Übergänge auslösen."
      },
      {
        question: "53. Bei Scrum übernimmt das Daily Meeting welche Rolle?",
        options: [
          "Monatliche Projektplanung",
          "Tägliche Abstimmung über Fortschritt und Hindernisse",
          "Review des fertigen Produkts",
          "Festlegung der Projektkosten"
        ],
        correctIndex: 1,
        explanation: "Im Daily Scrum trifft sich das Team täglich (max. 15 Min), um Fortschritte und Blocker zu klären (Inspect & Adapt)."
      },
      {
        question: "54. Wofür steht das Prinzip DRY im Software-Engineering?",
        options: [
          "Don't Repeat Yourself",
          "Direct Response Yield",
          "Data Retrieval Yearly",
          "Distributed Resource Yield"
        ],
        correctIndex: 0,
        explanation: "DRY („Don’t Repeat Yourself“) fordert, dass jede Information im System nur einmal definiert sein sollte, um Wartung und Fehler zu minimieren."
      },
      {
        question: "55. Welches Artefakt gehört NICHT zu Scrum?",
        options: [
          "Product Backlog",
          "Sprint Backlog",
          "Burn-Down-Chart",
          "Gantt-Chart"
        ],
        correctIndex: 3,
        explanation: "Gantt-Charts stammen aus dem klassischen Projektmanagement, in Scrum arbeitet man stattdessen mit Backlogs und Burn-Down-Charts."
      },
      {
        question: "56. Was ist das Hauptziel eines Use-Case-Diagramms?",
        options: [
          "Klassifizierte UML-Klassenbeschreibung",
          "Prozessbeschreibung im Swimlane-Format",
          "Darstellung von Akteuren und ihren Hauptfunktionen",
          "Beschreibung von Zustandsübergängen"
        ],
        correctIndex: 2,
        explanation: "Use-Case-Diagramme zeigen Akteure (z. B. Nutzer, System) und welche Funktionen (Use Cases) sie ausführen können."
      },
      {
        question: "57. Wie nennt man den Schritt, in dem man Anforderungen priorisiert?",
        options: [
          "Sprint Planning",
          "Backlog Grooming",
          "Coding Phase",
          "Release Planning"
        ],
        correctIndex: 1,
        explanation: "Backlog Grooming (auch Refinement) ist der kontinuierliche Prozess, um Anforderungen zu klären, zu schätzen und zu ordnen."
      },
      {
        question: "58. Welches Diagramm eignet sich, um den Ablauf einer Methode in Pseudocode darzustellen?",
        options: [
          "Datenflussdiagramm",
          "Sequenzdiagramm",
          "Aktivitätsdiagramm",
          "Komponentendiagramm"
        ],
        correctIndex: 2,
        explanation: "Aktivitätsdiagramme in UML ähneln Flussdiagrammen und eignen sich gut für Pseudocode-Abläufe mit Bedingungen und Schleifen."
      },
      {
        question: "59. Was beschreibt das MVC-Pattern?",
        options: [
          "Multi-Version-Concurrency",
          "Model-View-Controller-Aufteilung",
          "Memory-Validation-Cache",
          "Module-View-Component"
        ],
        correctIndex: 1,
        explanation: "MVC trennt Datenmodell (Model), Benutzeroberfläche (View) und Steuerlogik (Controller) zur klaren Verantwortungsaufteilung."
      },
      {
        question: "60. Welche Rolle hat der Product Owner in Scrum?",
        options: [
          "Technische Leitung und Code-Reviews",
          "Priorisierung des Backlogs und Stakeholder-Vertretung",
          "Tägliche Moderation von Meetings",
          "Testautomatisierung"
        ],
        correctIndex: 1,
        explanation: "Der Product Owner ist für die Pflege des Product Backlogs, Priorisierung und Stakeholder-Kommunikation verantwortlich."
      },
      {
        question: "61. Welcher Vorteil resultiert aus einer Drei-Schichten-Architektur?",
        options: [
          "Alle Schichten laufen im selben Prozessraum",
          "Klare Trennung von Präsentation, Geschäftslogik und Datenzugriff",
          "Keine Datenbank erforderlich",
          "Keine Templates nötig"
        ],
        correctIndex: 1,
        explanation: "Die 3-Layer-Architektur (Presentation, Business, Data) fördert Wartbarkeit und Testbarkeit durch lose Kopplung."
      },
      {
        question: "62. Was bedeutet ‚Continuous Integration‘?",
        options: [
          "Manuelles Zusammenführen von Branches",
          "Tägliches Deployment in Produktion",
          "Automatisches Zusammenführen und Testen bei jedem Commit",
          "CI/CD ist nur ein Schlagwort"
        ],
        correctIndex: 2,
        explanation: "CI automatisiert Build und Tests bei jedem Code-Commit, um Integrationsprobleme frühzeitig zu finden."
      },
      {
        question: "63. Wofür steht die Abkürzung ‚CRUD‘?",
        options: [
          "Create, Read, Update, Delete",
          "Compile, Run, Upload, Debug",
          "Copy, Rename, Utilize, Delete",
          "Connect, Read, Use, Deploy"
        ],
        correctIndex: 0,
        explanation: "CRUD beschreibt die vier Basisoperationen auf Daten: Anlegen, Auslesen, Aktualisieren, Löschen."
      },
      {
        question: "64. Welche Aussage beschreibt ‚User Story‘ am besten?",
        options: [
          "Technisches Datenmodell einer Klasse",
          "Kleine Anforderung aus Nutzersicht mit INVEST-Kriterien",
          "Grafische Skizze der UI",
          "Sequenzdiagramm im UML-Standard"
        ],
        correctIndex: 1,
        explanation: "User Stories folgen dem Format „Als <Rolle> möchte ich <Funktion>, um <Nutzen>“ und erfüllen INVEST (Independent, Negotiable …)."
      },
      {
        question: "65. Welche UML-Beziehung zeigt ‚Vererbung‘?",
        options: [
          "Durchgezogene Linie mit Pfeilspitze",
          "Gestrichelte Linie mit offener Pfeilspitze",
          "Gestrichelte Linie ohne Pfeil",
          "Durchgezogene Linie ohne Pfeil"
        ],
        correctIndex: 1,
        explanation: "Vererbung (Generalization) wird als gestrichelte Linie mit offener Pfeilspitze zum Super-Typ dargestellt."
      },
      {
        question: "66. Warum verwendet man ein Entity-Relationship-Diagramm (ERD)?",
        options: [
          "Für UI-Prototyping",
          "Zur Modellierung der Datenbankstruktur",
          "Zur Ablaufsteuerung von Methoden",
          "Für Performance-Messungen"
        ],
        correctIndex: 1,
        explanation: "ERD visualisiert Entitäten mit Attributen und Beziehungen für das relationale Datenbankdesign."
      },
      {
        question: "67. Welches Vorgehensmodell ist stark sequenziell und dokumentenzentriert?",
        options: [
          "Scrum",
          "Extreme Programming",
          "Wasserfallmodell",
          "Lean Startup"
        ],
        correctIndex: 2,
        explanation: "Im Wasserfallmodell werden Phasen (Analyse, Design, Implementierung…) nacheinander und dokumentenbasiert durchlaufen."
      },
      {
        question: "68. Was ist ein ‚Sprint‘ in Scrum?",
        options: [
          "Ein Meeting für Code-Reviews",
          "Ein fester Entwicklungszyklus (meist 1–4 Wochen)",
          "Ein Deployment in Produktion",
          "Ein Lastenheft"
        ],
        correctIndex: 1,
        explanation: "Ein Sprint ist ein Timebox-Intervall (z. B. 2 Wochen), in dem ein genau definiertes Inkrement geliefert wird."
      },
      {
        question: "69. Welche Aktivität gehört zum Requirements Engineering?",
        options: [
          "Code-Optimierung",
          "Stakeholder-Interviews",
          "Unit-Tests schreiben",
          "Server-Deployment"
        ],
        correctIndex: 1,
        explanation: "Stakeholder-Interviews dienen dazu, Anforderungen zu ermitteln und zu validieren."
      },
      {
        question: "70. Wofür wird ein Mockup verwendet?",
        options: [
          "Datenbank-Normalisierung",
          "Visuelle Vorschau der Benutzeroberfläche",
          "Definition von Testfällen",
          "Performancetests"
        ],
        correctIndex: 1,
        explanation: "Mockups sind grobe Layout-Skizzen oder Wireframes, um UI/UX früh zu visualisieren und Feedback einzuholen."
      },
      {
        question: "71. Was beschreibt die 3. Normalform (3NF)?",
        options: [
          "Keine Mehrfachwerte pro Feld",
          "Jedes Nicht-Schlüsselattribut ist voll funktional abhängig vom Primärschlüssel",
          "Alle Foreign Keys sind eindeutig",
          "Tabellenstruktur ohne Join"
        ],
        correctIndex: 1,
        explanation: "3NF verlangt, dass jedes Nicht-Schlüsselattribut nur vom gesamten Primärschlüssel abhängt und nicht transitiv."
      },
      {
        question: "72. Welches Prinzip beschreibt ‚Fail Fast‘?",
        options: [
          "So spätes Fehlermelden wie möglich",
          "Frühzeitige Überprüfung und sofortiges Abbrechen bei Fehlern",
          "Performance-Optimierung",
          "UI-Sicherheit"
        ],
        correctIndex: 1,
        explanation: "‚Fail Fast‘ bedeutet, Fehler so früh wie möglich erkennen und den Prozess sofort abbrechen, um spätere Probleme zu vermeiden."
      },
      {
        question: "73. Was versteht man unter ‚Change Control‘?",
        options: [
          "Überwachung von Code-Metriken",
          "Systematische Steuerung von Änderungen am Projektumfang",
          "Automatisches Deployment",
          "Lastenhefterstellung"
        ],
        correctIndex: 1,
        explanation: "Change Control ist der Prozess zum Prüfen, Genehmigen und Dokumentieren von Änderungen im Projekt."
      },
      {
        question: "74. Welche Aufgabe hat ein Testkonzept?",
        options: [
          "Festlegung der Teststrategie, Testarten und Verantwortlichkeiten",
          "Datenbankdesign",
          "UI-Design",
          "Stakeholdermanagement"
        ],
        correctIndex: 0,
        explanation: "Ein Testkonzept beschreibt, welche Teststufen (Unit, Integration, System) und -verfahren angewendet werden."
      },
      {
        question: "75. Wofür steht der Begriff ‚Agile Manifesto‘?",
        options: [
          "Vier Werte und zwölf Prinzipien für agile Softwareentwicklung",
          "Ein UML-Standard",
          "Ein Lastenheft-Format",
          "Ein Projektmanagement-Tool"
        ],
        correctIndex: 0,
        explanation: "Das Agile Manifesto definiert Werte wie Individuen über Prozesse und Prinzipien wie kontinuierliche Auslieferung."
      },
      {
        question: "76. Welcher Schritt gehört zur Anforderungsanalyse?",
        options: [
          "Unit-Tests schreiben",
          "Use-Case-Erstellung",
          "Performance-Tuning",
          "Code-Review"
        ],
        correctIndex: 1,
        explanation: "Use Cases dokumentieren konkrete Interaktionen zwischen Akteuren und System und sind zentral für die Anforderungsanalyse."
      },
      {
        question: "77. Was ist der Hauptzweck eines Prototyps?",
        options: [
          "Endgültige Implementierung im Produktivbetrieb",
          "Frühes Feedback zu Konzepten und Usability",
          "Automatisierte Tests",
          "Backup und Recovery"
        ],
        correctIndex: 1,
        explanation: "Prototypen (Low-/High-Fidelity) erlauben frühes Feedback von Stakeholdern zu Design und Funktionalität."
      },
      {
        question: "78. Welche Aussage trifft auf Waterfall zu?",
        options: [
          "Hohe Flexibilität bei Änderungen während der Umsetzung",
          "Klare Phasengrenzen mit geringem nachträglichem Änderungsbedarf",
          "Kurze Feedbackzyklen wie in Scrum",
          "Unabhängig von Requirements"
        ],
        correctIndex: 1,
        explanation: "Im Wasserfallmodell sind die Phasen sequentiell, Änderungen nach Abschluss einer Phase sind aufwändig."
      },
      {
        question: "79. Warum sind ‚Swimlanes‘ in Aktivitätsdiagrammen nützlich?",
        options: [
          "Zur Darstellung von parallelen Aktivitäten und Verantwortlichkeiten",
          "Zum Datenbankdesign",
          "Für UI-Layouts",
          "Für Performance-Analyse"
        ],
        correctIndex: 0,
        explanation: "Swimlanes unterteilen das Diagramm nach Rollen/Organisationseinheiten und machen Verantwortlichkeiten sichtbar."
      },
      {
        question: "80. Was beschreibt ‚Design by Contract‘?",
        options: [
          "Vertragliche Verpflichtung zwischen Kunde und Entwickler",
          "Definition von Vor­ und Nachbedingungen für Softwarekomponenten",
          "CI/CD-Pipeline",
          "Agiles Meeting-Format"
        ],
        correctIndex: 1,
        explanation: "Design by Contract legt für Methoden Vor- und Nachbedingungen sowie Invarianten fest, um Zuverlässigkeit zu erhöhen."
      },
      {
        question: "81. Welches Werkzeug hilft dir, Requirements Traceability zu sichern?",
        options: [
          "Versionsverwaltung (z. B. Git)",
          "Requirements-Management-Tool (z. B. Jira, DOORS)",
          "Pure-Plain-Text-Dateien",
          "FTP-Server"
        ],
        correctIndex: 1,
        explanation: "Traceability-Tools (Jira, DOORS) verknüpfen Anforderungen mit Implementierung und Tests, um Änderungen nachzuverfolgen."
      },
      {
        question: "82. Wofür verwendet man ein Kommunikationsdiagramm (Sequenzdiagramm)?",
        options: [
          "Benutzeroberfläche",
          "Datenfluss zwischen UI-Elementen",
          "Interaktionen zwischen Objekten und Nachrichtenfluss",
          "Datenbanknormalisierung"
        ],
        correctIndex: 2,
        explanation: "Sequenzdiagramme zeigen, wie Objekte Nachrichten zeitlich austauschen und sind ideal für Interaktionsszenarien."
      },
      {
        question: "83. Was beschreibt ‚Minimal Viable Product‘ (MVP)?",
        options: [
          "Endgültiges, vollständiges Produkt",
          "Kleinstmögliche Version für erstes Marktfeedback",
          "Extrem komplexer Prototyp",
          "Testfallbeschreibung"
        ],
        correctIndex: 1,
        explanation: "Ein MVP enthält nur die Kerneigenschaften, um schnell Nutzertests und Feedback zu erhalten."
      },
      {
        question: "84. Warum sind Entity-Relationship-Modelle nicht Teil der UML?",
        options: [
          "Weil ERM nur in BPMN verwendet wird",
          "ERM stammt aus dem Datenbankbereich und ist kein offizieller UML-Standard",
          "Weil UML proprietär ist",
          "Weil ERM veraltet ist"
        ],
        correctIndex: 1,
        explanation: "ERM wurde für relationale Datenbanken entwickelt und ist kein offizieller Bestandteil der UML-Speziﬁkation."
      },
      {
        question: "85. Welches Artefakt enthält die User Stories in Scrum?",
        options: [
          "Sprint Backlog",
          "Product Backlog",
          "Burndown Chart",
          "Definition of Done"
        ],
        correctIndex: 1,
        explanation: "Der Product Backlog ist die priorisierte Gesamtliste aller Anforderungen (User Stories) des Produkts."
      },
      {
        question: "86. Wofür steht ‚ACID‘ in der Datenbanktechnik?",
        options: [
          "Atomicity, Consistency, Isolation, Durability",
          "Application, Client, Internet, Data",
          "Access, Control, Integrity, Distribution",
          "Analyze, Code, Integrate, Deploy"
        ],
        correctIndex: 0,
        explanation: "ACID-Prinzipien garantieren Transaktionssicherheit: Atomarität, Konsistenz, Isolation und Dauerhaftigkeit."
      },
      {
        question: "87. Welche Farbe würdest du für normale (noch nicht beantwortete) OptionButtons wählen?",
        options: [
          "Hellgrün",
          "Hellrot",
          "Neutralgrau",
          "Dunkelblau"
        ],
        correctIndex: 2,
        explanation: "OptionButtons sollten vor Auswahl neutral (z. B. Grau oder Weiß) sein, damit keine Antwort vorab erkennbar wird."
      },
      {
        question: "88. Was ist ‚Pair Programming‘?",
        options: [
          "Zwei Entwickler arbeiten gemeinsam an einem Computer",
          "Zwei Personen schreiben unabhängig voneinander Code",
          "Ein Review-Meeting im Sprint",
          "Ein Deployment-Strategie"
        ],
        correctIndex: 0,
        explanation: "Beim Pair Programming sitzt ein Fahrer (Driver) am Keyboard, ein Beobachter (Navigator) unterstützt die Planung und Code-Qualität."
      },
      {
        question: "89. Welcher Schritt folgt auf Requirements Engineering?",
        options: [
          "Modellierung / Design",
          "Code-Deployment",
          "Produktionssupport",
          "Abnahme"
        ],
        correctIndex: 0,
        explanation: "Nach der Ermittlung der Anforderungen beginnt die Modellierung (z. B. UML-Diagramme) und das Lösungsdesign."
      },
      {
        question: "90. Was beschreibt ‚Spike‘ im agilen Kontext?",
        options: [
          "Eine kurze Untersuchung oder Prototyp-Aufgabe zur Klärung von Unsicherheiten",
          "Ein Bugfix",
          "Eine Art von UML-Diagramm",
          "Ein Performance-Test"
        ],
        correctIndex: 0,
        explanation: "Ein Spike ist ein zeitlich begrenzter Prototyp oder Experiment, um technische oder fachliche Fragen zu klären."
      },
      {
        question: "91. Welcher Vorteil ergibt sich aus Code-Reviews?",
        options: [
          "Schlechtere Codequalität",
          "Erhöhte Anzahl von Bugs im Code",
          "Qualitätsverbesserung und Wissensaustausch",
          "Längere Delivery-Times ohne Benefit"
        ],
        correctIndex: 2,
        explanation: "Code-Reviews erhöhen Code-Qualität, finden Fehler früh und fördern Team-Wissen."
      },
      {
        question: "92. Warum nutzt man ‚Mock Objects‘ im Testing?",
        options: [
          "Um reale Datenbankzugriffe einzusetzen",
          "Um Abhängigkeiten zu simulieren und isoliert zu testen",
          "Für UI-Tests",
          "Für Performance-Benchmarks"
        ],
        correctIndex: 1,
        explanation: "Mock Objects ersetzen externe Komponenten (DB, Webservices) im Unit-Test, um isolierte Testumgebungen zu schaffen."
      },
      {
        question: "93. Was ist bei Barrierefreiheit (Accessibility) wichtig?",
        options: [
          "Nur Farben zu verwenden",
          "Klare Kontraste, Tastaturbedienbarkeit und Screenreader-Support",
          "Nur Bilder zu zeigen",
          "Keine Texte zu verwenden"
        ],
        correctIndex: 1,
        explanation: "Für Accessibility sind Farbkontraste, Tastaturnutzung, ARIA-Labels und Screenreader-Kompatibilität essenziell."
      },
      {
        question: "94. Welche Rolle hat die ‚Definition of Done‘?",
        options: [
          "Sie definiert, wann eine Anforderung als fertig gilt",
          "Sie legt Performanceziele fest",
          "Sie beschreibt UI-Mockups",
          "Sie spielt in Scrum keine Rolle"
        ],
        correctIndex: 0,
        explanation: "Die DoD listet Kriterien (z. B. keine offenen Bugs, Testabdeckung) für fertig abgenommene Product-Inkremente."
      },
      {
        question: "95. Was ist eine ‚Design-Review‘?",
        options: [
          "Ein Review von UI-Farben",
          "Eine fachliche und technische Überprüfung des Software-Designs",
          "Ein Testkonzept",
          "Ein Deployment-Log"
        ],
        correctIndex: 1,
        explanation: "Design-Reviews prüfen Architekturentscheidungen, Patterns und technische Konzepte auf Machbarkeit und Qualität."
      },
      {
        question: "96. Warum ist ‚Loose Coupling‘ wünschenswert?",
        options: [
          "Damit Module stark voneinander abhängen",
          "Für flexible, wartbare Komponenten mit geringer Abhängigkeit",
          "Für monolithische Systeme",
          "Für unstrukturierte Codebasen"
        ],
        correctIndex: 1,
        explanation: "Loose Coupling minimiert Abhängigkeiten zwischen Modulen und erleichtert Änderungen und Tests."
      },
      {
        question: "97. Welche Aussage trifft auf ‚Refactoring‘ zu?",
        options: [
          "Es ändert die externe Funktionalität der Software",
          "Es verbessert Code-Struktur ohne Änderung des Verhaltens",
          "Es fügt neue Features hinzu",
          "Es entfernt alle Tests"
        ],
        correctIndex: 1,
        explanation: "Refactoring reorganisiert und optimiert den Code intern, ohne dass sich das externe Verhalten ändert."
      },
      {
        question: "98. Wie unterscheidet sich ‚Sprint Review‘ von ‚Sprint Retrospective‘?",
        options: [
          "Beides sind Code-Reviews",
          "Review zeigt das Inkrement den Stakeholdern, Retrospective bespricht Team-Prozess",
          "Sprint Review schreibt Tests, Retrospective deployt",
          "Kein Unterschied"
        ],
        correctIndex: 1,
        explanation: "Im Sprint Review wird das Produktinkrement präsentiert, in der Retrospektive werden Teamprozesse reflektiert."
      },
      {
        question: "99. Wofür verwendet man ‚Portfolio Backlog‘ in SAFe?",
        options: [
          "Zur Koordination mehrerer Teams und Epics",
          "Für UI-Prototyping",
          "Für Datenbank-Migrationsszenarien",
          "Für Scrum Master Aufgaben"
        ],
        correctIndex: 0,
        explanation: "Im Scaled Agile Framework (SAFe) koordiniert das Portfolio Backlog Epics und strategische Initiativen über mehrere Teams."
      },
      {
        question: "100. Was ist der Unterschied zwischen ‚Verification‘ und ‚Validation‘?",
        options: [
          "Verification prüft, ob wir das Produkt richtig gebaut haben; Validation, ob wir das richtige Produkt gebaut haben",
          "Verification ist Testing, Validation ist Deployment",
          "Kein Unterschied",
          "Beides sind Agile Meetings"
        ],
        correctIndex: 0,
        explanation: "Verification = ‚Bauen wir’s richtig?‘ (technisch), Validation = ‚Bauen wir’s Richtige?‘ (anforderungsorientiert)."
      }
  ];
  