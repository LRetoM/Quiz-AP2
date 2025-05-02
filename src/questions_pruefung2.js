// src/questions_pruefung2.js
export default [
    {
      question: "1. Was ist ein eindimensionales Array?",
      options: [
        "Ein Datenstruktur mit Paare aus Schlüssel und Wert",
        "Eine Liste von Elementen gleichen Typs, zugreifbar über Index",
        "Ein Baumdiagramm",
        "Ein verkettetes Element"
      ],
      correctIndex: 1,
      explanation:
        "Ein 1D-Array speichert z. B. `int[] zahlen = {1,2,3}`. Zugriff: `zahlen[0]` = 1. (Grafik: Kasten mit Indizes)"
    },
    {
      question: "2. Wie greift man auf das dritte Element eines Arrays `arr` zu?",
      options: ["arr.get(2)", "arr[3]", "arr[2]", "arr.at(3)"],
      correctIndex: 2,
      explanation:
        "`arr[2]` gibt das dritte Element zurück, da Indizes bei 0 beginnen."
    },
    {
      question: "3. Was ist ein zweidimensionales Array?",
      options: [
        "Array von Arrays, z. B. Matrix",
        "Liste von Listen beliebiger Tiefe",
        "Datenbanktabelle",
        "Verkettete Liste"
      ],
      correctIndex: 0,
      explanation:
        "Ein 2D-Array ist z. B. `int[][] mat = {{1,2},{3,4}}`. Zugriff: `mat[1][0]` = 3."
    },
    {
      question: "4. Wie liest man alle Elemente eines 1D-Arrays aus?",
      options: [
        "while-Schleife und Index-Inkrement",
        "for-Schleife i von 0 bis Länge-1",
        "do-while ohne Abbruch",
        "Array.forEach nicht existiert"
      ],
      correctIndex: 1,
      explanation:
        "Beispiel: `for(int i=0; i<arr.length; i++){…}`. Jeder Index wird besucht."
    },
    {
      question: "5. Wie durchläuft man alle Zeilen und Spalten eines 2D-Arrays?",
      options: [
        "Zwei geschachtelte for-Schleifen über i und j",
        "Einfaches foreach reicht",
        "Nur while-Schleife für i",
        "Recursion nötig"
      ],
      correctIndex: 0,
      explanation:
        "`for(i=0;i<rows;i++) for(j=0;j<cols;j++) arr[i][j]`. Geschachtelte Schleifen."
    },
    {
      question: "6. Was ist Pseudocode?",
      options: [
        "Echte Programmiersprache",
        "Ungenaue Textbeschreibung",
        "Strukturierte, sprachunabhängige Beschreibung eines Algorithmus",
        "Diagrammtyp"
      ],
      correctIndex: 2,
      explanation:
        "Pseudocode beschreibt Algorithmen mit natürlichsprachlicher Syntax. z. B. `IF x>0 THEN…`."
    },
    {
      question: "7. Worin unterscheidet sich Pseudocode von realem Code?",
      options: [
        "Pseudocode ist maschinenlesbar",
        "Pseudocode ist abstrakter und plattformunabhängig",
        "Es gibt keinen Unterschied",
        "Pseudocode nutzt zwingend UML"
      ],
      correctIndex: 1,
      explanation:
        "Pseudocode verzichtet auf Sprach-Details (Datentypen, Semikolon) für Klarheit."
    },
    {
      question: "8. Wofür nutzt man ein Sequenzdiagramm in Algorithmen?",
      options: [
        "Klassendefinition",
        "Darstellung des Nachrichtenflusses im Zeitverlauf",
        "Datenbankmodell",
        "Testprotokoll"
      ],
      correctIndex: 1,
      explanation:
        "Sequenzdiagramme zeigen, wie Module/Objekte Nachrichten senden (Zeitachse vertikal)."
    },
    {
      question: "9. Was zeigt ein Aktivitätsdiagramm für einen Algorithmus?",
      options: [
        "Codezeilen",
        "Kontrollfluss mit Aktionen, Entscheidungen und Parallelität",
        "Datenbanktabellen",
        "Klassenhierarchie"
      ],
      correctIndex: 1,
      explanation:
        "Aktivitätsdiagramme visualisieren Prozessschritte, etwa Schleifen und Verzweigungen."
    },
    {
      question: "10. Was macht der Bubble-Sort-Algorithmus?",
      options: [
        "Teilt Liste und sortiert Hälften",
        "Vergleicht und vertauscht benachbarte Elemente mehrfach",
        "Wählt kleinstes Element und tauscht es nach vorne",
        "Nutzen Hash-Tabellen"
      ],
      correctIndex: 1,
      explanation:
        "Bubble Sort: wiederholt über Liste laufen und Nachbarn tauschen, bis sortiert. (Animation empfohlen)"
    },
    {
      question: "11. Wie lautet die Laufzeit von Bubble Sort im Worst-Case?",
      options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
      correctIndex: 2,
      explanation:
        "Worst-Case: n Durchläufe × n Vergleiche → O(n²)."
    },
    {
      question: "12. Wie funktioniert Selection Sort?",
      options: [
        "Min-Element suchen und an korrekte Position tauschen",
        "Benachbarte Elemente tauschen",
        "Rekursiv teilen",
        "Mit Pivot-Element arbeiten"
      ],
      correctIndex: 0,
      explanation:
        "Selection Sort: min aus unsortiertem Teil finden, mit erstem tauschen. O(n²)."
    },
    {
      question: "13. Was macht Insertion Sort?",
      options: [
        "Sortiert durch wiederholtes Einfügen in sortierten Teil",
        "Teilt und sortiert Hälften",
        "Verwendet Heap-Tree",
        "Nutzt Binärsuche intern"
      ],
      correctIndex: 0,
      explanation:
        "Insertion Sort baut sortierte Teil beim Einfügen jedes neuen Elements auf. O(n²)."
    },
    {
      question: "14. Was ist lineare Suche?",
      options: [
        "Teilt Daten und sucht Hälfte",
        "Geht elementweise durch Liste bis Fund",
        "Sucht nur in sortierten Listen",
        "Nutzt Hash-Funktion"
      ],
      correctIndex: 1,
      explanation:
        "Linear Search: von Anfang bis Ende prüfen. Laufzeit O(n)."
    },
    {
      question: "15. Was ist binäre Suche (Binary Search)?",
      options: [
        "Sucht sequenziell",
        "Halbiert sortierte Liste schrittweise",
        "Hängt von Hashing ab",
        "Läuft in O(n²)"
      ],
      correctIndex: 1,
      explanation:
        "Binary Search halbiert Suchraum bei sortierter Liste → O(log n)."
    },
    {
      question: "16. Welche Voraussetzung braucht Binary Search?",
      options: [
        "Array muss unsortiert sein",
        "Array muss sortiert sein",
        "Array muss nur positive Zahlen enthalten",
        "Keine Voraussetzung"
      ],
      correctIndex: 1,
      explanation:
        "Binary Search funktioniert nur auf sortierten Daten."
    },
    {
      question: "17. Was versteht man unter Zeitkomplexität?",
      options: [
        "Länge des Codes",
        "Anzahl der Schritte in Abhängigkeit von n",
        "Benötigten Speicher",
        "Speicherformat"
      ],
      correctIndex: 1,
      explanation:
        "Zeitkomplexität beschreibt, wie viele Operationen ein Algorithmus in Abhängigkeit von Eingabegröße n benötigt."
    },
    {
      question: "18. Was ist der Unterschied zwischen O(n) und O(log n)?",
      options: [
        "O(n) wächst langsamer",
        "O(log n) wächst langsamer",
        "Kein Unterschied",
        "O(log n) ist linear"
      ],
      correctIndex: 1,
      explanation:
        "O(log n) steigt sehr langsam (z. B. binäre Suche), O(n) steigt proportional zur Eingabegröße."
    },
    {
      question: "19. Was ist Rekursion?",
      options: [
        "Schleife innerhalb Schleife",
        "Funktion ruft sich selbst auf",
        "Array von Arrays",
        "Datenbank-Verknüpfung"
      ],
      correctIndex: 1,
      explanation:
        "Rekursion definiert Problemlösung durch Selbstaufruf mit kleinerem Teilproblem."
    },
    {
      question: "20. Warum braucht jede rekursive Funktion einen Basisfall?",
      options: [
        "Sonst endlos weiterrechnen",
        "Um Speicher zu sparen",
        "Für bessere Lesbarkeit",
        "Basisfälle sind optional"
      ],
      correctIndex: 0,
      explanation:
        "Ohne Basisfall keine Abbruchbedingung → Stack Overflow."
    },
    {
      question: "21. Wie sieht Pseudocode für die Fakultätsberechnung aus?",
      options: [
        "factorial(n): if n==0 return 0 else return n*factorial(n-1)",
        "factorial(n): if n<=1 return 1 else return n*factorial(n-1)",
        "factorial(n): return n+factorial(n-1)",
        "factorial(n): while n>0 multiply"
      ],
      correctIndex: 1,
      explanation:
        "Korrekt: `IF n<=1 THEN RETURN 1 ELSE RETURN n*factorial(n-1)`."
    },
    {
      question: "22. Was ist ein Stack Overflow in Rekursion?",
      options: [
        "Speicherfehler durch zu tiefe Rekursion",
        "Datenbankfehler",
        "Fehler in Bubble Sort",
        "Compiler-Fehler"
      ],
      correctIndex: 0,
      explanation:
        "Stack Overflow entsteht, wenn Rekursion nicht terminiert und Stapelrahmen überlaufen."
    },
    {
      question: "23. Was bedeutet Divide and Conquer?",
      options: [
        "Algorithmus in Teile teilen, rekursiv lösen und Ergebnisse kombinieren",
        "Nur iterative Lösung",
        "Verkettete Listen nutzen",
        "Greedy-Ansatz"
      ],
      correctIndex: 0,
      explanation:
        "Divide and Conquer teilt Problem, löst Teilprobleme und kombiniert Lösungen (z. B. Merge Sort)."
    },
    {
      question: "24. Was ist Merge Sort?",
      options: [
        "Teilt Liste, sortiert Teilmengen und fügt sie zusammen",
        "Verwendet Hash-Tabellen",
        "Gibt Elemente in ursprünglicher Reihenfolge zurück",
        "Ein Greedy-Algorithmus"
      ],
      correctIndex: 0,
      explanation:
        "Merge Sort teilt rekursiv und verbindet sortierte Teillisten → O(n log n)."
    },
    {
      question: "25. Was ist Quick Sort?",
      options: [
        "Pivot-Element wählen, Liste teilen, sortiere rekursiv",
        "Wie Bubble Sort",
        "Nur für 2 Elemente",
        "Linearer Algorithmus"
      ],
      correctIndex: 0,
      explanation:
        "Quick Sort wählt Pivot, partitioniert und sortiert rekursiv → O(n log n) avg."
    },
    {
      question: "26. Bei Quick Sort, was passiert in der Partitionierungsphase?",
      options: [
        "Liste wird durchsucht und umgekehrt",
        "Elemente kleiner als Pivot links, größere rechts platzieren",
        "Array wird gelöscht",
        "Pseudocode generiert"
      ],
      correctIndex: 1,
      explanation:
        "Partition: alle <Pivot nach links, alle ≥Pivot nach rechts (in-place)."
    },
    {
      question: "27. Was ist der Greedy-Ansatz?",
      options: [
        "Rekursiv teilen",
        "Lokal bestmögliche Wahl ohne Rückblick",
        "Immer global optimal",
        "Nur bei Sortierung"
      ],
      correctIndex: 1,
      explanation:
        "Greedy-Algorithmen treffen in jedem Schritt die beste lokale Entscheidung."
    },
    {
      question: "28. Nenne ein Beispiel für einen Greedy-Algorithmus.",
      options: [
        "Dijkstra",
        "Merge Sort",
        "Bubble Sort",
        "Heapsort"
      ],
      correctIndex: 0,
      explanation:
        "Dijkstra wählt in jedem Schritt den nächsten Knoten mit minimaler Distanz."
    },
    {
      question: "29. Was ist Dijkstra’s Algorithmus?",
      options: [
        "Sortieralgorithmus",
        "Kürzeste Wege in Graphen finden",
        "Greedy-Algorithmus für Arrays",
        "Backtracking-Verfahren"
      ],
      correctIndex: 1,
      explanation:
        "Dijkstra berechnet minimalen Pfadgewicht von Startknoten zu allen anderen."
    },
    {
      question: "30. Was ist die Zeitkomplexität von Merge Sort?",
      options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
      correctIndex: 1,
      explanation:
        "Merge Sort hat im Worst-, Average- und Best-Case O(n log n)."
    },
    {
      question: "31. Was ist die Komplexität von Quick Sort im Worst-Case?",
      options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
      correctIndex: 2,
      explanation:
        "Worst-Case (schlechtes Pivot): O(n²), avg. jedoch O(n log n)."
    },
    {
      question: "32. Was misst die Space Complexity?",
      options: [
        "Länge des Codes",
        "Benötigten Arbeitsspeicher in Abhängigkeit von n",
        "Anzahl der Zeilen",
        "Zeitaufwand"
      ],
      correctIndex: 1,
      explanation:
        "Space Complexity beschreibt zusätzlichen Speicherbedarf (z. B. Rekursionstiefe)."
    },
    {
      question: "33. Was ist ein Stack?",
      options: [
        "FIFO-Datenstruktur",
        "LIFO-Datenstruktur",
        "Graphenknoten",
        "Hash-Map"
      ],
      correctIndex: 1,
      explanation:
        "Stack folgt Last-In-First-Out, z. B. Browser-Back-Funktion."
    },
    {
      question: "34. Was ist eine Queue?",
      options: ["Graph", "LIFO", "FIFO", "Matrix"],  
      correctIndex: 2,
      explanation:
        "Queue folgt First-In-First-Out, z. B. Druckaufträge in Warteschlange."
    },
    {
      question: "35. Wie implementiert man eine Queue in einem Array?",
      options: [
        "Mit zwei Indizes head und tail",
        "Nur mit head-Index",
        "Nur mit tail-Index",
        "Nicht möglich"
      ],
      correctIndex: 0,
      explanation:
        "Queue im Array: head zeigt auf vorderstes, tail auf nächstes freies Element."
    },
    {
      question: "36. Was ist eine verkettete Liste?",
      options: [
        "Array mit fester Länge",
        "Dynamische Struktur aus Knoten mit Verweisen",
        "Hash-Tabelle",
        "Binärer Baum"
      ],
      correctIndex: 1,
      explanation:
        "Linked List besteht aus Knoten, jeder verweist auf nächsten (Pointer)."
    },
    {
      question: "37. Was ist der Vorteil verketteter Listen gegenüber Arrays?",
      options: [
        "Zufälliger Indexzugriff schneller",
        "Einfügen/Löschen ist O(1) am Listenanfang",
        "Kompaktere Speicherung",
        "Amortisierte Constant Time-Suche"
      ],
      correctIndex: 1,
      explanation:
        "Einfügen/Löschen am Kopf ist konstant, keine Datenverschiebung nötig."
    },
    {
      question: "38. Wofür wird eine Hash-Tabelle eingesetzt?",
      options: [
        "Sortieren von Daten",
        "Schnelle Schlüsselwertsuche in O(1) erwartet",
        "Graphenanalyse",
        "Matrixmultiplikation"
      ],
      correctIndex: 1,
      explanation:
        "Hash-Map speichert Paare key→value, Suche durchschnittlich O(1)."
    },
    {
      question: "39. Was ist Kollisionsbehandlung in Hashing?",
      options: [
        "Verwerfen des zweiten Eintrags",
        "Methoden wie Chaining oder Open Addressing zum Auflösen",
        "Automatisches Löschen",
        "Keine Behandlung nötig"
      ],
      correctIndex: 1,
      explanation:
        "Collision Resolution z. B. Verkettung (Linked List) oder lineares Sondieren."
    },
    {
      question: "40. Was ist Backtracking?",
      options: [
        "Greedy-Verfahren",
        "Algorithmus, der Pfade rekursiv ausprobiert und zurückgeht",
        "Sortieralgorithmus",
        "Datenbank-Backup"
      ],
      correctIndex: 1,
      explanation:
        "Backtracking durchsucht Lösungsraum rekursiv, verwirft Teillösungen beim Fehlschlag."
    },
    {
      question: "41. Nenne ein Beispiel für Backtracking.",
      options: [
        "Bubble Sort",
        "Tiefensuche im Labyrinth",
        "Binary Search",
        "Merge Sort"
      ],
      correctIndex: 1,
      explanation:
        "Maze-Lösen: Wege ausprobieren und bei Sackgasse zurückkehren."
    },
    {
      question: "42. Was misst man mit einem Trace-Table?",
      options: [
        "Speicherverbrauch",
        "Zwischenwerte eines Algorithmus schrittweise",
        "Netzwerklatenz",
        "Anzahl der Fragen"
      ],
      correctIndex: 1,
      explanation:
        "Trace-Tables zeigen Variablenwerte nach jedem Schritt für Debugging."
    },
    {
      question: "43. Was bedeutet „in-place“ Sortierung?",
      options: [
        "Verwendet externen Speicher",
        "Sortiert ohne große zusätzliche Datenstruktur",
        "Erstellt neue Liste",
        "Benötigt Plugins"
      ],
      correctIndex: 1,
      explanation:
        "In-place tauscht Elemente im Originalarray, braucht nur O(1) extra Space."
    },
    {
      question: "44. Was ist externes Sorting?",
      options: [
        "Sortieren im RAM",
        "Sortieren mit Daten, die nicht komplett in RAM passen",
        "Nur für kleine Datenmengen",
        "Keine Verwendung"
      ],
      correctIndex: 1,
      explanation:
        "Externes Sorting nutzt Festplatte für große Daten, z. B. Merge-Phase auf Disk."
    },
    {
      question: "45. Wie erkennt man, dass ein Algorithmus korrekt ist?",
      options: [
        "Durch manuelles Beweisen oder formale Verifikation",
        "Nur durch Tests",
        "Durch Anzahl der Zeilen",
        "Automatisch"
      ],
      correctIndex: 0,
      explanation:
        "Korrektheit kann man formell beweisen (Invarianzen) oder umfangreich testen."
    },
    {
      question: "46. Was ist ein Heuristik-Algorithmus?",
      options: [
        "Mathematisch exakt",
        "Schätzt Lösung in angemessener Zeit, evtl. nicht optimal",
        "Nur Brute-Force",
        "Nur für Sortierung"
      ],
      correctIndex: 1,
      explanation:
        "Heuristiken liefern schnell gute, aber nicht garantierte optimale Lösungen."
    },
    {
      question: "47. Wofür wird Dijkstra nicht verwendet?",
      options: [
        "Kürzeste Pfade in positiv gewichteten Graphen",
        "Graphen mit negativen Gewichten",
        "Routing-Protokolle",
        "Navigation"
      ],
      correctIndex: 1,
      explanation:
        "Dijkstra verlangt nicht-negative Kantengewichte. Für negative Bellman-Ford."
    },
    {
      question: "48. Was beschreibt Greedy-Choice-Property?",
      options: [
        "Lokale Wahl führt zu globaler Lösung",
        "Immer optimale Lösung",
        "Nur für Arrays",
        "Nur für Graphen"
      ],
      correctIndex: 0,
      explanation:
        "Greedy-Algorithmen nutzen Eigenschaften, dass lokale Entscheidungen global optimal sein können."
    },
    {
      question: "49. Was ist der Unterschied zwischen Tiefen- und Breitensuche (DFS vs. BFS)?",
      options: [
        "DFS geht in Tiefe, BFS in Breite",
        "DFS ist schneller als BFS",
        "BFS nutzt weniger Speicher",
        "Kein Unterschied"
      ],
      correctIndex: 0,
      explanation:
        "DFS erkundet Pfade rekursiv tief, BFS Level für Level. (Grafik: Baumdurchquerung)"
    },
    {
      question: "50. Wann wählt man einen Greedy-Algorithmus statt Divide-and-Conquer?",
      options: [
        "Wenn lokale optimal immer global optimal ist",
        "Wenn Problem klein ist",
        "Wenn man keine Rekursion mag",
        "Wenn man Bubble Sort implementieren will"
      ],
      correctIndex: 0,
      explanation:
        "Greedy ist geeignet, wenn lokale Wahl zu global optimal führt (z. B. Minimal-Spanning-Tree)."
    },
    {
        question: "51. Was bedeutet die Notation O(n) in der Algorithmusanalyse?",
        options: [
          "Konstante Laufzeit",
          "Lineare Laufzeit in Abhängigkeit von n",
          "Quadratische Laufzeit",
          "Logarithmische Laufzeit"
        ],
        correctIndex: 1,
        explanation: "O(n) beschreibt eine lineare Laufzeit: Die benötigte Zeit wächst proportional zur Eingangsgröße n."
      },
      {
        question: "52. Welcher Sortieralgorithmus hat im Durchschnitt O(n·log n)-Laufzeit?",
        options: [
          "Bubble Sort",
          "Insertion Sort",
          "Merge Sort",
          "Selection Sort"
        ],
        correctIndex: 2,
        explanation: "Merge Sort teilt das Feld rekursiv und fügt dann in O(n) zusammen – insgesamt O(n·log n)."
      },
      {
        question: "53. Welcher Algorithmus ist stabil?",
        options: [
          "Selection Sort",
          "Merge Sort",
          "Quick Sort (Lomuto-Partition)",
          "Heap Sort"
        ],
        correctIndex: 1,
        explanation: "Merge Sort ist stabil, da gleiche Elemente ihre relative Reihenfolge behalten."
      },
      {
        question: "54. Welche Voraussetzung muss für Binary Search (binäre Suche) erfüllt sein?",
        options: [
          "Die Liste muss zyklisch sein",
          "Die Liste muss vorher sortiert sein",
          "Die Liste muss nur aus Integern bestehen",
          "Die Liste darf keine Duplikate enthalten"
        ],
        correctIndex: 1,
        explanation: "Binary Search setzt eine aufsteigend sortierte Liste voraus, um den Suchbereich halbieren zu können."
      },
      {
        question: "55. Was ist der Worst-Case von Bubble Sort?",
        options: [
          "O(n)",
          "O(n·log n)",
          "O(n²)",
          "O(log n)"
        ],
        correctIndex: 2,
        explanation: "Im schlechtesten Fall (absteigend sortiertes Feld) braucht Bubble Sort O(n²) Vergleiche und Vertauschungen."
      },
      {
        question: "56. Wie viele Vergleiche braucht Linear Search (lineare Suche) im Durchschnitt?",
        options: [
          "O(1)",
          "O(n/2)",
          "O(n·log n)",
          "O(n²)"
        ],
        correctIndex: 1,
        explanation: "Im Durchschnitt wird etwa die Hälfte der Liste durchsucht: O(n/2) = O(n)."
      },
      {
        question: "57. Was beschreibt ‚in-place‘ bei einem Algorithmus?",
        options: [
          "Verwendung zusätzlicher Datenstrukturen",
          "Keine zusätzlichen Datenstrukturen außer O(1) Speicher",
          "Always recursive",
          "Nur iterativ implementierbar"
        ],
        correctIndex: 1,
        explanation: "In-place bedeutet, dass nur konstanter Zusatzspeicher (O(1)) verwendet wird, Daten werden im Originalfeld umsortiert."
      },
      {
        question: "58. Welche Datenstruktur eignet sich für LIFO-Zugriff?",
        options: [
          "Queue",
          "Stack",
          "Hashmap",
          "Binary Tree"
        ],
        correctIndex: 1,
        explanation: "Ein Stack (Stapel) erlaubt Last-In–First-Out: Elemente werden in umgekehrter Einfügereihenfolge entnommen."
      },
      {
        question: "59. Was ist das ‚Divide and Conquer‘-Prinzip?",
        options: [
          "Iteration über das gesamte Feld",
          "Rekursive Teilung des Problems und Zusammenführen der Teillösungen",
          "Greedy-Algorithmus",
          "Dynamische Speicherzuweisung"
        ],
        correctIndex: 1,
        explanation: "Divide and Conquer teilt das Problem rekursiv in Teilprobleme, löst diese und kombiniert die Ergebnisse."
      },
      {
        question: "60. Was beschreibt ein Tail-Call in der Rekursion?",
        options: [
          "Letzte Anweisung einer Funktion ist rekursiver Aufruf",
          "Rekursiver Aufruf in einer Schleife",
          "Nutzung von Tail-Recursion-Optimierung",
          "Mutual Recursion"
        ],
        correctIndex: 0,
        explanation: "Ein Tail-Call ist ein rekursiver Aufruf als letzte Aktion, oft optimierbar zu Iteration (Tail-Call-Optimization)."
      },
      {
        question: "61. Wie lautet die durchschnittliche Laufzeit von Quick Sort?",
        options: [
          "O(n)",
          "O(n·log n)",
          "O(n²)",
          "O(log n)"
        ],
        correctIndex: 1,
        explanation: "Im Durchschnitt wählt Quick Sort gute Pivots und läuft in O(n·log n). Worst-Case ist O(n²)."
      },
      {
        question: "62. Welches Prinzip nutzt Dynamic Programming?",
        options: [
          "Greedy Choices",
          "Memoization und Teilprobleme wiederverwenden",
          "Zufällige Auswahl",
          "Backtracking"
        ],
        correctIndex: 1,
        explanation: "Dynamic Programming speichert Teillösungen (Memoization) und vermeidet so erneute Berechnungen."
      },
      {
        question: "63. Welche Suchalgorithmus-Art ist BFS?",
        options: [
          "Depth-First Search",
          "Breadth-First Search",
          "Binary Search",
          "Greedy Search"
        ],
        correctIndex: 1,
        explanation: "Breadth-First Search durchsucht schichtweise nach Entfernung zur Startnode (Queue-basiert)."
      },
      {
        question: "64. Was ist der Unterschied zwischen DFS und BFS?",
        options: [
          "DFS verwendet Queue, BFS Stack",
          "DFS vollzieht Tiefenexploration, BFS Ebenenexploration",
          "DFS ist immer schneller",
          "BFS ist immer in-place"
        ],
        correctIndex: 1,
        explanation: "DFS geht so tief wie möglich (Stack/Rekursion), BFS erkundet zuerst alle Nachbarn einer Knotenebene."
      },
      {
        question: "65. Warum ist Hashing im Durchschnitt O(1)?",
        options: [
          "Weil alle Einträge sortiert sind",
          "Weil Zugriffe direkt über den Hash-Index erfolgen",
          "Weil es keinen Speicherbedarf gibt",
          "Weil nur kleine Datenmengen erlaubt sind"
        ],
        correctIndex: 1,
        explanation: "Durch eine Hashfunktion wird der Index direkt berechnet, sodass Insert/Lookup im Durchschnitt konstant sind."
      },
      {
        question: "66. Was passiert bei einer Hash-Collision?",
        options: [
          "Eintrag wird überschrieben",
          "Beide Elemente werden gelöscht",
          "Man nutzt Chaining oder Open Addressing zur Konfliktlösung",
          "Das Programm stürzt ab"
        ],
        correctIndex: 2,
        explanation: "Kollisionen werden z. B. per Chaining (Liste pro Bucket) oder Open Addressing (Sondierung) behandelt."
      },
      {
        question: "67. Welche Komplexität hat ein verschachtelter Doppel-Loop (z.B. for i=0..n, for j=0..n)?",
        options: [
          "O(n)",
          "O(n·log n)",
          "O(n²)",
          "O(log n)"
        ],
        correctIndex: 2,
        explanation: "Zwei Schleifen über n verschachtelt führen zu O(n²) Laufzeit."
      },
      {
        question: "68. Wie kann man die Laufzeit von O(n²) auf O(n·log n) bringen?",
        options: [
          "Indem man Bubble Sort verwendet",
          "Indem man Merge- oder Quick Sort einsetzt",
          "Indem man Listen verdoppelt",
          "Indem man rekursiv ohne Basisfall arbeitet"
        ],
        correctIndex: 1,
        explanation: "Merge Sort und Quick Sort haben durchschnittlich O(n·log n), statt O(n²) wie einfache Sortiermethoden."
      },
      {
        question: "69. Was ist der Speicherbedarf (Space Complexity) von Merge Sort?",
        options: [
          "O(1)",
          "O(n)",
          "O(log n)",
          "O(n²)"
        ],
        correctIndex: 1,
        explanation: "Merge Sort benötigt zusätzliche Felder gleicher Größe wie das Eingangsfeld: O(n)."
      },
      {
        question: "70. Wie implementiert man eine rekursive Faktorfunktion korrekt?",
        options: [
          "Ohne Abbruchbedingung",
          "Mit Basisfall n == 0 und Rekursion für n·fakt(n–1)",
          "Nur mit while-Schleife",
          "Mit dynamischer Programmierung"
        ],
        correctIndex: 1,
        explanation: "Ein Basisfall (n == 0 → 1) verhindert unendliche Rekursion; sonst aufruf fakt(n–1)."
      },
      {
        question: "71. Welche Ausgabe erzeugt der Pseudocode: sum=0; for i=1 to n: sum += i?",
        options: [
          "n",
          "n·(n+1)/2",
          "n²",
          "n!"
        ],
        correctIndex: 1,
        explanation: "Die Schleife summiert 1…n, Ergebnis ist die Dreieckszahl n·(n+1)/2."
      },
      {
        question: "72. Wie bezeichnet man eine Funktion ohne Seiteneffekte?",
        options: [
          "Imperativ",
          "Rein (pure)",
          "Rekursiv",
          "Iterativ"
        ],
        correctIndex: 1,
        explanation: "Pure Functions haben keine Seiteneffekte und liefern immer dasselbe Ergebnis bei gleichen Eingaben."
      },
      {
        question: "73. Wie lauten die Traversierungsarten eines binären Baums?",
        options: [
          "Pre-, In-, Post-Order",
          "Left-Right-Width",
          "Breadth-Stack",
          "Up-Down-Level"
        ],
        correctIndex: 0,
        explanation: "Bei Pre-/In-/Post-Order wird Node, Links, Rechts bzw. Verschiedene Reihenfolgen besucht."
      },
      {
        question: "74. Welcher Algorithmus eignet sich für kürzeste Wege in ungewichteten Graphen?",
        options: [
          "Dijkstra",
          "Bellman-Ford",
          "Breadth-First Search",
          "Depth-First Search"
        ],
        correctIndex: 2,
        explanation: "BFS findet in ungewichteten Graphen kürzeste Pfade in O(V+E)-Zeit."
      },
      {
        question: "75. Was ist Amortisierte Analyse?",
        options: [
          "Worst-Case Analyse",
          "Betrachtung der durchschnittlichen Kosten über viele Operationen",
          "Only constant time",
          "Nur für rekursive Algorithmen"
        ],
        correctIndex: 1,
        explanation: "Amortisierte Analyse verteilt teure Operationen auf viele Operationen, z.B. dynamisches Array-Resize."
      },
      {
        question: "76. Wie funktioniert ein dynamisches Array beim Hinzufügen?",
        options: [
          "Es passt sich automatisch an und verdoppelt bei voller Kapazität",
          "Es wird nie vergrößert",
          "Es löscht alte Einträge",
          "Es verwendet LinkedList intern"
        ],
        correctIndex: 0,
        explanation: "Dynamische Arrays verdoppeln typischerweise ihre Kapazität, wenn sie voll sind – amortisierte O(1)-Insert."
      },
      {
        question: "77. Welcher Algorithmus nutzt Priority Queue?",
        options: [
          "Heap Sort",
          "Merge Sort",
          "Bubble Sort",
          "Insertion Sort"
        ],
        correctIndex: 0,
        explanation: "Heap Sort basiert auf einem Heap (Priority Queue), um das größte/kleinste Element zu extrahieren."
      },
      {
        question: "78. Was macht ein ‚Greedy‘-Algorithmus?",
        options: [
          "Wählt in jedem Schritt die lokal beste Option",
          "Löst das Problem global optimal",
          "Verwendet immer Rekursion",
          "Macht Backtracking"
        ],
        correctIndex: 0,
        explanation: "Greedy-Ansätze treffen lokale Entscheidungen ohne Zurückspringen, z.B. Auswahl von nächstbester Münze."
      },
      {
        question: "79. Wann ist Greedy nicht optimal?",
        options: [
          "Bei kanonischem Münzwechsel",
          "Bei generellen Münzsystemen ohne kanonische Struktur",
          "Bei schnellen Algorithmen",
          "Immer optimal"
        ],
        correctIndex: 1,
        explanation: "Ohne kanonisches System kann Greedy suboptimal sein; man benötigt DP für global optimale Lösung."
      },
      {
        question: "80. Wie unterscheidet sich ‚Backtracking‘ von ‚Divide and Conquer‘?",
        options: [
          "Backtracking probiert Pfade und verwirft sie bei Fehlschlag",
          "Backtracking teilt Probleme auf",
          "Beides identisch",
          "Divide and Conquer nutzt Greedy"
        ],
        correctIndex: 0,
        explanation: "Backtracking erkundet systematisch Möglichkeiten und verwirft unpassende (z. B. N-Queens)."
      },
      {
        question: "81. Welche Komplexität hat Fibonacci-Rekursion ohne Memoization?",
        options: [
          "O(n)",
          "O(2ⁿ)",
          "O(n·log n)",
          "O(n²)"
        ],
        correctIndex: 1,
        explanation: "Die naive Fibonacci-Rekursion ruft sich doppelt auf und wächst exponentiell: O(2ⁿ)."
      },
      {
        question: "82. Wie verringert man die Exponentialzeit bei Fibonacci auf O(n)?",
        options: [
          "Durch Memoization oder Iteration",
          "Durch Erhöhung der Rekursionstiefe",
          "Durch Randomisierung",
          "Durch Greedy"
        ],
        correctIndex: 0,
        explanation: "Memoization oder eine einfache Schleife speichert Teilergebnisse und erreicht lineare Laufzeit."
      },
      {
        question: "83. Was ist ein ‚Struktogramm‘?",
        options: [
          "Ein UML-Diagramm",
          "Ein grafisches Programmablaufdiagramm",
          "Ein Datenmodell",
          "Ein Use-Case-Diagramm"
        ],
        correctIndex: 1,
        explanation: "Struktogramme (Nassi–Shneiderman) stellen Programmabläufe in Kästchenblockform dar."
      },
      {
        question: "84. Welche Schleifenstruktur gibt es in Pseudocode typischerweise?",
        options: [
          "for, while, repeat-until",
          "do-while only",
          "foreach only",
          "switch-case"
        ],
        correctIndex: 0,
        explanation: "Pseudocode nutzt for-Schleifen, while- und repeat-until-Loops, um Iterationen zu beschreiben."
      },
      {
        question: "85. Was beschreibt ‚Heapify‘?",
        options: [
          "Den Aufbau eines Heaps aus einem Array",
          "Die Verdopplung eines Arrays",
          "Die Suche im Heap",
          "Das Sortieren mit Bubble Sort"
        ],
        correctIndex: 0,
        explanation: "Heapify transformiert ein Array in einen gültigen Heap (O(n)-Algorithmus)."
      },
      {
        question: "86. Welche Aussage ist richtig zu Pivot-Wahl in Quick Sort?",
        options: [
          "Immer das erste Element wählen",
          "Idealerweise median-of-three wählen, um Worst-Case zu vermeiden",
          "Niemals das letzte wählen",
          "Pivot muss immer zufällig sein"
        ],
        correctIndex: 1,
        explanation: "Median-of-three (erstes, mittleres, letztes Element) minimiert ungünstige Partitionen."
      },
      {
        question: "87. Was macht eine ‚Stable Sort‘-Eigenschaft aus?",
        options: [
          "Erhält relative Reihenfolge gleicher Elemente",
          "Sortiert in-place",
          "Verwendet O(1)-Zusatzspeicher",
          "Ist immer schneller"
        ],
        correctIndex: 0,
        explanation: "Stable Sorts wie Merge Sort behalten die Reihenfolge gleicher Schlüssel bei."
      },
      {
        question: "88. Welcher Algorithmus ist nicht-stabil, aber in-place?",
        options: [
          "Insertion Sort",
          "Merge Sort",
          "Heap Sort",
          "Bubble Sort"
        ],
        correctIndex: 2,
        explanation: "Heap Sort ist in-place, aber nicht stabil: gleiche Elemente können ihre Reihenfolge verlieren."
      },
      {
        question: "89. Wie funktioniert eine Tiefensuche (DFS) iterativ?",
        options: [
          "Mit einer Queue",
          "Mit einem Stack",
          "Mit Rekursion ausschließlich",
          "Mit Hashmaps"
        ],
        correctIndex: 1,
        explanation: "DFS kann rekursiv oder mit eigenem Stack implementiert werden, um Knoten tief zu erkunden."
      },
      {
        question: "90. Was ist ‚Backtracking‘ bei Graphenproblemen?",
        options: [
          "Wegsuche und Zurückgehen bei Sackgassen",
          "Sortieren von Knoten",
          "Greedy-Pfadwahl",
          "Speichern aller Pfade"
        ],
        correctIndex: 0,
        explanation: "Backtracking probiert Pfade aus, geht bei Fehlschlag zurück und sucht alternative Wege."
      },
      {
        question: "91. Warum ist O(log n) schneller als O(n)?",
        options: [
          "Weil logarithmische Algorithmen mehr Loops verwenden",
          "Weil log n langsamer ist",
          "Weil Suchbereich exponentiell schrumpft",
          "Weil n immer kleiner ist"
        ],
        correctIndex: 2,
        explanation: "Algorithmen wie Binary Search halbieren den Suchbereich in jedem Schritt → logarithmische Laufzeit."
      },
      {
        question: "92. In welchem Fall ist Quick Sort O(n²)?",
        options: [
          "Wenn das Array leer ist",
          "Wenn Pivot stets schlechtes Partitionsergebnis liefert (z. B. größtes/kleinstes Element)",
          "Wenn Merge Sort verwendet wird",
          "Wenn n < 2"
        ],
        correctIndex: 1,
        explanation: "Schlechte Pivotauswahl (z. B. immer erstes Element in sortiertem Array) führt zu O(n²)."
      },
      {
        question: "93. Was ist ‚Memoization‘?",
        options: [
          "Tatsächliche Ausführung aller rekursiven Aufrufe",
          "Speichern von Funktionsaufrufen, um Wiederholungen zu vermeiden",
          "Verwendung von while statt for",
          "Ein Greedy-Verfahren"
        ],
        correctIndex: 1,
        explanation: "Memoization merkt sich Ergebnisse teurer Funktionsaufrufe und gibt sie bei gleicher Eingabe zurück."
      },
      {
        question: "94. Wie lautet die Komplexität von Bucket Sort im besten Fall?",
        options: [
          "O(n²)",
          "O(n)",
          "O(log n)",
          "O(n·log n)"
        ],
        correctIndex: 1,
        explanation: "Im idealen Fall, wenn Elemente gleichmäßig verteilt sind, erreicht Bucket Sort O(n)."
      },
      {
        question: "95. Welche Datenstruktur wird oft für LRU-Caches verwendet?",
        options: [
          "Array",
          "Hashmap + doppelt verkettete Liste",
          "Stack",
          "Binärer Suchbaum"
        ],
        correctIndex: 1,
        explanation: "LRU-Caches kombinieren Hashmap (O(1) Lookup) mit doppelt verketteter Liste (O(1) Entfernen/Einfügen)."
      },
      {
        question: "96. Wofür steht ‚DP‘ im Algorithmus-Kontext?",
        options: [
          "Data Protection",
          "Dynamic Programming",
          "Depth Partition",
          "Direct Processing"
        ],
        correctIndex: 1,
        explanation: "DP bedeutet Dynamic Programming – Wiederverwendung von Teilergebnissen zur Effizienzsteigerung."
      },
      {
        question: "97. Was ist ein ‚Greedy‘-Beispielproblem?",
        options: [
          "Minimum Spanning Tree (Kruskal)",
          "Bubble Sort",
          "Fibonacci-Rekursion",
          "Merge Sort"
        ],
        correctIndex: 0,
        explanation: "Kruskal wählt jeweils die günstigste Kante (Greedy) und findet so MST in O(E·log V)."
      },
      {
        question: "98. Wie testest du einen Algorithmus mit Pseudocode am schnellsten?",
        options: [
          "Manuelles Durchspielen mit Beispielwerten",
          "Automatisches Deployment",
          "Nur Log-Ausgaben",
          "Nur Unit-Tests"
        ],
        correctIndex: 0,
        explanation: "Manuelles Dry-Run am Pseudocode mit kleinen Beispieldaten zeigt Fehlermöglichkeiten schnell."
      },
      {
        question: "99. Was sind Loop-Invariants?",
        options: [
          "Bedingungen, die vor und nach jeder Schleifeniteration gelten müssen",
          "Vorerst ungenutzte Variablen",
          "Schleifen ohne Abbruch",
          "Nur für while-Loops"
        ],
        correctIndex: 0,
        explanation: "Loop-Invariants sind Aussagen, die zu Beginn und Ende jeder Iteration wahr sein müssen – wichtig für Korrektheitsbeweise."
      },
      {
        question: "100. Was beschreibt eine ‚Greedy-Choice Property‘?",
        options: [
          "Lokale Wahl führt immer zu global optimaler Lösung",
          "Immer optimale Laufzeit",
          "Erst rekursiv, dann iterativ",
          "Nur bei integeren Daten"
        ],
        correctIndex: 0,
        explanation: "Greedy-Choice Property bedeutet, dass lokale, unmittelbar beste Entscheidungen zu einer optimalen Gesamtlösung führen."
      }
  ];
  