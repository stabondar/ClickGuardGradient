import './blog-template.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default class BlogTemplate 
{
    constructor()
    {   
        let mm = gsap.matchMedia(),
            isDesktop = '(min-width: 991px)'

        const init = () =>
        {
            const rightSide = () =>
            {
                let title = $('.rich-text').find('h1')
                if (title.length < 1) 
                {
                    title = $('.rich-text').find('h2')
                    if (title.length < 1) 
                    {
                        title = $('.rich-text').find('h3')
                    }
                }
                let textParent = $('.blog-template__contents--list')
                $(title).each(function()
                {
                    let self = $(this)
                    let selfText = self.text()
                    textParent.append(`<p class='p--16 weight--700'>${selfText}</p>`)
                })
            }
            rightSide()

            mm.add(isDesktop, () => 
            {
                const pinScroll = () =>
                {
                    let text = $('.blog-template__contents--list').find('p')
                    let title = $('.rich-text').find('h2')
    
                    $(text).each(function(i)
                    {
                        let self = $(this)
                        let currentTitle = title.eq(i)
    
                        ScrollTrigger.create(
                        {
                            trigger: currentTitle, start: 'top 30%', end: 'bottom 30%',
                            onEnter: () => 
                            {
                                text.removeClass('is--active')
                                self.addClass('is--active')
                            },
                            onEnterBack: () => 
                            {
                                text.removeClass('is--active')
                                self.addClass('is--active')
                            }
                        })
                    })
                }
                pinScroll()
            })

            const richLink = $('.rich-text').find('a')
            richLink.attr('target', '_blank')

            console.log(richLink);
        }
        init()
    }
}