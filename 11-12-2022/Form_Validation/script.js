  let button = document.getElementById('button');

        let InputName = document.getElementById('name');
        let InputEmail = document.getElementById('email');
        let InputPass = document.getElementById('password');
        let InputconfirmPass = document.getElementById('confirm_password');

        button.addEventListener('click', (e) => {
            e.preventDefault();

            let name = InputName.value;
            let email = InputEmail.value;
            let pass = InputPass.value;
            let confirmPass = InputconfirmPass.value;

            if (name == 0 || email == 0 || pass == 0 || confirmPass == 0) {
                alert("please Fill Form")
                return
            }

            if (pass !== confirmPass) {
                alert("password must be same")
                return
            }
            
            let table = document.getElementById('table');
            table.style.display = "block"

            let data = document.getElementById('data');
            data.innerHTML = `
           <td> ${name} </td>
           <td> ${email} </td>
           <td> ${pass} </td>
           <td> ${confirmPass} </td>`

            InputName.value = ""
            InputEmail.value = ""
            InputPass.value = ""
            InputconfirmPass.value = ""
        })