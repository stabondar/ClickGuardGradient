import '../styles/slider.css'

import Swiper from 'swiper'
import 'swiper/css'

export default class Slider 
{
    constructor()
    {

      let init = false;
      let swiper;

      function swiperCard() {
        if (window.innerWidth >= 768) {
          if (!init) {
            init = true;
            swiper = new Swiper(".swiper", {
              slidesPerView: "auto",
              keyboard: true,
              direction: "horizontal",
              spaceBetween: 24,
              speed: 800,
              touchEventsTarget: "container",
              grabCursor: true,
            });
          }
        } else if (init) {
            swiper.destroy();
            init = false;
        }
      }
      swiperCard();
      window.addEventListener("resize", swiperCard);

      $('.slider__arrow').eq(1).on('click', () =>
        {
          swiper.slideNext()
        })

        $('.slider__arrow').eq(0).on('click', () =>
        {
            swiper.slidePrev()
        })
    }
}