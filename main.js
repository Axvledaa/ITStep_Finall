// Language objects containing translations
const translations = {
    en: {
      greeting: 'Hello',
      farewell: 'Goodbye',
    },
    fr: {
      greeting: 'Bonjour',
      farewell: 'Au revoir',
    },
    es: {
      greeting: 'Hola',
      farewell: 'Adiós',
    },
  };
  
  // Function to change the language
  function changeLanguage(language) {
    const greetingElement = document.getElementById('greeting');
    greetingElement.innerText = translations[language].greeting;
  }
  