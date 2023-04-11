import gsap from 'gsap';
import Lottie from 'lottie-web';

export default class ChatLottie
{
    constructor()
    {
        let trigger = $('.chat')
        let icon = $('.chat__lottie')
        let text = $('.chat__text')

        trigger.attr("onclick", "$crisp.push(['do', 'chat:toggle'])")

        let sequence = { frame: 0 },
        headerLootie = Lottie.loadAnimation(
        {
            container: document.querySelector('.chat__lottie'),
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: 'https://uploads-ssl.webflow.com/63e61b740cd4fdff916059b8/64217e2a69e52016d9e854a8_Clickguard-chat-icon.json'
        })

        let tl = gsap.timeline({paused: true, onUpdate: () => progress = tl.progress()})
        let progress = tl.progress()

        headerLootie.addEventListener('DOMLoaded', function () 
        {
            tl.to(sequence,
            {
                frame: headerLootie.totalFrames - 1,
                ease: 'none',
                onUpdate: () => headerLootie.goToAndStop(sequence.frame, true),
                duration: 2
            })
        })
        
        const runAnimation = () =>
        {
            gsap.set(trigger, {opacity: 1})
            tl.play().repeat(-1).delay(2.2)
    
            let tlHide = gsap.timeline()
            .to([text, icon], {opacity: 0, duration: 0.4, pointerEvents: 'none', onComplete: () => tl.pause()}, 7)
        }

        let checkCrisp = setInterval(function() {
            if (typeof $crisp !== 'undefined' && typeof $crisp !== 'undefined') {
              clearInterval(checkCrisp); // Stop checking once the widget has loaded
              setTimeout(() => {
                  runAnimation()
              }, 500);
            }
          }, 500); // Check every second
    }
}