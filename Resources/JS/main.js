// Variable Declarations and Function Definitions 

//____________________________________________________________________

/**
 * Homepage Variables
 */
let eye = $('.eye_logo')


/**
 * About Page Variables
 */


/**
 * Contact Page Variables
 */

//____________________________________________________________________

/**
 * Global Page Functions
 */
const loading_animation_start = () => {
    let loading_screen = document.querySelector('.loading_eye'),
        loading_animation = gsap.timeline({
            duration: 2,
            ease: "power4.out"
        }),
        loading_eye = document.querySelector('.eye_logo'),
        loading_headers = [...document.querySelectorAll('.loading_eye h3')],
        firstAnim = gsap.to(loading_eye, {
            opacity: 1,
            ease: "power4.out",
            duration: .7
        }),
        secondAnim = gsap.to(loading_headers, {
            opacity: 1,
            ease: "slow",
            duration: .7
        })
    loading_animation.add([firstAnim, secondAnim])
    loading_animation.add(blinking(), "+=.1")
    loading_animation.add(reset(loading_eye, loading_screen, loading_headers), "+=3")
}

const loading_animation_barba = () => {
    let loading_screen = document.querySelector('.loading_eye'),
        loading_eye = document.querySelector('.eye_logo'),
        loading_headers = [...document.querySelectorAll('.loading_eye h3')],
        firstAnim = gsap.to(loading_eye, {
            opacity: 1,
            ease: "power4.out",
            duration: .3
        }),
        secondAnim = gsap.to(loading_headers, {
            opacity: 1,
            ease: "power4.out",
            duration: .3
        })
    loading_animation = gsap.timeline()
    loading_animation.set(loading_screen, {
        width: "100vw",
        duration: .1,
        ease: "slow"
    }, "-=.1")
    loading_animation.add([firstAnim, secondAnim])
    loading_animation.add(blinking(), "+=.1")
    loading_animation.add(reset(loading_eye, loading_screen, loading_headers), "+=2")
}

const blinking = () => {
    let tl = gsap.timeline({
        yoyo: true,
        // repeatRefresh : true,
        repeat: -1,
        repeatDelay: .5,
        duration: 2,
        ease: "power4.out"
    })

    // tl.to(['.Eyeball', '.Pupil'], {
    //     autoAlpha: 0,
    //     duration: .2,
    //     ease: "power4.out"
    // })
    // tl.to('.ANC_Logo_Title', {
    //     scale: 0,
    //     duration: .2,
    //     ease: "slow"
    // })
    // tl.to(['.Eyeball' , '.Pupil'] , {
    //     autoAlpha:0
    // })
    tl.to('.ANC_Logo_Title', {
        scale: 0,
        // y:-50
    }, "-=.5")
    let bottom_lid = gsap.to('.Eye_Part_Bottom_Lid', {
        duration: .2,
        scaleY: 0,
        transformOrigin: "center top",
    }),
        top_lid = gsap.to('.Eye_Part_Top_Lid', {
            duration: .2,
            scaleY: .2,
            transformOrigin: "center bottom",
        })
    tl.add([bottom_lid, top_lid]);
    return tl
}

const reset = (loading_eye, loading_screen, loading_headers) => {
    let tl = gsap.timeline(),
        firstAnim = gsap.to(loading_eye, {
            opacity: 0,
            ease: "slow",
            duration: 1
        })
    secondAnim = gsap.to(loading_headers, {
        opacity: 0,
        ease: "slow",
        duration: .2
    })
    tl.add([firstAnim, secondAnim])
    tl.to(loading_screen, {
        width: "0vw",
        duration: 1,
        ease: "slow"
    }, "+=.5")
    // tl.to(loading_screen, {
    //     duration: 1.2,
    //     width: "0%",
    //     right: "0%",
    //     ease: "circ.out",
    // }, "+=3")

    return tl;
}

/**
 * Homepage Functions
 */

const homeInit = () => {
    window.matchMedia("(max-width: 600px)").matches ? eye.attr('viewBox', '-320 -25 874 295') : eye.attr('viewBox', '-500 -25 1233 295')
    pulsingArrow()
    slideInContainerFunc()
}

const pulsingArrow = () => {
    let arrow = $('.arrow_pulsing')
    gsap.to(arrow, {
        y: 12,
        yoyo: true,
        repeat: -1,
        repeatDelay: .5,
        duration: .7,
        ease: "power2.out"
    })
}

const slideInAnim = (slideOutBar) => {
    let slide_tl = gsap.timeline({
        ease: "slow"
    })
    slide_tl.to(slideOutBar, {
        flex: "1 0 20%",
        duration: 1,
    })
    slide_tl.to(slideOutBar, {
        display: "flex",
        x: 0,
        duration: 1,
    }, "-=1")
    slide_tl.to(slideOutBar, {
        display: "flex",
        rotationY: 0,
        duration: .8,
    }, "+=.5")
}

const slideOutAnim = (slideOutBar) => {
    let slide_tl = gsap.timeline({
        ease: "slow"
    })
    slide_tl.to(slideOutBar, {
        rotationY: -90,
        duration: 1,
    })
    slide_tl.to(slideOutBar, {
        flex: "0 0 0%",
        display: "none",
        duration: 1,
        ease: "slow"
    }, "-=.5")
}

const slideInContainerFunc = () => {
    let hamburger = $('.hamburger_btn').get(0),
        allBars = [...$('.bar')],
        slideOutBar = $('.slideContainer').get(0)
    hamburger.onclick = (() => {
        hamburger.classList.toggle('change')
        allBars.map(bar => bar.classList.toggle('change'))
        slideOutBar.classList.toggle('slide')
        if (slideOutBar.classList.contains('slide'))
            slideInAnim(slideOutBar)
        else
            slideOutAnim(slideOutBar)
    })
}

const getCategory = (event) => {
    let dataCategory = event.target.dataset.category
    display(dataCategory)
}

/**
 * About Page Functions
 */

const aboutInit = () => {
    console.log('We have lift off ')
    // let horizontalscrollAnim
    // cleanGSAP()
    // if(typeof horizontalscrollAnim === "undefined") {
    //     scrollAbout();
    // }
    // window.dispatchEvent(new Event('resize'));
    // ScrollTrigger.refresh()
}

// const cleanGSAP = () => {
//     const allClasses = [...document.querySelectorAll('[class]')]
//     let gsapArray = []
//     if(allClasses.length <= 81) return
//     for (var i = 0; i < allClasses.length; i++) {
//         if (/gsap-/.test(allClasses[i].className)) {
//             gsapArray.push(allClasses[i].className);
//         } else 
//             break
//     }
//     gsapArray.map(tag => document.querySelector(`.${tag}`).remove())
// }

const paintAbout = () => {
    let paintTL = gsap.timeline({
        delay: 8.1,
        duration: 3
    })
    paintTL.set('#PaintBrush', {
        xPercent: -50,
        yPercent: -70,
        transformOrigin: "50% 70%"
    })
    let firstAnim =gsap.fromTo('#text', {
        drawSVG: "0%"
    }, {
        drawSVG: "100%",
        duration: 60,
        // delay: .4,
        ease: "slow"
    }),
    secondAnim = gsap.to('#text', {
        fill: "#72CFF1",
        duration: 3,
        delay: 8,
        ease: "slow"
    }),
    thirdAnim = gsap.to('#PaintBrush', {
        duration: 8,
        motionPath: {
            path: "#text",
        }
    })
    paintTL.add([firstAnim , secondAnim , thirdAnim])

}

// const scrollAbout = () => {
//     let pages = [...document.querySelectorAll('.page')]
//     horizontalAnim = gsap.to(pages, {
//         xPercent: -100 * (pages.length - 1),
//         ease: "none",
//         scrollTrigger: {
//             trigger: ".about",
//             pin: true,
//             markers: true,
//             scrub: 1,
//             snap: 1 / (pages.length - 1),
//             // base vertical scrolling on how wide the container is so it feels more natural.
//             end: () => "+=" + document.querySelector(".about").offsetWidth
//         }
//     });
// }


/**
 * Contact Page Functions
 */

/**
 * Artworks Page Functions
 */

const display = (category) => {
    let allPics = [...$('.image_container')],
        nonActivePics = []
    nonActivePics = allPics.filter(pic => pic.dataset.category !== category).map(pic => pic.classList.remove('active'))
    allPics = allPics.filter(pic => pic.dataset.category === category).map(pic => pic.classList.add('active'))
    console.log(category, allPics, nonActivePics)

}

//____________________________________________________________________

// Helper Methods
const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//____________________________________________________________________

// Initialization Methods
// $(document).ready(() => {
//     // window.matchMedia("(max-width: 600px)").matches ? eye.attr('viewBox', '-320 -600 874 1680') : eye.attr('viewBox', '-500 -200 1233 935')
//     // homeInit()
//     slideInContainerFunc()
//     // setTimeout(() => paintAbout(), 12000)
//     // scrollAbout()
// })

barba.init({
    sync: true,
    transitions: [{
        name: 'transition-base',
        async leave() {
            const done = this.async();
            loading_animation_barba()
            await delay(1000);
            done();
        },
        async beforeEnter() {
            window.scrollTo(0, 0);
        },
    }],
    views: [
        {
            namespace: 'home',
            afterEnter() {
                loading_animation_start()
                homeInit()
                $('.artworks_btn').click((e) => {
                    getCategory(e)
                })
            },
        },
        {
            namespace: 'about',
            afterEnter() {
                loading_animation_start()
                aboutInit()
                paintAbout();
            },
        },
        {
            namespace: 'contact',
            afterEnter() {
                loading_animation_start()
            },
        },
        {
            namespace: 'artworks',
            afterEnter() {
                loading_animation_start()
                $('.filter').click((e) => {
                    getCategory(e)
                })
            },
        }
    ],
});

//____________________________________________________________________