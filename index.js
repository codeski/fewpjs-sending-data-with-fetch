// Add your code here
function submitData(userName, userEmail) {

    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: `${userName}`,
            email: `${userEmail}`
        })
    })    
    .then(function(response) {
        return response.json()
    })
    .then(function(object) {
        // console.log(object)
        // console.log(object.id)
        const body = document.body
        const li = document.createElement('li')
        li.innerHTML = `${object.id}`
        body.append(li)
    })
    .catch(function(error) {
        // alert("Error!")
        // console.log(error.message)
        const body = document.body
        const li = document.createElement('li')
        li.innerHTML = `${error.message}`
        body.append(li)
    })

}