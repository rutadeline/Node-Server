
/*document.getElementById("button").addEventListener("click",updatevalue);

function updatevalue(){
    let FIRSTNAME = document.getElementById("FIRSTNAME").value+ " " + document.getElementById("LASTNAME").value;
    let LASTNAME = document.getElementById("LASTNAME").value;
    let EMAIL = document.getElementById("EMAIL").value;
    let PHONENUMBER = document.getElementById("PHONENUMBER").value;
    let CITY = document.getElementById("CITY").value;


    document.getElementById("FIRSTNAMEOutput").innerHTML = `FIRSTNAME: ${FIRSTNAME}`;
    document.getElementById("LASTNAMEOutput").innerHTML = `LASTNAME: ${LASTNAME}`;
    document.getElementById("EMAILOutput").innerHTML = `EMAIL: ${EMAIL}`;
    document.getElementById("PHONENUMBEROutput").innerHTML = `PHONENUMBER: ${PHONENUMBER}`;
    document.getElementById("CITYOutput").innerHTML = `CITY: ${CITY}`;
}*/

let personData = [];

let jsDOM = {
    data: {
        FIRSTNAME: document.getElementById("FIRSTNAMEINPUT"),
        LASTNAME: document.getElementById("LASTNAMEINPUT"),
        EMAIL: document.getElementById("EMAILINPUT"),
        PHONENUMBER: document.getElementById("PHONENUMBERINPUT"), 
        CITY : document.getElementById("CITYINPUT"),
    },
    btn: {
        addBtn: document.getElementById('addPerson'),
        showData: document.getElementById('showData')
    },

    personData: document.getElementById('personData')
};

let jsFunc = {

    myFunction : () => {
        jsDOM.FIRSTNAMEOutput.innerHTML = `FIRST NAME: ${jsDOM.FIRSTNAME.value}`;
        jsDOM.LASTNAMEOutput.innerHTML = `LAST NAME: ${jsDOM.LASTNAME.value}`;
        jsDOM.EMAILOutput.innerHTML = `EMAIL: ${jsDOM.EMAIL.value}`;
        jsDOM.PHONENUMBEROutput.innerHTML = `PHONE NUMBER: ${jsDOM.PHONENUMBER.value}`;
        jsDOM.CITYOutput.innerHTML = `CITY: ${jsDOM.CITY.value}`;

    },
    showData: () => {
        let parentDiv = jsDOM.personData;
        parentDiv.innerHTML= '';

        let node = document.createElement("div");

        let nodeHeader = document.createElement("h3");
        let nodeHeaderText = document.createTextNode("person Data");
        nodeHeader.appendChild(nodeHeaderText);

        node.appendChild(nodeHeader);

        let fullname, email, phone;

        personData.forEach(x => {
            let fullname = `${x.firstname} ${x.lastname}` , email=x.email, phone=x.phone;
            
            let personData = document.createElement('p');
            let personDataText = document.createTextNode(`Name: ${fullname} Email: ${email} Phone: ${phone}`);

            personData.appendChild(personDataText);
            node.appendChild(personData);
        })
        parentDiv.appendChild(node);

    },
    clearFields: () =>{
       Object.values(jsDOM.data).forEach(x => x.value= "");

    },

    addData:() => {
        personData.push({firstname: jsDOM.data.FIRSTNAME.value, lastname: jsDOM.data.LASTNAME.value, email: jsDOM.data.EMAIL.value, phone: jsDOM.data.PHONENUMBER.value });
        jsFunc.clearFields();
    },
    
}
jsDOM.btn.addBtn.addEventListener('click', jsFunc.addData);
jsDOM.btn.showData.addEventListener('click', jsFunc.showData);
