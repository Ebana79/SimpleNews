// alert("Bienvenue sur simpleNews c'\est toujours une bonne nouvelle de vous voir")

const freeClass = document.querySelector(".freemode")

function message() {
    freeClass.addEventListener("click", (e) => {
        if(e == 1) {
            alert('Vous êtes maintenant sur le mode free');
        }
        else if(e++) {
            alert('Vous déjà sur le mode free');
        }

        else {
            return 0;
        }
    })
}