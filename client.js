$(document).ready(onReady);

// Global liar of employees
let employeeList = [];

function onReady() {
    console.log('on ready');
    
    // handle new emmployee form submit
    $('#employeeForm').on('submit', addEmployee);

    // handle delete employee button
    $(document).on('click', '.deleteBtn', deleteEmployee);


};

function deleteEmployee() {
    console.log('delete employee');

    $(this).parents('tr').remove();
    

};

function addEmployee(event) {
    // Prevent form from causing page to reload
    event.preventDefault();

    console.log('employee added');
    
    // grab data from the DOM from my form inputs
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let idNumber = $('#idNumber').val();
    let jobTitle = $('#jobTitle').val();
    let annualSalary = Number($('#annualSalary').val());
    // put all info into object
    let employee = {
        firstName:  firstName,
        lastName:   lastName,
        id:         idNumber,
        title:      jobTitle,
        salary:     annualSalary
    };
    console.log('New employee', employee);

    // add employee info to object
    // add it to global employee list
    employeeList.push(employee);
    console.log('employee list', employeeList);

    // empty the list before render anything else
    $('#employeeList').empty();

    // render the employeeList
    // loop through employeeList array
    // render each employee
    // as a <tr>
    for (let employee of employeeList) {
        $('#employeeList').append(`
             <tr>
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.id}</td>
                <td>${employee.title}</td>
                <td>$${employee.salary}</td>
                <td>
                    <button class="deleteBtn">Delete</button>
                 </td>
            </tr>
        `);
    }


}; // end of addEmployee function

