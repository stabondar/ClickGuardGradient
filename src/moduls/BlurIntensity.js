import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default class BlurIntensity 
{
    constructor()
    {
        $('html').addClass('blur-half')

        $('[change-intense]').each(function()
        {
            let self = $(this)
            let thisColor = self.attr('this-intense')

            ScrollTrigger.create(
            {
                trigger: self,
                start: 'top 65%', end: 'bottom 65%',
                onToggle: ({self, isActive}) => 
                {
                    if(isActive)
                    {
                        $('html').addClass(thisColor)
                    } else
                    {
                        $('html').removeClass(thisColor)
                    }
                }
            })
        })

    }
}