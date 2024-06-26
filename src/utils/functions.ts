const calculatePercentages = (array: number[]) => {
  const total = array.reduce((a, b) => a + b, 0);
  return array.map((number) => Math.floor((number / total) * 100));
};

//----------------------------------------------

const pascalCase = (fullString: string, msg?: string): string => {
  if (typeof fullString !== "string") {
    throw new Error(`please enter a vaild ${msg} !`);
  }

  let splitedString = fullString.toLowerCase().split(" ");
  let pascalCaseLetter;
  let pascalCaseCombined = "";

  for (let i = 0; i < splitedString.length; i++) {
    pascalCaseLetter =
      " " +
      splitedString[i].charAt(0).toUpperCase() +
      splitedString[i].slice(1);
    pascalCaseCombined += pascalCaseLetter;
  }

  return pascalCaseCombined.slice(1);
};

//------------------------------------------
const getCreatedCountByDay = (arr: any[], day: number): number => {
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - day);
  const endDate = new Date();
  endDate.setDate(endDate.getDate() - day + 1);

  return arr.filter((item) => {
    const createdAt = new Date(item.createdAt);
    return createdAt >= startDate && createdAt < endDate;
  }).length;
};

//------------------------------------

const getCreatedCountForWeek = (arr: any[]): number[] => {
  const createdCountForWeek: number[] = [];

  for (let i = 6; i >= 0; i--) {
    const createdCount = getCreatedCountByDay(arr, i);
    createdCountForWeek.push(createdCount);
  }

  return createdCountForWeek;
};

//--------------------------------------------

const getDaysOfWeek = (): string[] => {
  const daysOfWeek: string[] = [];

  for (let i = 6; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() + 1 - i); // bec it gets with less one reminder
    const day = date.toLocaleString("default", { weekday: "long" });
    daysOfWeek.push(day);
  }

  return daysOfWeek;
};

//----------------------------------------------

const calculateRelativeChange = (data: any[]) => {
  const totalInThisMonth = data.reduce(
    (acc, curr) =>
      new Date(curr.createdAt).getFullYear() === new Date().getFullYear() &&
      new Date(curr.createdAt).getMonth() === new Date().getMonth()
        ? (acc += 1)
        : acc,
    0
  );

  const totalInLastMonth = data.reduce(
    (acc, curr) =>
      new Date(curr.createdAt).getFullYear() === new Date().getFullYear() - 1 &&
      new Date(curr.createdAt).getMonth() === new Date().getMonth() - 1
        ? (acc += 1)
        : acc,
    0
  );

  const ratio = ((totalInThisMonth - totalInLastMonth) / data.length).toFixed(
    1
  );

  return ratio;
};

//----------------------------------------------

const safeImgDisplay = (
  options: {
    photoUrl?: string | string[];
    dark?: boolean;
    darkImg?: string;
    lightImg?: string;
  } = {}
): string => {
  const { photoUrl, dark, darkImg, lightImg } = options;

  if (Array.isArray(photoUrl))
    return photoUrl.length
      ? photoUrl[0]
      : "https://i.ibb.co/2P7YK6F/no-image.jpg";

  if (photoUrl?.includes("https://") || photoUrl?.includes("http://"))
    return photoUrl;

  if (typeof dark === "boolean")
    return dark
      ? darkImg || "https://i.ibb.co/2P7YK6F/no-image.jpg"
      : lightImg || "https://i.ibb.co/2P7YK6F/no-image.jpg";
  return "https://i.ibb.co/2P7YK6F/no-image.jpg";
};

export {
  calculatePercentages,
  pascalCase,
  getCreatedCountForWeek,
  calculateRelativeChange,
  getDaysOfWeek,
  safeImgDisplay,
};
