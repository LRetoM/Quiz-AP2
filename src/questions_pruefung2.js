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
    }
  ];
  