function ValidateForm(inputText){

    let emailAddress = document.getElementById('email_address');
    let password = document.getElementById('password');



    //  Name Validation //

    let firstName = document.getElementById('first_name');
    let invalidIconFirstName = document.getElementById('invalid__icon__firstname');
    let invalidTextFirstName = document.getElementById('invalid__text__firstname');
    let nameRegex = /^[a-z ,.'-]+$/i;

    let lastName = document.getElementById('last_name');
    let invalidIconlastName = document.getElementById('invalid__icon__lastname');
    let invalidTextlastName = document.getElementById('invalid__text__lastname');


                if(lastName.value.match(nameRegex)) {
                        invalidIconlastName.classList.remove('incorrect');
                        invalidIconlastName.classList.add('correct');

                        invalidTextlastName.classList.remove('incorrect');
                        invalidTextlastName.classList.add('correct');
                } else {
                        invalidIconlastName.classList.add('incorrect');
                        invalidIconlastName.classList.remove('correct');

                        invalidTextlastName.classList.add('incorrect');
                        invalidTextlastName.classList.remove('correct');
                }  

                if(firstName.value.match(nameRegex)) {
                        invalidIconFirstName.classList.remove('incorrect');
                        invalidIconFirstName.classList.add('correct');

                        invalidTextFirstName.classList.remove('incorrect');
                        invalidTextFirstName.classList.add('correct');
                } else {
                        invalidIconFirstName.classList.add('incorrect');
                        invalidIconFirstName.classList.remove('correct');

                        invalidTextFirstName.classList.add('incorrect');
                        invalidTextFirstName.classList.remove('correct');
                }


    // Email Validation //
    
    let invalidIconEmail = document.getElementById('invalid__icon__email');
    let invalidTextEmail = document.getElementById('invalid__text__email');
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

                if(emailAddress.value.match(emailRegex)) {

                        invalidTextEmail.classList.remove('incorrect');
                        invalidTextEmail.classList.add('correct');

                        invalidIconEmail.classList.remove('incorrect');           
                        invalidIconEmail.classList.add('correct');

                        console.log("correct email");

                } else {
                        invalidTextEmail.classList.remove('correct');
                        invalidTextEmail.classList.add('incorrect');

                        invalidIconEmail.classList.remove('correct');
                        invalidIconEmail.classList.add('incorrect');
                
                        console.log("incorrect email");
                }
                
     //  Password Validation //

     let passWord = document.getElementById('password');
     let invalidIconPassword = document.getElementById('invalid__icon__password');
     let invalidTextPassword = document.getElementById('invalid__text__password');

                
     if(passWord.value.match(nameRegex)) {

                invalidTextPassword.classList.remove('incorrect');
                invalidTextPassword.classList.add('correct');

                invalidIconPassword.classList.remove('incorrect');           
                invalidIconPassword.classList.add('correct');

                console.log("correct email");

      } else {
                invalidTextPassword.classList.remove('correct');
                invalidTextPassword.classList.add('incorrect');

                invalidIconPassword.classList.remove('correct');
                invalidIconPassword.classList.add('incorrect');

                console.log("incorrect email");
}
}

