const randomWords = [
  "Innovation",
  "technology",
  "exploration",
  "growth",
  "design",
  "engineering",
  "vision",
  "future",
  "creativity",
  "teamwork",
  "challenge",
  "solutions",
  "journey",
  "discovery",
  "strategy",
  "development",
  "progress",
  "inspiration",
];

export const generateRandomDescription = (wordCount = 300) => {
  const randomText = [];
  for (let i = 0; i < wordCount; i++) {
    const randomWord =
      randomWords[Math.floor(Math.random() * randomWords.length)];
    randomText.push(randomWord);
  }
  return randomText.join(" ") + ".";
};

export const spliceParaInWord = (para, wordCount = 30) => {
  const arrOfPara = [];
  const words = para.split(" ");
  for (let i = 0; i < words.length; i += 30) {
    let para = "";
    for (let j = i; j < i + wordCount; j++) {
      para += words[j] + " ";
    }
    arrOfPara.push(para);
  }
  return arrOfPara;
};


export const dateConvert=(dateValue)=>{
  const date = new Date(dateValue);

  
}