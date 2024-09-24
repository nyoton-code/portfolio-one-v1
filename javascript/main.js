//  window onload animation 
console.log(document.documentElement.scrollHeight);

let divAN = document.querySelector(".anm");
setTimeout(function () {
    document.body.removeChild(divAN);
    document.querySelector(".allp").style.display = "block";
    console.log(document.documentElement.scrollHeight);
}, 4500)
// end window onload animation


//     job animation text : 
setTimeout(function () {


    let jobAnimation = document.querySelector(".job");
    let jobs = ["software enginner", "front end", "designer"];
    let textc = jobAnimation;

    let i = 0;
    function typingEffect() {
        let word = jobs[i].split("");
        var loopTyping = function () {
            if (word.length > 0) {
                jobAnimation.innerHTML += word.shift();
            } else {
                setTimeout(() => deletingEffect(), 1000);
                return false;
            };
            setTimeout(loopTyping, 200);
        };
        loopTyping();
    };

    function deletingEffect() {
        let word = jobs[i].split("");
        var loopDeleting = function () {
            if (word.length > 0) {
                word.pop();
                jobAnimation.innerHTML = word.join("");
            } else {
                if (jobs.length > (i + 1)) {
                    i++;
                } else {
                    i = 0;
                };
                typingEffect();
                return false;
            };
            setTimeout(loopDeleting, 200);
        };
        loopDeleting();
    };

    typingEffect();

}, 5000);

//   end   job animation text : 







// start scrool line  animation with hight :
setTimeout(() => {
    let allScroll = document.scrollingElement.scrollHeight - document.scrollingElement.clientHeight;
    let so = document.querySelector(".progress-page  span");
    window.onscroll = () => {
        let scrollTop = document.scrollingElement.scrollTop;
        let pro = (scrollTop / allScroll) * 100;
        so.style.height = `${pro * 2}%`;
    }
    let myAllListSpan = document.querySelectorAll(".sidebar li span");
    let varHeightSection = allScroll / 5;
    function changeColorSpan() {
        let i = 1;
        window.addEventListener("scroll", function () {
            if ((window.scrollY + 15) >= varHeightSection) {
                myAllListSpan[i].classList.add("goal");
                varHeightSection += (allScroll / 5);
                i++;
            }
            if (window.scrollY < varHeightSection - (allScroll / 5)) {
                myAllListSpan[i - 1].classList.remove("goal");
                varHeightSection -= (allScroll / 5);
                i--;
            }
            window.scrollY + 30 >= allScroll ? myAllListSpan[5].classList.add("goal") : myAllListSpan[5].classList.remove("goal");
        })
    }
    changeColorSpan()
}, 5000);
// setTimeout(heighScrollf(), 6000);




//  bar animation when get clicked 
let listContaine = document.querySelector(".sidebar ul");


function AnimationSpanSidebar() {
    theBar.children[0].style.transform = "rotate(50deg) translateY(14px)";
    theBar.children[2].style.transform = "rotate(-52deg) translateY(-12px)";
    Object.assign(theBar.children[1].style, {
        transform: 'translateX(-10px)',
        opacity: '0'
    });
}
function deleteAnimationSideBar() {
    theBar.children[0].style.transform = "none";
    theBar.children[2].style.transform = "none";
    Object.assign(theBar.children[1].style, {
        transform: 'none',
        opacity: '1'
    });
}

let theBar = document.querySelector(".bars-side");
let k = 0;
theBar.addEventListener("click", function () {
    if (listContaine.classList.contains("hideBar")) {
        listContaine.classList.add("showBar");
        listContaine.classList.remove("hideBar");
        AnimationSpanSidebar();

    }
    else {
        listContaine.classList.remove("showBar");
        listContaine.classList.add("hideBar");
        deleteAnimationSideBar();

    }
});

// end bar animation  





//  start animation every section : 


// console.log(specialOne);
let specialEncrement = 0;
function changeSpecialElement(sp) {
    sp.style.animation = "color 0.3s 0.3s both";
    sp.children[0].style.animation = "a-special 0.5s both";
    sp.children[0].style.left = "0";
    sp.children[1].style.animation = "a-special 0.5s both";
    sp.children[1].style.right = "0";
}

let specials = document.querySelectorAll(".special");


let windowSize = 400;
window.addEventListener("scroll", function () {
    if (window.scrollY >= windowSize && specialEncrement < specials.length) {
        changeSpecialElement(specials[specialEncrement])
        windowSize += 700;
        specialEncrement++;
    }
})
//  end animation every section : 




///===========  start  circules   animation   ========================
let animatedProgress = false;
function animateProgressBar(c, p) {
    let i = 0;
    const interval = setInterval(() => {
        i++;
        p.textContent = `${i}`;
        c.style.background = `conic-gradient(#ce4980 0% ${i}%, #eee ${i}% 100%)`;
        if (i >= p.getAttribute("data-skill")) {
            clearInterval(interval);
        }
    }, 20);
}
// Call the function 
window.addEventListener("scroll", () => {
    if (window.scrollY > 1200 && !animatedProgress) {
        let circuless = document.querySelectorAll(".circule");
        let texted = document.querySelectorAll('.skill-progress');
        for (let i = 0; i < circuless.length; i++) {
            animateProgressBar(circuless[i], texted[i]);
        }
        animatedProgress = true;
    }
});
///===========  end  circules   animation   ========================
















