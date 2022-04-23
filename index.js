// Add your code here
/*const postObj = {
    userName: "Anna",
    email: "anna12shu@mail.com"
}

const postObjConfig = {
    method: "POST",
    headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
    },
    body: JSON.stringify(postObj)
}*/

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    addUserToDB()
    //userObj()
});

const renderData = () => {
    fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(data => {
        //console.log(data)
        const ul= document.querySelector('#users')
        data.forEach((user) => {
            //console.log(user.id)
        const li = document.createElement('li')
        const h4 = document.createElement('h4')
        const btn = document.createElement("button")
        btn.id="button"

        li.textContent = user.userName
        h4.textContent = user.email
        btn.textContent = "REMOVE"
        btn.addEventListener('click', () => {
            li.remove()
            fetch(`http://localhost:3000/users/${user.id}`, {
                method: "DELETE"
            }).then(res => console.log(res))
            alert('User was deleted')
        })

        li.append(h4,btn)
        ul.append(li)
         })
        return ul
    })
}

renderData()

/*function makePost() {
    fetch('http://localhost:3000/users', postObjConfig)
    .then(res => (res.json()). then(dataFromDB => console.log(dataFromDB)))
    .catch(error => {
        alert('Error!Erore!')
        console.log(alert.message)})
}*/

const addUserToDB = () => {
    const form = document.getElementById("newid")
    console.log(form)
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        //console.log(e)

        const userN = e.target[0].value
        const userE = e.target[1].value
        const userObj = {
            userName: `${userN}`,
            email: `${userE}`
        }

        console.log(`I got ${userN} and ${userE}. Ready to send to DB!`)

        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body: JSON.stringify(userObj)
        }).then(res => res.json()).then(dataInDB => console.log(dataInDB))
    })
}
/*

const userObj = () => {
    const form = document.getElementById("newid")
    console.log(form)
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        console.log(e)

        const userName = e.target[0].value
        const email = e.target[1].value
        console.log(`I got ${userName} and ${email}. Ready to send to DB!`)
    })
}*/

