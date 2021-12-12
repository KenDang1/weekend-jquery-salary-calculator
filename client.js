$(document).ready(onReady);

function onReady() {
    console.log('on ready');
    
    $('#employeeForm').on('submit', onAddEmployee);
}

function onAddEmployee(event) {
    // Prevent form from causing page to reload
    event.preventDefault();

    console.log('employee added');
    
    // grab data from the DOM from my form inputs
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let idNumber = $('#idNumber').val();
    let jobTitle = $('#jobTitle').val();
    let annualSalary = Number($('#annualSalary').val());

    let employee = {
        firstName:  firstName,
        lastName:   lastName,
        id:         idNumber,
        title:      jobTitle,
        salary:     annualSalary
    };
    console.log('New employee', employee);
    

}