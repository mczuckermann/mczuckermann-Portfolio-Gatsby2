$(`.navSubObjects`).on(`click`, function navScrollEvent() {
  const divTarget = $(this).attr(`divTarget`);
  const elem = document.querySelector(`div.${divTarget}`);
  const coord = elem.getBoundingClientRect();
  window.scrollTo({
    top: coord.top,
    left: 0,
    behavior: `smooth`,
  });
});
