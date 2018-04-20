/**
 * This javascript is written by Jahn-Willy Nøstdahl and is not indeded for distribution.
 * Current javascript is made in conjunction with registration form of 'Det nødvendige part'
 * Code contains end-user messages in Norwegian.
 */
var re = /^[\a-åA-Å -]+$/;   //Only allow alpanumericals + space
var msg = "Feil har oppstått! \n Les under! \n\n";     //Feil melding
var errors =[];             //ArrayList containing errors
var minAge = 18;            //Setting minimum age to 18 years
var maxAge = 120;           //Setting maximun age to 120 years

function checkForm(form)
{

    
    // Validate name field, fails if blank.
    if (form.name.value === "")
    {
        errors.push("Vennligst skriv inn navnet ditt!");
    }
    //validate name field for character; only accept alpanumericals and spaces
    else if(!re.test(form.name.value))
    {
        errors.push("Navn inneholder ugyldige tegn!");
    }
    
    //Validate the age of user, Minumum is set to 18 years.
    if (~~ ((Date.now() - new Date(form.bday.value)) / (31557600000)) <= minAge)
    {
        errors.push("Beklager du er ikke gammel nok for registrering.");
    }
    //Validate the age of user, maximum age is set to 120.
    if (~~ ((Date.now() - new Date(form.bday.value)) / (31557600000)) >= maxAge)
    {
        errors.push("Er du virkelig "+(Date.now() - new Date(form.bday.value))/(31557600000) 
                    + " år gammel?");
    }
    //Validate the age of user, if age is not set or is 0 (zero)
    if (~~ ((Date.now() - new Date(form.bday.value)) / (31557600000)) === (null || 0))
    {
        errors.push("Vennligst fyll inn din alder");
    }
    
    //Validate number field for number only
        if (isNaN(form.phone.value))
    {
        errors.push(form.phone.value + "?? Ingen har et slikt telefon nummer");
    }
    if(form.phone.value.length < 8)
    {
        errors.push("Vennligst fyll inn hele tlf nummeret ditt");
    }
    
    //Validate eMail field, fails if blank.
    if (form.eMail.value === "")
    {
        errors.push("Vennligst fyll inn din epost-addresse!");
    }
    
    //Validate repeated email field, fails if no match.
    if (form.NeMail.value !== form.eMail.value)
    {
        errors.push("Epost addressene stemmer ikke overens!");
    }
    
    if (errors.length > 0)
    {
        for (var i = 0; i < errors.length; i++)
        {
            msg+=errors[i] +"\n";
        }
        alert(msg + "\n");
        errors = [];
        return false;
    }
    
    if(errors.lenght === 0 || errors !== null)
    {
    alert("Tusen takk "+form.name.value+" ,for at du registrerte deg i PST's database!");
    return true;
    }
}

/**
 * Add-on function, prints the age of the user as *he inputs.
 * @returns {Age}
 */
function submitBday() {
    var Q4A = "";
    var Bdate = document.getElementById('bday').value;
    var Bday = +new Date(Bdate);
    Q4A +="Insatt alder: " + ~~ ((Date.now() - Bday) / (31557600000)) + " år";
    var theBday = document.getElementById('age');
    theBday.innerHTML = Q4A;
}