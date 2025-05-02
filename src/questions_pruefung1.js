// src/questions_pruefung1.js
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
        "Ein Klassendiagramm zeigt Klassen (z. B. Kunde), deren Attribute/Methoden und Beziehungen (z. B. Vererbung). Grafik-Hinweis: Pfeile mit offenem Dreieck für Generalisierung."
    },
    {
      question: "2. Welches Symbol kennzeichnet Vererbung (Generalisation)?",
      options: [
        "Gefüllter Diamant",
        "Leerer Diamant",
        "Pfeil mit offenem Dreieck",
        "Raute"
      ],
      correctIndex: 2,
      explanation:
        "Ein Pfeil mit offenem Dreieck zeigt, dass Unterklassen Merkmale der Oberklasse erben."
    },
    {
      question: "3. Was unterscheidet Aggregation von Komposition?",
      options: [
        "Bei Komposition kann das Teilobjekt allein existieren",
        "Aggregation ist stärker als Komposition",
        "Aggregation = lockere Beziehung (leerer Diamant), Komposition = starke (gefüllt)",
        "Beide sind identisch"
      ],
      correctIndex: 2,
      explanation:
        "Aggregation (leerer Diamant) erlaubt eigenständiges Teilobjekt, Komposition (gefüllt) nicht."
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
        "Use-Case-Diagramme zeigen Akteure (Strichmännchen) und ihre Interaktionen (Ellipsen) mit dem System."
    },
    {
      question: "5. Welches Symbol markiert im Use-Case-Diagramm einen Akteur?",
      options: [
        "Rechteck",
        "Strichmännchen",
        "Kreis",
        "Raute"
      ],
      correctIndex: 1,
      explanation:
        "Ein Strichmännchen steht für einen Akteur (z. B. Benutzer). Ellipsen für Use Cases."
    },
    {
      question: "6. Was zeigt ein Aktivitätsdiagramm?",
      options: [
        "Klassenhierarchie",
        "Workflow bzw. Geschäftsprozess mit Aktionen und Entscheidungen",
        "Datenbankbeziehungen",
        "Sequenz von Nachrichten"
      ],
      correctIndex: 1,
      explanation:
        "Aktivitätsdiagramme visualisieren Abläufe mit Start/Endknoten, Aktionen und Entscheidungen (Raute)."
    },
    {
      question: "7. Welches Symbol ist der Startknoten im Aktivitätsdiagramm?",
      options: [
        "Oval mit dickem Rand",
        "Gefüllter Kreis",
        "Raute",
        "Rechteck"
      ],
      correctIndex: 1,
      explanation:
        "Der Startknoten ist ein gefüllter Kreis. Der Endknoten ist ein Kreis mit dickem Rand."
    },
    {
      question: "8. Was ist ein Swimlane?",
      options: [
        "Balken in Gantt-Diagrammen",
        "Spalte, die Verantwortliche für Aktionen im Aktivitätsdiagramm zeigt",
        "Datenbanktabelle",
        "Use-Case-Typ"
      ],
      correctIndex: 1,
      explanation:
        "Swimlanes unterteilen das Diagramm nach Rollen/Abteilungen, die für Aktionen verantwortlich sind."
    },
    {
      question: "9. Wofür nutzt man Sequenzdiagramme?",
      options: [
        "Darstellung von Datenstrukturen",
        "Anzeige des zeitlichen Ablaufs von Nachrichten zwischen Objekten",
        "Klassenplanung",
        "Use-Case-Beschreibung"
      ],
      correctIndex: 1,
      explanation:
        "Sequenzdiagramme zeigen, wie Objekte Nachrichten austauschen – zeitachse vertikal, Nachrichten horizontal."
    },
    {
      question: "10. Was ist der Zweck eines ER-Modells?",
      options: [
        "Visualisierung von Algorithmen",
        "Modellierung von Entitäten und Beziehungen für Datenbanken",
        "Planung von Tests",
        "Darstellung von User Stories"
      ],
      correctIndex: 1,
      explanation:
        "Ein ER-Modell zeigt Entitäten (Rechtecke), Attribute (Ellipsen) und Beziehungen (Rauten)."
    },
    {
      question: "11. Was versteht man unter 1. Normalform (1NF)?",
      options: [
        "Keine NULL-Werte erlaubt",
        "Jede Tabelle braucht einen Primärschlüssel",
        "Atomare (unteilbare) Werte in jeder Zelle",
        "Kein Fremdschlüssel"
      ],
      correctIndex: 2,
      explanation:
        "1NF: Jede Tabellenzelle enthält genau einen Wert. Beispiel: Keine komma-separierten Listen."
    },
    {
      question: "12. Was beseitigt die 2. Normalform (2NF)?",
      options: [
        "Transitive Abhängigkeiten",
        "Partielle Abhängigkeiten von zusammengesetzten Schlüsseln",
        "Duplikate in Tabellen",
        "Fremdschlüssel"
      ],
      correctIndex: 1,
      explanation:
        "2NF: Jedes Nicht-Schlüsselattribut muss vom gesamten Primärschlüssel abhängen."
    },
    {
      question: "13. Was beseitigt die 3. Normalform (3NF)?",
      options: [
        "Partielle Abhängigkeiten",
        "Transitive Abhängigkeiten",
        "NULL-Werte",
        "Primärschlüssel"
      ],
      correctIndex: 1,
      explanation:
        "3NF: Kein Nicht-Schlüsselattribut darf von einem anderen Nicht-Schlüsselattribut abhängen."
    },
    {
      question: "14. Was ist ein Primärschlüssel?",
      options: [
        "Ein Fremdschlüssel in einer anderen Tabelle",
        "Ein eindeutiges Identifikationsmerkmal für Datensätze",
        "Ein Index",
        "Ein Teil eines ER-Modells"
      ],
      correctIndex: 1,
      explanation:
        "Primärschlüssel identifiziert jede Zeile eindeutig, z. B. `KundenID` in Tabelle `Kunde`."
    },
    {
      question: "15. Was ist ein Fremdschlüssel?",
      options: [
        "Verweis auf Primärschlüssel einer anderen Tabelle",
        "Ein Index auf einer Spalte",
        "Ein Unique-Constraint",
        "Eine Tabellenverknüpfung im UML"
      ],
      correctIndex: 0,
      explanation:
        "Fremdschlüssel referenziert einen Primärschlüssel in einer anderen Tabelle und stellt Beziehung her."
    },
    {
      question: "16. Wofür steht CRUD?",
      options: [
        "Create, Read, Update, Delete",
        "Compute, Run, Undo, Deploy",
        "Connect, Render, Use, Drop",
        "Compile, Run, Update, Debug"
      ],
      correctIndex: 0,
      explanation:
        "CRUD sind die Basisoperationen auf Daten: Anlegen, Lesen, Ändern, Löschen."
    },
    {
      question: "17. Wie lautet ein einfaches SELECT-Statement?",
      options: [
        "READ * FROM Kunde;",
        "SELECT * FROM Kunde;",
        "GET ALL FROM Kunde;",
        "SHOW Kunde;"
      ],
      correctIndex: 1,
      explanation:
        "`SELECT * FROM Kunde;` liefert alle Spalten und Zeilen der Tabelle `Kunde`."
    },
    {
      question: "18. Mit welchem Statement fügt man einen Datensatz ein?",
      options: [
        "ADD INTO",
        "INSERT INTO",
        "CREATE RECORD",
        "NEW ROW"
      ],
      correctIndex: 1,
      explanation:
        "Syntax: `INSERT INTO Kunde (Name, Alter) VALUES ('Müller', 30);`"
    },
    {
      question: "19. Wie ändert man Daten in einer Tabelle?",
      options: ["MODIFY", "CHANGE", "UPDATE", "SET"],  
      correctIndex: 2,
      explanation:
        "`UPDATE Kunde SET Alter = 31 WHERE Name = 'Müller';` ändert den Wert."
    },
    {
      question: "20. Wie löscht man alle Datensätze einer Tabelle?",
      options: [
        "DROP TABLE",
        "DELETE * FROM",
        "DELETE FROM",
        "TRUNCATE RECORDS"
      ],
      correctIndex: 2,
      explanation:
        "`DELETE FROM Kunde;` entfernt alle Zeilen, `DROP TABLE` löscht die ganze Tabelle."
    },
    {
      question: "21. Was gehört zu funktionalen Anforderungen?",
      options: [
        "Performance-Vorgaben",
        "Sicherheitsrichtlinien",
        "Beschreibung des Systemverhaltens",
        "Design-Vorgaben"
      ],
      correctIndex: 2,
      explanation:
        "Funktional: *was* das System tun soll (z. B. Login, Suche)."
    },
    {
      question: "22. Was sind nicht-funktionale Anforderungen?",
      options: [
        "Use Cases",
        "Qualitäts- und Performance-Kriterien",
        "Datenbank-Design",
        "UML-Diagramme"
      ],
      correctIndex: 1,
      explanation:
        "Nicht-funktional: Qualitäten wie Performance (Antwortzeit <2 s), Sicherheit."
    },
    {
      question: "23. Was steht im Lastenheft?",
      options: [
        "Technische Architektur",
        "Implementierungsdetails",
        "Anforderungen des Auftraggebers",
        "Test-Skripte"
      ],
      correctIndex: 2,
      explanation:
        "Lastenheft beschreibt *was* gewünscht ist, ohne technische Umsetzung."
    },
    {
      question: "24. Was steht im Pflichtenheft?",
      options: [
        "Anforderungen des Auftraggebers",
        "Technische Realisierungsschritte",
        "Projektorganisation",
        "Benutzerdokumentation"
      ],
      correctIndex: 1,
      explanation:
        "Pflichtenheft zeigt, *wie* die Anforderungen umgesetzt werden (Architektur, Tools)."
    },
    {
      question: "25. Wofür nutzt man eine Stakeholder-Matrix?",
      options: [
        "Priorisierung von Tests",
        "Analyse der Beteiligten nach Einfluss und Interesse",
        "Erstellung von UML-Diagrammen",
        "Budget-Planung"
      ],
      correctIndex: 1,
      explanation:
        "Matrix kategorisiert Stakeholder in Einfluss/Interesse (z. B. hoch/gering)."
    },
    {
      question: "26. Was ist ein Meilenstein?",
      options: [
        "Ein Testfall",
        "Ein wichtiger Projekt­termin oder Ergebnis",
        "Eine Code-Review-Sitzung",
        "Ein UML-Symbol"
      ],
      correctIndex: 1,
      explanation:
        "Meilensteine markieren Phasen­übergänge (z. B. Abnahme, Go-Live)."
    },
    {
      question: "27. Wofür nutzt man ein Gantt-Diagramm?",
      options: [
        "Datenbankmodellierung",
        "Visualisierung von Aufgaben, Dauer und Abhängigkeiten",
        "Code-Versionskontrolle",
        "Testplan"
      ],
      correctIndex: 1,
      explanation:
        "Gantt zeigt Aufgabenbalken über Zeitachsen, Abhängigkeiten als Pfeile."
    },
    {
      question: "28. Welche Methode ist typisch für agile Planung?",
      options: [
        "Scrum",
        "Wasserfall",
        "V-Modell",
        "PRINCE2"
      ],
      correctIndex: 0,
      explanation:
        "Scrum arbeitet in kurzen Sprints mit Product Backlog und Retrospektiven."
    },
    {
      question: "29. Was ist ein Sprint?",
      options: [
        "Ein Prozessschritt im UML",
        "Ein kurzer Entwicklungs­zyklus (1–4 Wochen)",
        "Eine Datenbank­abfrage",
        "Ein Activity-Diagramm"
      ],
      correctIndex: 1,
      explanation:
        "Sprint liefert am Ende lauffähiges Inkrement und schließt mit Review/Retrospektive ab."
    },
    {
      question: "30. Wozu dient eine Retrospektive?",
      options: [
        "Projektabschlussbericht",
        "Reflexion über Sprint-Erfahrungen und Verbesserungen",
        "Code-Generierung",
        "Budget-Review"
      ],
      correctIndex: 1,
      explanation:
        "Retrospektive analysiert, was gut/lässt sich verbessern – Maßnahmen ableiten."
    },
    {
      question: "31. Was ist ein Testkonzept?",
      options: [
        "Sammlung von UML-Diagrammen",
        "Dokument mit Teststrategie, Testarten, Rollen und Werkzeugen",
        "Budget-Plan",
        "Projektplan"
      ],
      correctIndex: 1,
      explanation:
        "Testkonzept definiert, welche Tests (Unit, Integration, System) wie durchgeführt werden."
    },
    {
      question: "32. Was beschreibt die Testpyramide?",
      options: [
        "Viele UI-Tests, wenige Unit-Tests",
        "Basis: viele Unit, Mitte: Integration, Spitze: wenige End-to-End",
        "Gleich viele Tests jeder Art",
        "Nur Unit-Tests nötig"
      ],
      correctIndex: 1,
      explanation:
        "Pyramide empfiehlt: breite Basis an schnellen Unit-Tests, mittlere Integration, Spitze System-/UI-Tests."
    },
    {
      question: "33. Was ist ein Unit-Test?",
      options: [
        "Test kompletter Anwendung",
        "Test einzelner Funktionen oder Klassen",
        "Test des UI",
        "Test der Datenbankperformance"
      ],
      correctIndex: 1,
      explanation:
        "Unit-Tests prüfen isoliert eine Methode/Klasse, z. B. `calculateSum()` mit definiertem Input/Output."
    },
    {
      question: "34. Was testet ein Integrationstest?",
      options: [
        "Nur das UI",
        "Zusammenspiel mehrerer Module oder Services",
        "Performance",
        "Benutzerfreundlichkeit"
      ],
      correctIndex: 1,
      explanation:
        "Integrationstests prüfen Schnittstellen, z. B. Kommunikation zwischen Service & DB."
    },
    {
      question: "35. Was testet ein Systemtest?",
      options: [
        "Einzelne Funktionen",
        "Komplettes System in realer Umgebung",
        "Codequalität",
        "SQL-Performance"
      ],
      correctIndex: 1,
      explanation:
        "Systemtests validieren die Gesamtanwendung inkl. UI, Backend, DB."
    },
    {
      question: "36. Was ist ein Black-Box-Test?",
      options: [
        "Test ohne Kenntnis des Quellcodes",
        "Test mit Code-Analyse",
        "Test der DB-Struktur",
        "Test der UML-Modelle"
      ],
      correctIndex: 0,
      explanation:
        "Black-Box-Tests prüfen Eingabe/Ausgabe basierend auf Spezifikation, ohne Interna."
    },
    {
      question: "37. Was ist ein White-Box-Test?",
      options: [
        "Test ohne Spezifikation",
        "Test mit Blick auf den Quellcode und Pfade",
        "Test der UI-Buttons",
        "Test der Datenbanktabellen"
      ],
      correctIndex: 1,
      explanation:
        "White-Box-Tests prüfen intern Pfade/Branch-Coverage anhand des Codes."
    },
    {
      question: "38. Was bedeutet TDD (Test-Driven Development)?",
      options: [
        "Tests nach Code schreiben",
        "Tests vor dem Code schreiben und dann refaktorisieren",
        "Nur Unit-Tests schreiben",
        "Nur UI-Tests schreiben"
      ],
      correctIndex: 1,
      explanation:
        "TDD: Red (schreibe Test), Green (mach Test grün), Refactor (Code sauber machen)."
    },
    {
      question: "39. Was ist eine Code-Review?",
      options: [
        "Automatischer Testlauf",
        "Peer-Review von Quellcode",
        "Testfallgenerierung",
        "Performance-Analyse"
      ],
      correctIndex: 1,
      explanation:
        "Code-Reviews verbessern Qualität durch manuelle Inspektion im Team (z. B. Git-Merge-Request)."
    },
    {
      question: "40. Warum nutzt man Versionskontrolle (Git)?",
      options: [
        "Automatisches Testen",
        "Verwalten von Codeänderungen, Branching und Rollback",
        "Erzeugen von UML-Diagrammen",
        "Erstellen von Benutzerhandbüchern"
      ],
      correctIndex: 1,
      explanation:
        "Git speichert Snapshots, unterstützt parallele Arbeit und sicheres Zurückrollen."
    },
    {
      question: "41. Was versteht man unter UI-Prototyping?",
      options: [
        "Testautomatisierung",
        "Schnelle Skizze/Mockup der Benutzeroberfläche",
        "Datenbankmodell",
        "Code-Generierung"
      ],
      correctIndex: 1,
      explanation:
        "Prototyping erstellt Drahtmodelle (z. B. mit Figma) für frühes Feedback."
    },
    {
      question: "42. Welcher Grundsatz gehört zur ergonomischen UI-Gestaltung?",
      options: [
        "Alles auf einem Bildschirm anzeigen",
        "Hoher Kontrast und konsistente Bedien­elemente",
        "Versteckte Menüs",
        "Maximale Animation"
      ],
      correctIndex: 1,
      explanation:
        "Ergonomie: klare Struktur, ausreichend Kontrast, konsistente Buttons (Beispielgrafik)."
    },
    {
      question: "43. Was bedeutet Accessibility?",
      options: [
        "Nur mobil optimiert",
        "Zugänglichkeit für Menschen mit Einschränkungen (Screenreader)",
        "Nur hoher Kontrast",
        "Nur Tastatursteuerung"
      ],
      correctIndex: 1,
      explanation:
        "Accessibility stellt sicher, dass z. B. Sehbehinderte die App mit Screenreadern nutzen können."
    },
    {
      question: "44. Wofür steht MVC?",
      options: [
        "Model-View-Controller",
        "Main-View-Code",
        "Memory-Value-Cache",
        "Module-Version-Control"
      ],
      correctIndex: 0,
      explanation:
        "MVC trennt Daten (Model), UI (View) und Logik (Controller)."
    },
    {
      question: "45. Was ist ein Singleton-Pattern?",
      options: [
        "Erlaubt mehrere Instanzen",
        "Stellt nur eine Instanz einer Klasse sicher",
        "Erstellt Collections",
        "Verteilt Last"
      ],
      correctIndex: 1,
      explanation:
        "Singleton garantiert eine einzige Instanz (z. B. Logger-Klasse)."
    },
    {
      question: "46. Was macht das Factory-Pattern?",
      options: [
        "Erstellt Objekte über eine gemeinsame Schnittstelle",
        "Singleton-Instanz",
        "Löscht Objekte",
        "Testet Objekte"
      ],
      correctIndex: 0,
      explanation:
        "Factory kapselt Objekt­erzeugung und gibt sie über Methoden zurück."
    },
    {
      question: "47. Was ist das Observer-Pattern?",
      options: [
        "Verteilt Last",
        "Meldet Änderungen eines Subjekts an Observer",
        "Erstellt Objekte",
        "Singleton-Implementierung"
      ],
      correctIndex: 1,
      explanation:
        "Observer registriert sich beim Subjekt und wird bei Statusänderungen benachrichtigt."
    },
    {
      question: "48. Warum plant man Qualitätssicherung schon in der Planung?",
      options: [
        "Später keine Zeit mehr",
        "Frühe Defizite erkennen und Kosten sparen",
        "Nur um Tests zu dokumentieren",
        "Weil es vorgeschrieben ist"
      ],
      correctIndex: 1,
      explanation:
        "Frühe QS verhindert teure Fehler in späteren Phasen und spart Zeit/Kosten."
    },
    {
      question: "49. Was ist ein Testfall?",
      options: [
        "UML-Diagramm",
        "Beschreibung von Eingabe, Aktion und erwartetem Ergebnis",
        "Ein Code-Snippet",
        "Ein Use Case"
      ],
      correctIndex: 1,
      explanation:
        "Testfall definiert Schritte und erwartetes Verhalten, z. B. Login mit gültigen Daten."
    },
    {
      question: "50. Wofür dient Traceability in Anforderungen?",
      options: [
        "Testautomatisierung",
        "Nachvollziehbarkeit vom Requirement bis zum Code/Test",
        "UML-Sequenzdiagramme",
        "Projektabschlussbericht"
      ],
      correctIndex: 1,
      explanation:
        "Traceability verknüpft Lastenheft-Anforderungen mit Pflichtenheft, Code und Tests."
    }
  ];
  