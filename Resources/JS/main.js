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
        loading_headers = [...document.querySelectorAll('.loading_eye h2')],
        firstAnim = gsap.to(loading_eye, {
            opacity: 1,
            ease: "power4.out",
            duration: .2
        }),
        secondAnim = gsap.to(loading_headers, {
            opacity: 1,
            ease: "slow",
            duration: .2
        })
    loading_animation.set(loading_screen, {
        zIndex: 100
    })
    loading_animation.add([firstAnim, secondAnim])
    loading_animation.add(blinking(), "+=.1")
    loading_animation.add(reset(loading_eye, loading_screen, loading_headers), "+=3")
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
        zIndex: -1,
        duration: .1,
        ease: "slow"
    }, "+=.1")
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
        duration: .2,
    })
    slide_tl.to(slideOutBar, {
        display: "flex",
        x: 0,
        duration: .2,
    }, "-=1")
    slide_tl.to(slideOutBar, {
        display: "flex",
        rotationY: 0,
        duration: .8,
    }, "+=.1")
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

// const paintAbout = () => {
//     let paintTL = gsap.timeline({
//         delay: 7.5,
//         duration: 3
//     })
//     paintTL.set('#PaintBrush', {
//         xPercent: -50,
//         yPercent: -70,
//         transformOrigin: "50% 70%"
//     })
//     let firstAnim =gsap.fromTo('#text', {
//         drawSVG: "0%"
//     }, {
//         drawSVG: "100%",
//         duration: 2,
//         // delay: .4,
//         ease: "slow"
//     }),
//     firstHalfAnim = gsap.to('#text', {
//         stroke: "#72CFF1",
//         delay: 1,
//         duration: 2,
//         ease: "slow"
//     })
//     secondAnim = gsap.to('#text', {
//         fill: "#72CFF1",
//         duration: 3,
//         delay: 3,
//         ease: "slow"
//     }),
//     thirdAnim = gsap.to('#PaintBrush', {
//         duration: 2,
//         motionPath: {
//             path: "#text",
//         }
//     })
//     paintTL.add([firstAnim , firstHalfAnim , secondAnim , thirdAnim])

// }

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

const firebaseInit = () => {
    //Firebase
    var firebaseConfig = {
        apiKey: "AIzaSyBvlJUyDmBHNfEjwkZ_Auf8Jr1mbXDdP7k",
        authDomain: "artbyanc-70f23.firebaseapp.com",
        databaseURL: "https://artbyanc-70f23.firebaseio.com",
        projectId: "artbyanc-70f23",
        storageBucket: "artbyanc-70f23.appspot.com",
        messagingSenderId: "687386013503",
        appId: "1:687386013503:web:b7e75afa311b99fae06d8a",
        measurementId: "G-PD1GXNZL2G"
    }
    firebase.initializeApp(firebaseConfig)
    var databaseStorage = firebase.database().ref().child('emails')
    firebaseSend(databaseStorage)
}

const firebaseSend = databaseStorage => {
    var email = {
        name: $('.name').val(),
        email: $('.email').val(),
        message: $('.message').val(),
    }
    databaseStorage.push(email)
    document.querySelector('.name').value = ""
    document.querySelector('.email').value = ""
    document.querySelector('.message').value = ""
    window.location.href = "https://artbyanc.netlify.app/contact.html"
}



const gatherInputs = form => {
    let inputs = [...$(form).find('.input')],
        validatedVerdict = validateInputs(inputs)
    return validatedVerdict
}

const validateInputs = inputs => {
    console.log(typeof inputs, inputs)
    let requiredFields = {
        empty: "",
        standard_length: 10,
    },
        validatedInputs = inputs.map(formInput =>
            $(formInput).val() !== requiredFields.empty
            && $(formInput).val().length >= requiredFields.standard_length
        )
    if (validatedInputs.includes(false))
        return false
    else
        return true
}

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

const fillModal = (e) => {
    let popUpModal = $('.pic_modal').get(0)
    console.log(popUpModal, $(popUpModal.children[0].children[0]).attr('src'), e.target.src)
    $(popUpModal.children[0].children[0]).attr('src', e.target.src)
    popUpModal.style.display = "block";
}


/**
 * Shop Page Funcitons
 */

const shopInit = () => {
    // Paddle.Setup({ vendor: 32931 });
}

const fillCart = () => {
    $('.purchase_btn').click((e) => {
        e.preventDefault()
        let id = e.target.dataset.id,
            price = e.target.dataset.price
        product = { price: id, quantity: 1 }
        arrayofprices = []
        arrayofprices.push(product)
        console.log(id, price, arrayofprices)
        stripeCheckout(arrayofprices)
    })
}

const stripeCheckout = arrayofprices => {
    var stripe = Stripe('pk_test_XRkwTYQW3fRAtXjzPo2guqET');
    stripe.redirectToCheckout({
        lineItems: arrayofprices,
        mode: 'payment',
        successUrl: 'https://artbyanc.netflify.app/shop.html',
        cancelUrl: 'https://artbyanc.netflify.app/shop.html',
    }).then(function (result) {
        console.log(result)
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `result.error.message`.
    });
}

//____________________________________________________________________

// Helper Methods
const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//____________________________________________________________________

// Initialization Methods
$(document).ready(() => {
    $("html, body").animate({ scrollTop: 0 }, "fast");
    loading_animation_start()
})

barba.init({
    sync: true,
    transitions: [{
        name: 'transition-base',
        async leave() {
            const done = this.async();
            $("html, body").animate({ scrollTop: 0 }, "fast");
            let loading_screen = document.querySelector('.loading_eye')
            // $(loading_screen).css('zIndex' , '100')
            // let loading_title = $('.loading_title').get(0)
            // loading_title2 = $('.loading_title2').get(0);
            // // loading_title2.innerHTML = "";
            // loading_title.innerHTML = "About";
            // loading_animation_start()
            await delay(1000);
            done();
        },
        async enter() {
            $("html, body").animate({ scrollTop: 0 }, "fast");
            // document.documentElement.top = 0;
            // window.scroll(0,0)
        },
    }],
    views: [
        {
            namespace: 'home',
            afterEnter() {
                // loading_animation_start()
                homeInit()
                $('.artworks_btn').click((e) => {
                    getCategory(e)
                })
            },
        },
        {
            namespace: 'about',
            afterEnter() {
                // loading_animation_start()
                aboutInit()
            },
        },
        {
            namespace: 'contact',
            afterEnter() {
                // loading_animation_start()
                $('.contact_btn').click((e) => {
                    var form = $('.formContainer').get(0)
                    var isValid = gatherInputs(form)
                    if (!isValid)
                        e.preventDefault()
                    firebaseInit()
                })

            },
        },
        {
            namespace: 'artworks',
            afterEnter() {
                // loading_animation_start()
                window.onclick = ((e) => {
                    console.log(e,)
                    if (e.target === $('.pic_modal').get(0) || e.target === $('.close_btn').get(0)) {
                        $('.pic_modal').css('display', 'none')
                    }
                })
                $('.image_container').click((e) => {
                    fillModal(e)
                })
                $('.filter').click((e) => {
                    getCategory(e)
                })
            },
        },
        {
            namespace: 'shop',
            afterEnter() {
                // loading_animation_start()
                shopInit()
                fillCart()
            },
        },
    ],
});

//____________________________________________________________________