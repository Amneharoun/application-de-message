import { useState, useEffect, useRef } from 'react';
import './Namecreation.css';
import { Link } from 'react-router-dom';

export default function Namecreation() {
    // Etat du composant
    const [name, setName] = useState("");
    const [isKeyboardVisible] = useState(true);

    // References pour les animations
    const inputRef = useRef(null);
    const nextButtonRef = useRef(null);

    // Configuration du clavier
    const keyboardLayout = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
    ];

    // Gestion des touches du clavier virtuel
    const handleKeyPress = (key) => {
        switch (key) {
            case 'BACKSPACE':
                setName(prev => prev.slice(0, -1));
                break;
            case 'SPACE':
                setName(prev => prev + ' ');
                break;
            default:
                setName(prev => prev + key);
                break;
        }
    };

    // Animation des touches
    const animateKey = (keyElement) => {
        keyElement.style.transform = 'scale(0.95)';
        setTimeout(() => {
            keyElement.style.transform = 'scale(1)';
        }, 100);
    };

    // Gestion du bouton Next 
    const handleNext = () => {
        if (name.trim()) {
            console.log(`Nom cree: ${name.trim()}`);
            alert(`Nom cree: ${name.trim()}`);
        }
    };

    // Gestion du clavier physique 
    useEffect(() => {
        const handlePhysicalKeyboard = (event) => {
            if (event.key === 'Backspace') {
                event.preventDefault();
                handleKeyPress('BACKSPACE');
            } else if (event.key === ' ') {
                event.preventDefault();
                handleKeyPress('SPACE');
            } else if (event.key === 'Enter' && name.trim()) {
                handleNext();
            } else if (/^[a-zA-Z]$/.test(event.key)) {
                handleKeyPress(event.key.toUpperCase());
            }
        };
        document.addEventListener('keydown', handlePhysicalKeyboard);
        return () => document.removeEventListener('keydown', handlePhysicalKeyboard);
    }, [name]);

    // Focus automatique sur l'input
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <div className="name-creation-container">
            {/* Barre de statut */}
            <header className="status-bar">
                <span className="time">9:41</span>
                <div className="status-icons">
                    <div className="signal-dots">
                        <div className="signal-dot active"></div>
                        <div className="signal-dot active"></div>
                        <div className="signal-dot active"></div>
                        <div className="signal-dot"></div>
                    </div>
                    <svg className="wifi-icon" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                        <path d="M6 12a6 6 0 0 1 12 0" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </svg>
                    <div className="battery-icon"></div>
                </div>
            </header>

            {/* Indicateur de progression */}
            <div className="progress-indicator">1 of 2</div>

            {/* Contenu principal */}
            <main className="main-content">
                {/* Section d'en-tete */}
                <section className="header-section">
                    <h1 className="title">Create your name</h1>
                    <p className="subtitle">Get more people to know your name</p>
                </section>

                {/* Section de saisie */}
                <section className="input-section">
                    <div className="input-container">
                        <svg className="input-icon" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" />
                        </svg>
                        <input 
                            ref={inputRef}
                            type="text"
                            className="name-input"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder=""
                            aria-label="Enter your name"
                        />
                    </div>
                </section>

                {/* Button Next */}
                <button 
                    ref={nextButtonRef}
                    className={`next-button ${!name.trim() ? 'disabled' : ""}`}
                    onClick={handleNext}
                    disabled={!name.trim()}
                    aria-label="Continue to next step"
                >
                    <Link to="/message" className="nav-item">
            <span> Next</span>
          </Link>
                   
                </button>
            </main>

            {/* Clavier virtuel */}
            {isKeyboardVisible && (
                <section className="virtual-keyboard" aria-label="Virtual keyboard">
                    {/* Rangees de lettres */}
                    {keyboardLayout.map((row, rowIndex) =>(
                        <div key={rowIndex} className="keyboard-row">
                            {row.map((letter) => (
                                <button 
                                    key={letter}
                                    className="keyboard-key"
                                    onClick={(e) => {
                                        handleKeyPress(letter);
                                        animateKey(e.target);
                                    }}
                                >
                                    {letter}
                                </button>
                            ))}
                            {/* Touche backspace sur la derniere rangee */}
                            {rowIndex === 2 &&(
                                <button
                                    className="keyboard-key backspace-key"
                                    onClick={(e) => {
                                        handleKeyPress('BACKSPACE');
                                        animateKey(e.target); 
                                    }}
                                    aria-label="Backspace"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M22 3H7c-.69 0-1.32.34-1.71.9L3.29 8.1c-.39.56-1.02.9-1.71.9h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" stroke="currentColor" strokeWidth="2"/>
                                        <path d="M14 9l-6 6M8 9l6 6" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                </button>
                            )}
                        </div>
                    ))}

                    {/* Rangee du bas */}
                    <div className="keyboard-bottom-row">
                        <button className="keyboard-key special-key" aria-label="Switch to number">123</button>
                        <button 
                            className="keyboard-key space-key"
                            onClick={(e) =>{
                                handleKeyPress('SPACE');
                                animateKey(e.target);
                            }}
                            aria-label="Space"
                        >space</button>
                        <button className="keyboard-key special-key" aria-label="Go">Go</button>
                    </div>

                    {/* Footer du clavier */}
                    <div className="keyboard-footer">
                        <button className="emoji-button" aria-label="Emoji">😊</button>
                        <div className="home-indicator"></div>
                        <button className="mic-button" aria-label="Voice input">
                            <svg className="mic-icon" viewBox="0 0 24 24" fill="none">
                                <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" fill="currentColor" />
                                <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" fill="currentColor" />
                            </svg>
                        </button>
                    </div>
                </section>
            )}
        </div>
    );
}
