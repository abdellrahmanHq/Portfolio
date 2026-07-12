import { useState, useEffect } from 'react';

export function useTypewriter(words, typeSpeed = 65, deleteSpeed = 35, pause = 1400) {
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const currentWord = words[index % words.length];

  useEffect(() => {
    let timeout;
    if (!deleting && sub === currentWord.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && sub === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setSub((s) => s + (deleting ? -1 : 1));
      }, deleting ? deleteSpeed : typeSpeed);
    }
    return () => clearTimeout(timeout);
  }, [sub, deleting, index, currentWord, typeSpeed, deleteSpeed, pause]);

  return currentWord.substring(0, sub);
}