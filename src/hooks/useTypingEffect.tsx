"use client";

import { useState, useEffect, useCallback } from "react";

const useTypingEffect = (
  words: string[],
  typeSpeed = 100,
  deleteSpeed = 50,
  delay = 1500
) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentWord = words[wordIndex];
    const updatedText = isDeleting
      ? currentWord.substring(0, text.length - 1)
      : currentWord.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === currentWord) {
      setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }
  }, [isDeleting, text, wordIndex, words, delay]);

  useEffect(() => {
    const timer = setTimeout(tick, isDeleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, deleteSpeed, typeSpeed]);

  return text;
};

export default useTypingEffect;
