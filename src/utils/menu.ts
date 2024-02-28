interface IItem {
  id: number,
  text: string,
  anchor: string,
}

export const ourCofee:IItem = {
  id:1,
  text: "Наша кава",
  anchor: "ourCoffee",
};
export const partnersCoffee:IItem = {
  id:2,
  text: "Від партнерів",
  anchor: "partnersCoffee",
};
export const whereToFindUs:IItem = {
  id:3,
  text: "Де нас знайти ",
  anchor: "whereToFindUs",
};
export const aboutUs:IItem = {
  id:4,
  text: "Про Піколіно",
  anchor: "aboutUs",
};
export const instagramPage:IItem = {
  id:5,
  text: "Ми в інстаграм",
  anchor: "instagramPage",
};
export const vacancies:IItem = {
  id:6,
  text: "Вакансії",
  anchor: "vacancies",
};
export const googleReviews:IItem = {
  id:7,
  text: "Відгуки",
  anchor: "googleReviews",
}
export const greetingPage:string = "greetingPage";

export const menuItems: Array<IItem> = [
  ourCofee,
  partnersCoffee,
  whereToFindUs,
  aboutUs,
  instagramPage,
  vacancies,
  googleReviews,
];

