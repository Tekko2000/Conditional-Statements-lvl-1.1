function checkAge() {
    let age = document.getElementById("age").value
    let resultCheck = document.getElementById('result-check')
    console.log(age)
    if (age >= 18) {
        resultCheck.innerHTML = "true(volljährig)"
    } else {
        resultCheck.innerHTML = "false(minderjährig)"
    }
}