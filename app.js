// Initialize DOM for user input rendering.
// look up input form rendering
const lookupEmployeeMenu = event => {
  event.preventDefault();
  $('#employeePage').empty();
  $('#employeePage').append(`<div class="col s12">
  <div class="input-field inline">
    <input id="lookupName" type="text">
    <label for="name_lookup">Name</label>
    <span>Enter the name to look up</span>
  </div> Look up </div>`);

  $('#lookupName').on('keyup', lookupEmployee);
};
// verify input form rendering
const verifyEmployeeMenu = event => {
  event.preventDefault();
  $('#employeePage').empty();
  $('#employeePage').append(`<div class="col s12">
  <div class="input-field inline">
    <input id="verifyName" type="text">
    <label for="name_verify">Name</label>
    <span>Enter the name to verify</span>
  </div> Verify </div>`);

  $('#verifyName').on('keyup', verifyEmployee);
};
// contains from rendering
const containsEmployeeMenu = event => {
  event.preventDefault();
  $('#employeePage').empty();
  $('#employee-result').empty();
  $('#employeePage').append(`<div class="col s12">
  <div class="input-field inline">
    <input id="containsName" type="text">
    <label for="name_contains">Name</label>
    <span>Enter the name contains</span>
  </div> Contains </div>`);
  $('#containsName').on('keyup', containsEmployee);
};
// update employee form rendering
const updateEmployeeMenu = event => {
  event.preventDefault();
  $('#employeePage').empty();
  $('#employeePage').append(`
  <div class="col s12">
  <div class="input-field inline">
    <input id="updateName" type="text">
    <label for="name_update">Name</label>
  </div> Update </div>

  <div class="col s12">
  <div class="input-field inline">
    <input id="updateOfficeNum" type="text">
    <label for="officeNum_update">Office No.</label>
  </div> Update </div>

  <div class="col s12">
  <div class="input-field inline">
    <input id="updatePhoneNum" type="text">
    <label for="phoneNum_update">Phone No.</label>
  </div> Update </div>
  <a id = "update-btn" class="waves-effect waves-light btn u">Update</a>
`);
  $('#update-btn').on('click', updateEmployee);
};
// add employee redering
const addEmployeeMenu = event => {
  event.preventDefault();
  $('#employeePage').empty();
  $('#employeePage').append(`
  <div class="col s12">
  <div class="input-field inline">
    <input id="addName" type="text">
    <label for="name_update">Name</label>
  </div> Update </div>

  <div class="col s12">
  <div class="input-field inline">
    <input id="addOfficeNum" type="text">
    <label for="officeNum_update">Office No.</label>
  </div> Update </div>

  <div class="col s12">
  <div class="input-field inline">
    <input id="addPhoneNum" type="text">
    <label for="phoneNum_update">Phone No.</label>
  </div> Update </div>

  <a id = "add-btn" class="waves-effect waves-light btn u">Add</a>`);
  $('#add-btn').on('click', addEmployee);
};
// delete employee form rendering
const deleteEmployeeMenu = event => {
  event.preventDefault();
  $('#employeePage').empty();
  $('#employee-result').empty();
  $('#employeePage').append(`
  <div class="col s12">
  <div class="input-field inline">
    <input id="deleteName" type="text">
    <label for="name_contains">Name</label>
    <span>Enter the name to delete</span>
  </div> Delete </div> 
  <a id = "delete-btn" class="waves-effect waves-light btn u">Delete</a`);
  $('#delete-btn').on('click', deleteEmployee);
};
// print all   (print) btn handler
const printAll = () => {
  $('#employeePage').empty();
  $('#employee-result').empty();
  for (let i = 0; i < employeeList.length; i++) {
    $('#employeePage').append(`<div>${employeeList[i].name}</div>`);
    $('#employeePage').append(`<div>#${employeeList[i].officeNum}</div>`);
    $('#employeePage').append(`<div>${employeeList[i].phoneNum}</div>`);
    $('#employeePage').append(`<hr/>`);
  }
};
// lookup (lookup) btn handler
const lookupEmployee = event => {
  event.preventDefault();
  $('#employee-result').empty();
  let name = $('#lookupName').val();
  const result = employeeList.filter(
    employee => employee.name.toLowerCase() === name.toLowerCase()
  );

  if (result.length === 0) {
    $('#employee-result').append(`<h5>Name not found</h5>`);
  } else {
    $('#employee-result').empty();
    for (let i = 0; i < result.length; i++) {
      $('#employee-result').append(
        `<div>${result[i].name} <br/> ${result[i].officeNum} <br/> ${
          result[i].phoneNum
        }<hr/></div>`
      );
    }
  }
};
// verify (verify) btn handler
const verifyEmployee = evnt => {
  event.preventDefault();
  $('#employee-result').empty();
  const name = $('#verifyName').val();
  const index = employeeList.findIndex(
    employee => employee.name.toLowerCase() === name.toLowerCase()
  );
  if (index > -1) {
    $('#employee-result').append(`<h5>This person is employeed.</h35`);
  } else {
    $('#employee-result').append(`<h5>This person is NOT employeed.</h5>`);
  }
};
// contains (contains) btn handler
const containsEmployee = event => {
  event.preventDefault();
  $('#employee-result').empty();
  const nameContains = $('#containsName').val();
  const listContains = employeeList.filter(content =>
    content.name.toLowerCase().includes(nameContains.toLowerCase())
  );
  if (
    listContains.length === 0 ||
    listContains.length === employeeList.length
  ) {
    $('#employee-result').append(`<h5>No name found.</h35`);
  } else {
    for (let i in listContains) {
      $('#employee-result').append(
        `${listContains[i].name} <br/> ${listContains[i].officeNum} <br/> ${
          listContains[i].phoneNum
        } <hr/>`
      );
    }
  }
};
// update (update) btn handler
const updateEmployee = event => {
  event.preventDefault();
  $('#employee-result').empty();
  const enteredName = $('#updateName').val();
  const updateIndex = employeeList.findIndex(element => {
    return element.name.toLowerCase() === enteredName.toLowerCase();
  });

  if (updateIndex === -1) {
    $('#employee-result').append(`<h4>No name found...</h4>`);
  } else {
    const officeNum = $('#updateOfficeNum').val();
    const phoneNum = $('#updatePhoneNum').val();

    if (officeNum !== '') {
      employeeList[updateIndex].officeNum = officeNum;
    }
    if (phoneNum !== '') {
      employeeList[updateIndex].phoneNum = phoneNum;
    }
    $('#employee-result').append(
      `${employeeList[updateIndex].name} <br/> ${
        employeeList[updateIndex].officeNum
      } <br/> ${employeeList[updateIndex].phoneNum} <hr/>`
    );
  }
};
// add (add) btn handler
const addEmployee = event => {
  event.preventDefault();
  $('#employee-result').empty();
  const addToEmployee = {
    name: $('#addName').val(),
    officeNum: $('#addOfficeNum').val(),
    phoneNum: $('#addPhoneNum').val()
  };
  employeeList.push(addToEmployee);
  const addedIndex = employeeList.length - 1;
  $('#employee-result').append(
    `${employeeList[addedIndex].name} <br/> ${
      employeeList[addedIndex].officeNum
    } <br/> ${employeeList[addedIndex].phoneNum} <hr/>`
  );
};
// delete (delete) btn handler
const deleteEmployee = event => {
  event.preventDefault();
  $('#employee-result').empty();
  const name = $('#deleteName').val();
  const result = employeeList.find(
    employee => employee.name.toLowerCase() === name.toLowerCase()
  );
  const removeIndex = employeeList.indexOf(result);
  if (removeIndex === -1) {
    $('#employee-result').append(`<h4>There is no match.</h4>`);
  } else {
    employeeList.splice(removeIndex, 1);
    $('#employee-result').append(`<h4>Deleted.</h4>`);
  }
};
// add eventhandler for all buttons.
$('#print-btn').on('click', printAll);
$('#verify-btn').on('click', verifyEmployeeMenu);
$('#lookup-btn').on('click', lookupEmployeeMenu);
$('#contains-btn').on('click', containsEmployeeMenu);
$('#update-btn').on('click', updateEmployeeMenu);
$('#add-btn').on('click', addEmployeeMenu);
$('#delete-btn').on('click', deleteEmployeeMenu);
