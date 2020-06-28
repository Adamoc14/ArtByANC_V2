// Variable Declarations and Function Definitions 

//____________________________________________________________________

/**
 * Homepage Variables
 */


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
const loading_animation = () => {
    let loading_screen = document.querySelector('.loading_eye'),
    loading_animation = gsap.timeline({
        duration: 2,
        ease: "power4.out"
    }),
    loading_eye = document.querySelector('.eye')
    // loading_animation.to(loading_screen, {
    //     width: "100vw",
    //     duration: .01,
    //     ease: "slow"
    // })
    loading_animation.to(loading_eye, {
        opacity : 1,
        ease: "power4.out",
        duration: .5
    })
    loading_animation.add(blinking() , "+=.1")
    loading_animation.add(reset(loading_eye , loading_screen) , "+=3")
}

const blinking = () => {
    let tl = gsap.timeline({
        yoyo: true,
        repeat: -1,
        repeatDelay : .2
    })
    bottom_lid = gsap.to('.Eye_Part_Bottom_Lid', {
        duration: .2,
        scaleY: 0,
        transformOrigin: "center top",
    })
    top_lid = gsap.to('.Eye_Part_Top_Lid',{
        duration: .2,
        scaleY: .2,
        transformOrigin: "center bottom",
    })
    tl.to(['.Eyeball', '.Pupil'], {
        autoAlpha: 0
    })
    tl.to('.ANC_Logo_Title', {
        scale: 0,
    })
    tl.add([bottom_lid, top_lid]);
    return tl
}

const reset = (loading_eye , loading_screen) => {
    let tl = gsap.timeline();
    tl.to(loading_eye, {
        opacity : 0,
        ease: "slow",
        duration: 1
    })
    tl.to(loading_screen, {
        width: "0vw",
        duration: 1,
        ease: "slow"
    }, "+=.5")

    return tl;
}


/**
 * Homepage Functions
 */



/**
 * About Page Functions
 */


/**
 * Contact Page Functions
 */

//____________________________________________________________________

// Helper Methods

//____________________________________________________________________

// Initialization Methods
window.onload = () => loading_animation()

// $(document).ready(() => {
//     loading_animation()
    
// })

barba.init({
    sync: true,
    transitions: [{
        name: 'transition-base',
        async leave() {
            const done = this.async();
            pageTransition();
            await delay(1000);
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
                window.matchMedia("(max-width: 600px)").matches ? logo.attr('viewBox', '-350 -700 1274 1680') : logo.attr('viewBox', '-680 -380 2074 1080')
                let viewbox = window.matchMedia("(max-width: 600px)")
                changeViewBox(viewbox)
                logo_tl_func();
                hamburger_display_button.onclick = () => {
                    opened_nav_buttons.classList.toggle('open')
                }
            },
            beforeLeave(data) {
                factsContainer = data.next.container.children[4]
                factsContainer_sm = data.next.container.children[4].children[1]
                facts = [...data.next.container.children[4].children[1].children]
            }
        },
        {
            namespace: 'about',
            beforeEnter(data) {
                face = $(data.next.container.children[1]);
                console.log(data.current.container)
                window.matchMedia("(max-width: 600px)").matches ? face.attr('viewBox', '-100 0 1408 1935') : face.attr('viewBox', '-1500 50 4208 2135')
                factsContainer = data.next.container.children[4]
                factsContainer_sm = data.next.container.children[4].children[1]
                facts = [...data.next.container.children[4].children[1].children]
                scroll_facts_tl_func()
                // console.log(facts)
                // aboutInit()
            },
            afterEnter() {
                // aboutInit()
                face_tl_func()
                scroll_p_tl_func()
                scroll_skills_tl_func()
                scroll_facts_tl_func()
            },
        }
    ],
});

//____________________________________________________________________