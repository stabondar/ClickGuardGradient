import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import AddRemoveResize from '../../AddRemoveResize'

gsap.registerPlugin(ScrollTrigger)

export default class HomeFeatures
{
    constructor()
    {
        const init = () =>
        {
            let body = $('.features__body')
            let right = body.find('.features__right-column')
            let item = body.find('.feature__item')
            let img = right.find('.feature__img')
            let bgColor

            $(item).each(function(index)
            {
                if(index === 0) {bgColor = '#0037FF'}
                if(index === 1) {bgColor = '#851CFF'}
                if(index === 2) {bgColor = '#FFCC00'}
                if(index === 3) {bgColor = '#3BE082'}

                let self = $(this)
                let currentImg = img.eq(index)
                ScrollTrigger.create(
                {
                    trigger: self, start: 'top 40%', end: 'bottom 40%',
                    onEnter: () => 
                    {
                        img.removeClass('active')
                        currentImg.addClass('active')
                    },
                    onEnterBack: () => 
                    {
                        img.removeClass('active')
                        currentImg.addClass('active')
                    }
                }) 
            })

            $(item).each(function(index) 
            {
                let self = $(this),
                    div = self.find('.feature__text'),
                    currentImg = img.eq(index)
                
                // currentImg.clone().appendTo(div)

                const addRemoveOnResize = new AddRemoveResize(div, currentImg)

                // if(index === 3) 
                // {
                //     let btn = self.find('.feature__btn')
                //     btn.appendTo(div)
                // }
            })
        }
        init()
    }
}