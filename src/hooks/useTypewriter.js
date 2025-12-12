import { useState, useEffect } from 'react';

const useTypewriter = (text, speed = 100, delay = 1000) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timeout;

        if (currentIndex < text.length && !isDeleting) {
            timeout = setTimeout(() => {
                setDisplayText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, speed);
        } else if (currentIndex > 0 && isDeleting) {
            timeout = setTimeout(() => {
                setDisplayText(prev => prev.slice(0, -1));
                setCurrentIndex(prev => prev - 1);
            }, speed / 2); // Delete faster
        } else if (currentIndex === text.length && !isDeleting) {
            // Finished typing, wait before deleting (if looping) or stop
            // For this simple version, let's just stop or we can make it loop if 'text' was an array of strings. 
            // If it's a single string, we usually just stop. 
            // However, typical portfolio typewriter loops through roles.
            // Let's adapt this to handle an array of strings if we want robust "auto typing".
        }

        return () => clearTimeout(timeout);
    }, [currentIndex, isDeleting, text, speed]);

    return displayText;
};

// Simplified version for single text acting as "typing"
export const useTypewriterSingle = (text, speed = 150) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                setDisplayedText((prev) => prev + text.charAt(i));
                i++;
            } else {
                clearInterval(timer);
            }
        }, speed);

        return () => clearInterval(timer);
    }, [text, speed]);

    return displayedText;
};

// Better robust hook for rotating text
export const useTypewriterLoop = (words, typingSpeed = 150, deletingSpeed = 100, pauseDuration = 2000) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [text, setText] = useState("");

    useEffect(() => {
        if (subIndex === words[index].length + 1 && !reverse) {
            setReverse(true);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? deletingSpeed : typingSpeed, parseInt(Math.random() * 350))); // Randomize slightly for realism

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, words, typingSpeed, deletingSpeed]);

    useEffect(() => {
        setText(words[index].substring(0, subIndex));
    }, [subIndex, index, words]);

    return text;
};
