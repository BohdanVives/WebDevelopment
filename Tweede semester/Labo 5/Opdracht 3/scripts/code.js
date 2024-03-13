const setup = () => {
    let s1 = "HTML"
    let s2 = "CSS"
    let s3 ="JAVA"

    console.log(s1.localeCompare(s2))
    console.log(s3.localeCompare(s2))
    console.log(s2.localeCompare(s1))
    console.log(s2.localeCompare(s3))
    console.log(s3.localeCompare(s1))
    console.log(s1.localeCompare(s3))
    console.log(s1.localeCompare(s1))
}
window.addEventListener("load", setup);