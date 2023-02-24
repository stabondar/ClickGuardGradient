import './integration.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default class Integration 
{
    constructor()
    {   
        const init = () =>
        {
            const accordion = () =>
            {
                // Pricing Compare
                $('.accordion__item--top').on('click', function () {
                    // If other item have open class => click itself
                    if (!$(this).hasClass('open')) {
                        $('.accordion__item--top.open').click()    
                    }
                    // Get bot item
                    let sibling = $(this).siblings('.accordion__item--bot')
                    let animationDuration = 300
                
                    // If this have open other items height 0
                    if ($(this).hasClass('open')) {
                        sibling.animate({ height: '0px' }, animationDuration)
                        $('.faq__item--icon').removeClass('open')
                    } else {
                        sibling.css('height', 'auto')
                        let autoHeight = sibling.height()
                        sibling.css('height', '0px')
                        $(this).parent().addClass('open')
                        $(this).find('.faq__item--icon').addClass('open')
                        sibling.animate({ height: autoHeight }, animationDuration, function () {
                            sibling.css('height', 'auto')
                        })
                    }
                    $(this).toggleClass('open')
                })
            }
            accordion()



            const activeLink = () =>
            {
                let item = $('.integration-accordion__point');
                let trigger = $('.accordion__block')
                $(item).each(function(index)
                {

                    let self = $(this)
                    let currentTab = trigger.eq(index)
                    ScrollTrigger.create(                        
                    {
                        trigger: currentTab, start: 'top 50%', end: 'bottom 50%', toggleActions: 'restart none restart none',
                        onEnter: () => 
                        {
                            item.removeClass('active')
                            self.addClass('active')
                        },
                        onEnterBack: () => 
                        {
                            item.removeClass('active')
                            self.addClass('active')
                        }
                    })
                })
            }
            activeLink ()

        }
        
        init()
    }
}
