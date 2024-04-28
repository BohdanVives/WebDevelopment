const setup = () => {
    alert('Happy birthday')
    let student = {
        voornaam : "Bohdan",
        achternaam : "Shevchenko",
        gebortedatum : new Date(2005,1,1),
        Land : "Belgium",
        adres : {
            strat : "Merelstraat 2",
            postcode : "8500",
            gemeente : "Kortrijk"
        }
    }
    let info = JSON.stringify(student)
    console.log(info)
    let student1 = JSON.parse(info)
    console.log(student1)
}
window.addEventListener("load", setup);