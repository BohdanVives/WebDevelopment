const setup = () => {
    let s1 = "blablablablabla";
    console.log(typeof s1);
    let s2 = new String("blablablablablabla");
    console.log(typeof s2);
}
window.addEventListener("load", setup);