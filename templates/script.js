


const hamBurger = document.querySelector('.ham-burger'),
    finalWidth = 200,
    menu = document.querySelector('.menu');
    
    let buttonClicked = 0; 
    
    hamBurger.addEventListener('click', () => {
    buttonClicked++;

    menu.style.display = "flex";
    // menu.style.width = 0;
    menu.innerHTML = `
        <div style="display: flex;" class="ham-nav">
            <a href="/" style="display: flex;" class="home-link">Home</a>
            <a href="/about" style="display: flex;" class="about-link">About</a>
            <a href="/contact" style="display: flex;" class="contact-link">Contact</a>
            <button style="display: flex; class="join-chat">Join Chat</button>
        </div>
        `
    let properties = [
        { width: 0 }, { width: finalWidth + "px" }
    ]
    let properties2 = [
        { width: finalWidth + "px" }, { width: 0 }
    ]
    if (buttonClicked % 2 === 0) {
        menu.animate(properties2, { duration: 500, fill: "forwards" })
        setTimeout(()=>{
            menu.style.display = "none";
        }, 500)
    }
    else{
        menu.animate(properties, { duration: 500, fill: "forwards" })
    }
    // console.log(buttonClicked)
})

// Start Chat with Socket IO