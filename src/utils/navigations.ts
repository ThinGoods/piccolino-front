import { calculateHeaderHeight } from "./constants";

export const openNewTab = (link: string) => {
  window.open(link, '_blank')?.focus();
  console.log(link);
}

export const goToAnchor = (anchor:string) => {
  window.location.href = '#' + anchor;
  const element = document.getElementById(anchor);
  
  if (element) {
    const y = element.getBoundingClientRect().top;
    const y2 = y + window.scrollY - calculateHeaderHeight();
    window.scroll({
      top: y2,
      behavior: 'smooth',
    })
  }
}

export const handleMenuItemClick = (anchor: string) => () => {
  goToAnchor(anchor)
}