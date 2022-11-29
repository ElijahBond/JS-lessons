const btn = document.querySelector('.btn');
const elem = document.querySelector('.box');  // in secons animation comment this line
let timerId,
    i = 0;

let pos = 0;      // in secons animation comment this line


////////// first animation ////////// 

    // function myAnimation() {
    //     const elem = document.querySelector('.box');
    //     let pos = 0;

    //     const id = setInterval(frame, 5);
    //     function frame() {
    //         if (pos == 300) {
    //             clearInterval(id);
    //         } else {
    //             pos++;
    //             elem.style.top = pos + 'px';
    //             elem.style.left = pos + 'px';
    //         }
    //     }
    // }

    // btn.addEventListener('click', myAnimation);

////////// second animation ////////// 

    function myAnimation() {
        pos++;
        elem.style.top = pos + 'px';
        elem.style.left = pos + 'px';
        

        if (pos < 300) {
            requestAnimationFrame(myAnimation);
        }

    };

    btn.addEventListener('click', () => requestAnimationFrame(myAnimation));