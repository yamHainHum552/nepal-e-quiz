export const shuffle = array => {
  if (!array || !Array.isArray(array)) {
    return [];
  }

  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

export const generateTitle = title => {
  const newTitle = title.split(' ')[0].toLowerCase();

  return newTitle;
};
