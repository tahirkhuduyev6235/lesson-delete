this.document.getElementById("btn2").addEventListener("click", function(e) {
    e.preventDefault()
    let userlocaljson = localStorage.getItem("userdata")
    let userlocalArr = JSON.parse(userlocaljson)
    let loginemail = document.getElementById("email").value
    let loginpassword = document.getElementById("password").value

    for (let i = 0; i < userlocalArr; i++) {
        if (userLocalArr[i].email == loginemail) {
            if (userLocalArr[i].password == loginpassword) {
                alert("You are logged into account")
            } else {
                alert("Your password is wrong")
            }
        }

    }



    let a = parseInt(localStorage.getItem("a"))

    // let users = true

    // for (let i = 1; i < a.length; i++) {
    //     let jsontxt = localStorage.getItem(`userdata${a}`)
    //     let obj = JSON.parse(jsontxt)
    //     if (obj.email == loginemail && obj.password == loginpassword) {
    //         window.location.assign("book.html")
    //         users = true
    //         alert("succesfully")
    //         break
    //     } else if (obj.email == loginemail && obj.password !== loginpassword) {
    //         alert("password is wrong")
    //     } else {
    //         users = false
    //     }

    // // }
    // if (users == false) {
    //     alert("user not found")
    // }
})