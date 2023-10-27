export const openNewTab = (link: string) => {
  window.open(link, '_blank')?.focus();
  console.log(link);
}