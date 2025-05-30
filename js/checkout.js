
// Exercise 6
// checkout.js

const validate = () => {
    let error = 0;  // comptador d'errors

    // Obtenir els camps d'entrada
    const fName     = document.getElementById("fName");     // nom
    const fLastN    = document.getElementById("fLastN");    // cognoms
    const fAddress  = document.getElementById("fAddress");  // adreça
    const fEmail    = document.getElementById("fEmail");    // email
    const fPassword = document.getElementById("fPassword"); // contrasenya
    const fPhone    = document.getElementById("fPhone");    // telèfon

    // Obtenir els elements per mostrar errors
    const errorName     = document.getElementById("errorName");
    const errorLastN    = document.getElementById("errorLastN");
    const errorAddress  = document.getElementById("errorAddress");
    const errorEmail    = document.getElementById("errorEmail");
    const errorPassword = document.getElementById("errorPassword");
    const errorPhone    = document.getElementById("errorPhone");

    // Netejar estils i missatges d'errors anteriors
    [fName, fLastN, fAddress, fEmail, fPassword, fPhone].forEach(input => {
        input.classList.remove("is-invalid");
    });
    [errorName, errorLastN, errorAddress, errorEmail, errorPassword, errorPhone].forEach(errDiv => {
        errDiv.textContent = "";
    });

    // Funcions auxiliars de validació
    const hasMin3     = v => v.trim().length >= 3;                                 // mínim 3 caràcters
    const onlyLetters = v => /^[A-Za-zÀ-ÿ\s]+$/.test(v);                          // només lletres i espais
    const onlyDigits  = v => /^\d+$/.test(v);                                     // només dígits
    const passOK      = v => /[A-Za-z]/.test(v) && /\d/.test(v);                  // lletres i números
    const emailOK     = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);                // format bàsic d'email

    // 1) Nom
    if (!hasMin3(fName.value) || !onlyLetters(fName.value)) {
        error++;
        fName.classList.add("is-invalid");
        if (!hasMin3(fName.value)) {
            errorName.textContent = "Cal com a mínim 3 caràcters.";
        } else {
            errorName.textContent = "Nom només amb lletres.";
        }
    }

    // 2) Cognoms
    if (!hasMin3(fLastN.value) || !onlyLetters(fLastN.value)) {
        error++;
        fLastN.classList.add("is-invalid");
        if (!hasMin3(fLastN.value)) {
            errorLastN.textContent = "Cal com a mínim 3 caràcters.";
        } else {
            errorLastN.textContent = "Cognoms només amb lletres.";
        }
    }

    // 3) Adreça
    if (!hasMin3(fAddress.value)) {
        error++;
        fAddress.classList.add("is-invalid");
        errorAddress.textContent = "Cal com a mínim 3 caràcters.";
    }

    // 4) Email
    if (!hasMin3(fEmail.value) || !emailOK(fEmail.value)) {
        error++;
        fEmail.classList.add("is-invalid");
        if (!hasMin3(fEmail.value)) {
            errorEmail.textContent = "Cal com a mínim 3 caràcters.";
        } else {
            errorEmail.textContent = "Format d’email invàlid.";
        }
    }

    // 5) Contrasenya
    if (!hasMin3(fPassword.value) || !passOK(fPassword.value)) {
        error++;
        fPassword.classList.add("is-invalid");
        if (!hasMin3(fPassword.value)) {
            errorPassword.textContent = "Cal com a mínim 4 caràcters.";
        } else {
            errorPassword.textContent = "Ha d’incloure lletres i números.";
        }
    }

    // 6) Telèfon
    if (!hasMin3(fPhone.value) || !onlyDigits(fPhone.value)) {
        error++;
        fPhone.classList.add("is-invalid");
        if (!hasMin3(fPhone.value)) {
            errorPhone.textContent = "Cal com a mínim 3 dígits.";
        } else {
            errorPhone.textContent = "Només números (9 dígits).";
        }
    }

    // Decisió final
    if (error > 0) {    
        return false;  // impedir l'enviament
    } else {
        alert("Formulari enviat correctament");
        return true;   // permetre l'enviament
    }
};

