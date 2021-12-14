$(document).ready(onReady);

// Global list of employees
let employeeList = [];

function onReady() {
    console.log('on ready');
    
    // handle new emmployee form submit
    $('#employeeForm').on('submit', addEmployee);

    // handle delete employee button
    $(document).on('click', '.deleteBtn', deleteEmployee);

};

// start delete employee function
function deleteEmployee() {
    console.log('delete employee');
    $(this).parents('tr').remove();
    
    
}; // end deleteEmployee

// start add employee function
function addEmployee(event) {
    // Prevent form from causing page to reload
    event.preventDefault();
    
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
    $('input').val('');
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
    ;} // end of appending to the DOM

    // calculate monthly salary
    // if month salary cost over 20000, highlight it red
    // function calMonthlySalary() {
    //     let total = 0;
    //     for (let employee of employeeList) {
    //         total += employee.salary / 12;
    //     if (total > 20000) {
    //         $('p').parents('div').css('background-color', 'red')
    //     }
    //     else {
    //         $('p').parents('div').css('background-color', 'white')
    //         }
    //     }
    //     return total;
    // }; // end monthly salary

    // appending monthly salary to DOM
    // round it to 2 decimals
    // let monthlySalary = calMonthlySalary();
    // monthlySalary = Math.round(monthlySalary * 100);
    // monthlySalary = monthlySalary/100;
    // $('#monthlyCost').empty('');
    // $('#monthlyCost').append(`
    //         <p><strong>MONTHLY COST:</strong> $${monthlySalary}</p>
    // `);
    // Start with a total of 0
    let totalSalary = 0;
    for (let employee of employeeList) {
        // then add each employee's salary to the total
        totalSalary += employee.salary;
    };

    // Divide by 12 to get the monthly salary
    let totalMonthlySalary = totalSalary / 12;
    // round it to the nearest decimal
    totalMonthlySalary = Math.round(totalMonthlySalary * 100) /100;
    $('#monthlyCost').empty('');
    // render to the DOM
    $('#monthlyCost').append(`
            <p><strong>MONTHLY COST:</strong> $${totalMonthlySalary}</p>
    `);
    // if total monthly cost greater 20000 turn background red
    if (totalMonthlySalary > 20000) {
                $('p').parents('div').css('background-color', 'red')
            }
            else {
                $('p').parents('div').css('background-color', 'white')
            };

}; // end of addEmployee function
