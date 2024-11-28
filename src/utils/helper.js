//OPTIONS LABELS
export const labels = ["A", "B", "C", "D"];

//SCORE ICONS
export const scoreIcons = [
  { id: "attempted", src: "attempted.svg", name: "Questions Attempted" },
  { id: "right", src: "right.svg", name: "Right Answers" },
  { id: "wrong", src: "wrong.svg", name: "Wrong Answers" },
];

//FORM OPTIONS
export const optionsLevel = ["--select--", "Easy", "Medium", "Hard"];
export const optionsGender = ["--select--", "Male", "Female"];
export const optionsTopic = [
  "0:--select--",
  "27:Animals",
  "25:Art",
  "16:Board Games",
  "10:Books",
  "32:Cartoons & Animations",
  "29:Comics",
  "18:Computers",
  "11:Film",
  "30:Gadgets",
  "9:General Knowledge",
  "22:Geography",
  "23:History",
  "19:Mathematics",
  "12:Music",
  "20:Mythology",
  "24:Politics",
  "17:Science & Nature",
  "21:Sports",
  "14:Television",
  "28:Vehicle",
  "15:Video Games",
];

//FUNCTION TO SHUFFLE ARRAY
export function shuffleArr(arr) {
  let curIndex = arr.length;
  while (curIndex !== 0) {
    let randomIndex = Math.floor(Math.random() * curIndex);
    curIndex--;
    [arr[curIndex], arr[randomIndex]] = [arr[randomIndex], arr[curIndex]];
  }
  return arr;
}
