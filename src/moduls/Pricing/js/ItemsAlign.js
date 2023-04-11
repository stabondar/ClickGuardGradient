import gsap from 'gsap'

export default class ItemsAlign
{
    constructor()
    {
        let mm = gsap.matchMedia()
        let isDesktop = '(min-width: 991px)'

        mm.add(isDesktop, () => 
        {
            let items = $('.pricing__item--top') 
            let itemsHeight = items.map((i, el) => $(el).height()).get()

            items.each((i, el) =>
            {
                $(el).css('height', Math.max(...itemsHeight))
            })

            
            let compareItems = $('.price-compare__top--item')
            let compareItemsHeight = compareItems.map((i, el) => $(el).outerHeight()).get()

            compareItems.each((i, el) =>
            {
                $(el).css('height', Math.max(...compareItemsHeight))
            })

            window.addEventListener('resize', () =>
            {
                itemsHeight = items.map((i, el) => $(el).height()).get()
                items.each((i, el) =>
                {
                    $(el).css('height', Math.max(...itemsHeight))
                })

                compareItemsHeight = compareItems.map((i, el) => $(el).outerHeight()).get()
                compareItems.each((i, el) =>
                {
                    $(el).css('height', Math.max(...compareItemsHeight))
                })
            })
        })
    }
}