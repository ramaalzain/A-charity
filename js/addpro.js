

function message() {
  var nameInput = document.getElementById('nameInput');
  var dateI = document.getElementById('dateI');
  var dateInput1 = document.getElementById('dateInput2');
  var typeSelect1 = document.getElementById('type1'); // Branch selection
  var typeSelect2 = document.getElementById('type2'); // Project type selection
  var descTextarea = document.getElementById('desc'); // Description textarea



  const descError = document.getElementById('descError'); // Get the error element
  const nameError = document.getElementById('nameError'); // Get the error element
  const dateE = document.getElementById('dateE'); // Get the error element
  const dateError2 = document.getElementById('dateError2'); // Get the error element

  const datemsg = document.getElementById('datemsg');
  const datemsg2 = document.getElementById('datemsg2');
  const success = document.getElementById('success');
  const danger = document.getElementById('danger');
  const namemsg = document.getElementById('namemsg');
  const descmsg = document.getElementById('descmsg');

  let hasError = false;
  nameError.textContent = '';
  dateE.textContent = '';
  dateError2.textContent = '';
  descError.textContent = '';

  if (nameInput.value === '' || dateI.value === '' || dateInput2.value === '' || typeSelect1.value === ''
    || typeSelect2.value === '' || descTextarea.value === '') {
    danger.style.display = 'block';
    hasError = true;
  }


  // Validate project name length
  const projectName = nameInput.value.trim();
  if (projectName.length > 10) {
    nameError.textContent = '*';
    nameInput.focus(); // Set focus on the input field for correction
    namemsg.style.display = 'block';
    hasError = true;

  }

  // Validate dates
  const d1 = new Date(dateI.value);
  if (d1.getFullYear() > 2030) {
    dateE.textContent = '*';
    dateI.focus();
    datemsg.style.display = 'block';
    hasError = true;
  }
  // Validate dates
  const d2 = new Date(dateInput2.value);
  if (d2.getFullYear() > 2030) {
    dateError2.textContent = '**';
    dateInput2.focus();
    datemsg.style.display = 'block';
    hasError = true;
  }

  // Check if start date is before end date
  if (d1 > d2) {
    dateE.textContent = '***';
    dateError2.textContent = '***';
    dateInput1.focus();
    datemsg2.style.display = 'block';
    hasError = true;

  }

  // Validate desc
  const desc = descTextarea.value.trim();
  if (desc.length > 2000) {
    descError.textContent = '*';
    descTextarea.focus();
    descmsg.style.display = 'block';
    hasError = true;

  }


  else {
    setTimeout(() => {
      nameInput.value = '';
      dateI.value = '';
      dateInput2.value = '';
      descTextarea.value === '';
      dateE.value = '';
      dateError2.value = '';
      descErrorvalue = '';
      typeSelect2.value === '';
      typeSelect1.value === '';

    }, 2000);
    if (!hasError)
      success.style.display = 'block';

  }


  setTimeout(() => {
    danger.style.display = 'none';
    success.style.display = 'none';
    namemsg.style.display = 'none';
    datemsg.style.display = 'none';
    datemsg2.style.display = 'none';
    descmsg.style.display = 'none';


  }, 4000);

}