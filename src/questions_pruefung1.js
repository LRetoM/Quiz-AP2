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
    }
  ];
  