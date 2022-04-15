
// Test 1

const submitData = function (userName, userEmail) {
    const configurationObject = {
       method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: `${userName}`,
          email: `${userEmail}`,
        }),
      };
    fetch('http://localhost:3000/users',configurationObject)
    .then(resp => resp.json())
    .then((userData) => {
        const userId = userData.id;
        const p = document.createElement("p");
        p.innerHTML = userId;
        document.body.appendChild(p);
        console.log(document.body.innerHTML)
    })
    .catch(function (error) {
        const p = document.createElement("p");
        p.innerHTML = `${error.message} Unauthorized Access`;
        console.log(error.message)
        document.body.appendChild(p)
        console.log(document.body.innerHTML)
    })
};

 submitData('Bilal','bo569@nyu.edu')