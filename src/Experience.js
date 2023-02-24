import './styles/style.css'
import './styles/blog-hover.css'

import Home from './moduls/Home/Home'
import Buttons from './moduls/Buttons'
import Text from './moduls/Text'
import Nav from './moduls/Nav/Nav.js'
import Slider from './moduls/Slider'
import allLoader from './moduls/allLoader'
import Pricing from './moduls/Pricing/Pricing'
import CustomerStories from './moduls/Home/js/CustomerStories.js'
import WhatIs from './moduls/WhatIS/WhatIs.js'
import Integration from './moduls/Integration/Integration.js'
import RealStories from './moduls/RealStories/RealStories.js'
import About from './moduls/About/About.js'
import BlogTemplate from './moduls/BlogTemplate/BlogTemplate.js'
import Blog from './moduls/Blog/Blog.js'
import Compare from './moduls/Compare/Compare.js'
import FAQ from './moduls/FAQ'
import InnerCompare from './moduls/InnerCompare/InnerCompare.js'
import Features from './moduls/Features/Features.js'
import Login from './moduls/Login/Login.js'
import Anchors from './moduls/Anchors'
import Protection from './moduls/Protection/Protection.js'
import Podcast from './moduls/Podcast/Podcast.js'
import pressKit from './moduls/Press Kit/pressKit'
import Auth from './moduls/Auth0/Auth0'
import ContactUs from './moduls/ContactUs'
import Utils from './moduls/Utils'
import Banner from './moduls/Banner'
import Career from './moduls/Career/Career'
import BlurIntensity from './moduls/BlurIntensity'

export default class Experience 
{
    constructor()
    {
        const buttons = new Buttons()
        const text = new Text()
        const nav = new Nav()
        const slider = new Slider()
        const faq = new FAQ()
        const login = new Login()
        const anchor = new Anchors()
        const press = new pressKit ()
        const auth = new Auth()
        const utils = new Utils()
        const banner = new Banner()
        const blur = new BlurIntensity()
        if($('body').attr('data-page') === 'home') { const home = new Home() }
        if($('body').attr('allLoader') === '1') { const allloader = new allLoader() }
        if($('body').attr('data-page') === 'pricing') { const price = new Pricing() }
        if($('body').attr('data-page') === 'customer-stories') { const tabs = new CustomerStories(); const realStories = new RealStories() }
        if($('body').attr('data-page') === 'what-is') { const whatIs = new WhatIs() }
        if($('body').attr('data-page') === 'integration') { const integration = new Integration() }
        if($('body').attr('data-page') === 'about') { const about = new About() }
        if($('body').attr('data-page') === 'blog-template') { const blogTemplate = new BlogTemplate() }
        if($('body').attr('data-page') === 'blog') { const blog = new Blog() }
        if($('body').attr('data-page') === 'compare') { const compare = new Compare() }
        if($('body').attr('data-page') === 'compare-inner') { const compareInner = new InnerCompare() }
        if($('body').attr('data-page') === 'features') { const features = new Features() }
        if($('body').attr('data-page') === 'protection') { const protection = new Protection() }
        if($('body').attr('data-page') === 'podcast') { const podcast = new Podcast() }
        if($('body').attr('data-page') === 'press') { const press = new pressKit () }
        if($('body').attr('data-page') === 'contact-us') { const contact = new ContactUs() }
        if($('body').attr('data-page') === 'career') { const career = new Career() }
    }
}