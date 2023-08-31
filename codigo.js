

function clicar() {
	let firstName = document.getElementById('firstname')
	let lastName = document.getElementById('lastname')
	let email = document.getElementById('email')
	let password = document.getElementById('password')
	let botao = document.getElementById('botao')
	let firstName_R = document.getElementById('firstname_r')
	let lastName_R = document.getElementById('lastname_r')
	let email_R = document.getElementById('email_r')
	let password_R = document.getElementById('password_r')
	let invalido1 = document.getElementById('img_erro1')
	let invalido2 = document.getElementById('img_erro2')
	let invalido3 = document.getElementById('img_erro3')
	let invalido4 = document.getElementById('img_erro4')
	
	if(firstName.value == ''){
		firstName.innerHTML = 'oi'
		firstName_R.innerHTML = 'First name cannot be empty'
		firstName_R.style.color = 'red'
		firstName_R.style.fontSize = '11px'
		firstName_R.style.marginTop = '-15px'
		firstName_R.style.marginLeft = '68%'
		invalido1.style.display = 'block'
	} else{
		firstName_R.innerHTML = ''
		invalido1.style.display = 'none'
	}

	if(lastName.value == ''){
		lastName_R.innerHTML = 'Last name cannot be empty'
		lastName_R.style.color = 'red'
		lastName_R.style.fontSize = '11px'
		lastName_R.style.marginTop = '-15px'
		lastName_R.style.marginLeft = '68%'
		invalido2.style.display = 'block'
	} else{
		lastName_R.innerHTML = ''
		invalido2.style.display = 'none'
	}

	if(email.value == ''){
		email_R.innerHTML = 'Email cannot be empty'
		email_R.style.color = 'red'
		email_R.style.fontSize = '11px'
		email_R.style.marginTop = '-15px'
		email_R.style.marginLeft = '68%'
		invalido3.style.display = 'block'
	}	else if (validar(email.value) == false ){
		email_R.innerHTML = 'Looks like this is not an email'
		email_R.style.color = 'red'
		email_R.style.fontSize = '11px'
		email_R.style.marginTop = '-15px'
		email_R.style.marginLeft = '68%'
		invalido3.style.display = 'block'	
	}
	 	else{
		invalido3.style.display = 'none'
	}

	if(password.value == ''){
		password_R.innerHTML = 'Password cannot be empty'
		password_R.style.color = 'red'
		password_R.style.fontSize = '11px'
		password_R.style.marginTop = '-15px'
		password_R.style.marginLeft = '68%'
		invalido4.style.display = 'block'
	} else{
		password_R.innerHTML = ''
		invalido4.style.display = 'none'
	}

	function validar(email) {
		let teste = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
		return teste.test(email)
	}

}

