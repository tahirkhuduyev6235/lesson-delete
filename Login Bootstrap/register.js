this.document.getElementById("btn1").addEventListener("click", function(e) {
    e.preventDefault()
    let myArr = []
    if (localStorage.getItem('userdata')) {
        myArr = JSON.parse(localStorage.getItem('userdata'))
    }
    let names = document.getElementById("sname").value
    let emails = document.getElementById("semail").value
    let passwords = document.getElementById("spassword").value
    let person = new ObjCreate(names, emails, passwords)
    myArr.push(person)
    let myjsontxt = JSON.stringify(person)
    localStorage.setItem("userdata", myjsontxt)
})

function ObjCreate(n, e, p) {
    this.name = n
    this.email = e
    this.password = p

}