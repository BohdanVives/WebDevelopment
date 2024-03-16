const setup = () => {
    const ValideerButton = () =>{

        const voornaam = document.getElementById("voornaam").value.trim()
        const naam = document.getElementById("achternaam").value.trim()
        const date = document.getElementById("datum").value.trim()
        const mail = document.getElementById("email").value.trim()
        const kinderen = document.getElementById("aantalKinderen").value.trim()

        if(voornaam.length > 30){
            document.getElementById("voornaamerror").textContent = "max. 30 karakters";
            document.getElementById("voornaamerror").classList.add("nietgeldig")
        } else{
            document.getElementById("voornaamerror").textContent = "";
            document.getElementById("voornaamerror").classList.remove("nietgeldig")
        }


        if(naam.length > 50) {
            document.getElementById("achternaamerror").textContent = "max 50 karakters"
            document.getElementById("achternaamerror").classList.add("nietgeldig")
        } else if(naam === ""){
            document.getElementById("achternaamerror").textContent = "verplicht veld";
            document.getElementById("achternaamerror").classList.add("nietgeldig")
        } else {
            document.getElementById("achternaamerror").textContent = "";
            document.getElementById("achternaamerror").classList.remove("nietgeldig")
        }

        const checkDate = /^\d{2}-\d{2}-\d{4}$/;
        if(date === ""){
            document.getElementById("datumerror").textContent = "verplicht veld"
            document.getElementById("datumerror").classList.add("nietgeldig")
        } else if(date.match(checkDate)){
            document.getElementById("datumerror").textContent = "formaat is niet dd/mm/jjjj"
            document.getElementById("datumerror").classList.add("nietgeldig")
        } else {
            document.getElementById("datumerror").textContent = "";
            document.getElementById("datumerror").classList.remove("nietgeldig")

        }

        /*const emailCheker = () =>{
            let index = mail.indexOf("@");
            for(let i = 0; i < mail.length;i++){
                index = mail.indexOf("@",index+1);
            }
            return index;
        }

        if(emailCheker() !== 1){
            document.getElementById("emailerror").textContent = "geen geldig email adres"
            document.getElementById("emailerror").classList.add("nietgeldig")
        }*/


        const emailRegels = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!mail.match(emailRegels)){
            document.getElementById("emailerror").textContent = "geen geldig email adres"
            document.getElementById("emailerror").classList.add("nietgeldig")
        } else if(mail === ""){
            document.getElementById("emailerror").textContent = "verplicht veld"
            document.getElementById("emailerror").classList.add("nietgeldig")
        } else {
            document.getElementById("emailerror").textContent = "";
            document.getElementById("emailerror").classList.remove("nietgeldig")

        }

        if(isNaN(kinderen) || kinderen < 0){
            document.getElementById("aantalKinderenError").textContent = "is geen positief geta"
            document.getElementById("aantalKinderenError").classList.add("nietgeldig")
        } else if(kinderen > 99){
            document.getElementById("aantalKinderenError").textContent = "is te vruchtbaar"
            document.getElementById("aantalKinderenError").classList.add("nietgeldig")
        } else {
            document.getElementById("aantalKinderenError").textContent = "";
            document.getElementById("aantalKinderenError").classList.remove("nietgeldig")

        }
    }
    document.getElementById("Valideer").addEventListener("click", ValideerButton)

}
window.addEventListener("load", setup);