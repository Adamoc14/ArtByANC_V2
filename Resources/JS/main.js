// Variable Declarations and Function Definitions 

//____________________________________________________________________

/**
 * Homepage Variables
 */
let slideInContainer = document.querySelector('.hamburger_slide_out_menu_container')
bars = [...document.querySelectorAll('.hamburger_menu_container div')]


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
    loading_eye = document.querySelector('.eye')
    loading_animation.to(loading_eye, {
        opacity: 1,
        ease: "power4.out",
        duration: .5
    })
    loading_animation.add(blinking(), "+=.1")
    loading_animation.add(reset(loading_eye, loading_screen), "+=3")
}

const loading_animation_barba = () => {
    let loading_screen = document.querySelector('.loading_eye'),
    loading_eye = document.querySelector('.eye')
    loading_animation = gsap.timeline(),
    loading_animation.set(loading_screen, {
        width: "100vw",
        duration: .1,
        ease: "slow"
    },"-=.1")
    loading_animation.to(loading_eye, {
        opacity: 1,
        ease: "power4.out",
        duration: .5
    })
    loading_animation.add(blinking(), "+=.1")
    loading_animation.add(reset(loading_eye, loading_screen), "+=3")
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
    
    tl.to(['.Eyeball', '.Pupil'], {
        autoAlpha: 0,
        duration: .2,
        ease: "power4.out"
    })
    tl.to('.ANC_Logo_Title', {
        scale: 0,
        duration: .2,
        ease: "slow"
    })
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

const reset = (loading_eye, loading_screen) => {
    let tl = gsap.timeline();
    tl.to(loading_eye, {
        opacity: 0,
        ease: "slow",
        duration: 1
    })
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
    slideInContainer = document.querySelector('.hamburger_slide_out_menu_container')
    bars = [...document.querySelectorAll('.hamburger_menu_container div')]
}

const slideInContainerFunc = () => {
    bars.map(bar => bar.onclick = () => {
        slideInContainer.classList.toggle('active');
    });
}

/**
 * About Page Functions
 */


/**
 * Contact Page Functions
 */

//____________________________________________________________________

// Helper Methods
const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//____________________________________________________________________

// Initialization Methods
window.onload = () => loading_animation_start()

$(document).ready(() => {
    homeInit()
    slideInContainerFunc()

})

barba.init({
    sync: true,
    transitions: [{
        name: 'transition-base',
        async leave() {
            const done = this.async();
            loading_animation_barba()
            // await delay(1000);
            done();
        },
        async enter() {
            window.scrollTo(0, 0);
        },
    }],
    views: [
        {
            namespace: 'home',
            afterEnter() {
                homeInit()
            },
            beforeLeave(data) {
                
            }
        },
        {
            namespace: 'about',
            beforeEnter(data) {
                // console.log(facts)
                // aboutInit()
            },
            afterEnter() {

            },
        }
    ],
});

//____________________________________________________________________