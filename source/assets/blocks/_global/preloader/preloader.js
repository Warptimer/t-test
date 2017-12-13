class Preloader  {
  off() {
    let animation = new TimelineLite({delay: 0});
    animation
      .to(document.querySelector('.preloader__spin'), 0.4, {opacity: 0}, 0)
      .to(document.querySelector('.preloader'), 0.4, {opacity: 0}, 0.1)
      .to(document.querySelector('.preloader'), 0, {'display': 'none'}, 0.6)
  }
  on() {
    let animation = new TimelineLite({delay: 0});
    animation
      .to(document.querySelector('.preloader'), 0, {'display': 'block'}, 0)
      .to(document.querySelector('.preloader__spin'), 0.4, {opacity: 1}, 0.1)
      .to(document.querySelector('.preloader'), 0.4, {opacity: 1}, 0)
  }
}