import React,{createContext,useEffect} from 'react'
export const MyContext = createContext();


function Speek({ children }) {
    
     const speakContent = () => {
  window.speechSynthesis.cancel(); // <-- This resets any previous paused speech
  const content = document.getElementsByClassName("chera-content")[0].innerText; // Reads all visible text
  console.log(content);

  const utterance = new SpeechSynthesisUtterance(content);
  utterance.lang = "ta-IN"; // Tamil language
   const voices = window.speechSynthesis.getVoices();
  const tamilVoice = voices.find((voice) => voice.lang === "ta-IN");

  if (tamilVoice) {
    utterance.voice = tamilVoice;
  } else {
    alert("Tamil voice not available on your device");
  }
  utterance.rate = 0.9;      // Optional speed

  window.speechSynthesis.speak(utterance);
};
  const stopSpeech = () => {
  window.speechSynthesis.pause();
  console.log("hello");
  
};
const resumeSpeach = () => {
  window.speechSynthesis.resume();
  console.log("hello");
  
};
useEffect(() => {
  return () => {
    // This will stop speech when the component unmounts (page change)
    window.speechSynthesis.cancel();
  };
}, []);

    const MycontextContent={speakContent,stopSpeech,resumeSpeach}
  return (
    <MyContext.Provider value={MycontextContent}>
      {children}
    </MyContext.Provider>
  )
}

export default Speek