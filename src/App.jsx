// src/App.jsx
import React, { useState, useEffect } from 'react';
import questionsPruefung1 from './questions_pruefung1';
import questionsPruefung2 from './questions_pruefung2';
import questionsPruefung3 from './questions_pruefung3';

const questionPools = {
  pruefung1: questionsPruefung1,
  pruefung2: questionsPruefung2,
  pruefung3: questionsPruefung3
};

const quizInfos = [
  { key: 'pruefung1', label: 'Planen und Umsetzen eines Softwareprodukts' },
  { key: 'pruefung2', label: 'Entwickeln und Umsetzen von Algorithmen' },
  { key: 'pruefung3', label: 'Wirtschafts- und Sozialkunde (WiSo)' }
];



// —————— Styles ——————
const styles = {
  container: {
    minHeight: '100vh',
    padding: '1rem',
    background: 'linear-gradient(135deg, #e0f7fa, #e1bee7)',
    fontFamily: 'Arial, sans-serif',
    color: '#212121',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    background: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '600px',
    padding: '1.5rem',
    boxSizing: 'border-box'
  },
  title: { margin: 0, marginBottom: '1rem', fontSize: '1.75rem', textAlign: 'center' },
  menuButton: {
    padding: '1rem 2rem',
    margin: '0.5rem',
    fontSize: '1rem',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    background: '#00796b',
    color: '#fff',
    transition: 'transform .1s'
  },
  quizWrapper: { width: '100%', maxWidth: '600px' },
  progressBarContainer: {
    height: '8px',
    background: '#ccc',
    borderRadius: '4px',
    overflow: 'hidden',
    marginBottom: '1rem'
  },
  progressBar: pct => ({
    width: `${pct}%`,
    height: '100%',
    background: '#00796b',
    transition: 'width .4s ease'
  }),
  question: { fontSize: '1.25rem', marginBottom: '1rem' },
  optionsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: '0.75rem'
  },
  nav: { display: 'flex', justifyContent: 'space-between', marginTop: '1rem' },
  navButton: {
    padding: '0.75rem 1.5rem',
    border: 'none',
    borderRadius: '6px',
    background: '#8e24aa',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '1rem'
  },
  result: { textAlign: 'center' }
};

// —————— OptionButton Component ——————
function OptionButton({ children, onClick, disabled, state }) {
  // state: 'default' | 'correct' | 'wrong'
  const base = {
    padding: '1rem',
    borderRadius: '6px',
    border: '2px solid #ccc',
    fontSize: '1rem',
    cursor: disabled ? 'default' : 'pointer',
    userSelect: 'none',
    transition: 'background .3s, border-color .3s, transform .1s',
    textAlign: 'left',
    background: '#fafafa'
  };
  let style = { ...base };
  if (state === 'correct') {
    style = { ...style, background: '#e8f5e9', borderColor: '#4caf50' };
  } else if (state === 'wrong') {
    style = { ...style, background: '#ffebee', borderColor: '#e53935' };
  }

  return (
    <button
      style={style}
      onClick={disabled ? null : onClick}
      disabled={disabled}
      onMouseDown={e => !disabled && (e.currentTarget.style.transform = 'scale(0.98)')}
      onMouseUp={e => (e.currentTarget.style.transform = 'scale(1)')}
    >
      {children}
    </button>
  );
}

// —————— Main App ——————
export default function App() {
  const [stage, setStage] = useState('menu'); // menu | quiz | result
  const [examKey, setExamKey] = useState('pruefung1');
  const [queue, setQueue] = useState([]);
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [highscores, setHighscores] = useState({});
  const [selected, setSelected] = useState(null);
  const [flipped, setFlipped] = useState(false);

  // Load Highscores
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('highscores') || '{}');
    setHighscores(stored);
  }, []);

  // Save Highscore
  useEffect(() => {
    if (stage === 'result') {
      const prev = highscores[examKey] || 0;
      if (score > prev) {
        const neu = { ...highscores, [examKey]: score };
        localStorage.setItem('highscores', JSON.stringify(neu));
        setHighscores(neu);
      }
    }
  }, [stage]);

  // Shuffle helper
  const shuffle = arr => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  // Start Quiz
  const startQuiz = key => {
    setExamKey(key);
    const list = shuffle(questionPools[key]);
    setQueue(list);
    setIdx(0);
    setScore(0);
    setSelected(null);
    setFlipped(false);
    setStage('quiz');
  };

  const handleAnswer = correct => {
    if (correct) {
      setScore(s => s + 1);
    } else {
      // reinsert wrong question at random later
      setQueue(q => {
        const copy = [...q];
        const missed = copy.splice(idx, 1)[0];
        const pos = idx + 1 + Math.floor(Math.random() * (copy.length - idx));
        copy.splice(pos, 0, missed);
        return copy;
      });
    }
  };

  const next = () => {
    if (idx < queue.length - 1) {
      setIdx(i => i + 1);
      setSelected(null);
      setFlipped(false);
    } else {
      setStage('result');
    }
  };
  const prev = () => {
    if (idx > 0) {
      setIdx(i => i - 1);
      setSelected(null);
      setFlipped(false);
    }
  };

  // UI
  return (
    <div style={styles.container}>
      {stage === 'menu' && (
        <div style={styles.card}>
          <h1 style={styles.title}>AP2 Quiz</h1>
          {quizInfos.map(({ key, label }) => (
  <button
  key={key}
  style={styles.menuButton}
  onClick={() => startQuiz(key)}
>
    {label} {highscores[key] != null && `(Highscore: ${highscores[key]})`}
  </button>
))}



        </div>
      )}

      {stage === 'quiz' && (
        <div style={styles.quizWrapper}>
          {/* Progress */}
          <div style={styles.progressBarContainer}>
            <div
              style={styles.progressBar(((idx + 1) / queue.length) * 100)}
            />
          </div>

          {/* Question Card */}
          <div style={styles.card}>
            <div style={styles.question}>{queue[idx].question}</div>
            <div style={styles.optionsGrid}>
              {queue[idx].options.map((opt, i) => (
                <OptionButton
                  key={i}
                  onClick={() => {
                    if (selected === null) {
                      setSelected(i);
                      handleAnswer(i === queue[idx].correctIndex);
                      setFlipped(true);
                    }
                  }}
                  disabled={selected !== null}
                  state={
                    selected === null
                      ? 'default'
                      : i === queue[idx].correctIndex
                      ? 'correct'
                      : i === selected
                      ? 'wrong'
                      : 'default'
                  }
                >
                  {opt}
                </OptionButton>
              ))}
            </div>
            {/* Explanation on Back */}
            {flipped && (
              <div style={{ marginTop: '1rem', padding: '1rem', background: '#e3f2fd', borderRadius: '6px' }}>
                <strong>Erklärung:</strong>
                <p>{queue[idx].explanation}</p>
                {/* Beispiel-Grafik */}
                <div style={{ textAlign: 'center' }}>
                  <img
                    src={`https://via.placeholder.com/200x100?text=Beispiel+für+Frage+${idx + 1}`}
                    alt="Beispiel-Grafik"
                    style={{ maxWidth: '100%', borderRadius: '4px' }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div style={styles.nav}>
            <button
              style={styles.navButton}
              onClick={prev}
              disabled={idx === 0}
            >
              Zurück
            </button>
            <button style={styles.navButton} onClick={next}>
              {idx === queue.length - 1 ? 'Fertig' : 'Weiter'}
            </button>
          </div>
        </div>
      )}

      {stage === 'result' && (
        <div style={styles.card}>
          <h2 style={styles.title}>Ergebnis</h2>
          <p style={{ fontSize: '1.25rem' }}>
            Du hast <strong>{score}</strong> von <strong>{queue.length}</strong> Punkten erreicht!
          </p>
          <button
            style={{ ...styles.menuButton, marginTop: '1.5rem' }}
            onClick={() => setStage('menu')}
          >
            Neu starten
          </button>
        </div>
      )}
    </div>
  );
}
