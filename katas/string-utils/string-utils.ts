export const isPalindrome = (str: string): boolean => {
  const cleanedStr = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
  return cleanedStr === cleanedStr.split("").reverse().join("");
};

export const reverseWords = (str: string): string => {
  return str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
};

export const capitalizeWords = (str: string): string => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

export const countVowels = (str: string): number => {
  const vowels = "aeiouAEIOU";
  return Array.from(str).filter((char) => vowels.includes(char)).length;
};
