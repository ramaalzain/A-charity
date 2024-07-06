



// باستخدام FileReader API
const userImageInput = document.getElementById('userImageInput');
const userImage = document.getElementById('userImage');

userImageInput.addEventListener('change', function() {
  if (this.files && this.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      userImage.src = e.target.result;
    };
    reader.readAsDataURL(this.files[0]);
  }
});

const projectInput = document.getElementById('projectuser');
const nameInput = document.getElementById('name');

const projectLengthError = document.getElementById('project-length-error');
const nameLengthError = document.getElementById('name-length-error');


projectInput.addEventListener('keyup', function() {
  const projectName = this.value;
  const projectLength = projectName.length;
  if (projectLength < 5 || projectLength > 12) {
    projectLengthError.style.display = 'block';
  } else {
    projectLengthError.style.display = 'none';
  }
});

// Hide the error message initially
projectLengthError.style.display = 'none';





nameInput.addEventListener('keyup', function() {
  const userName = this.value;
  const nameLength = userName.length;
  if (nameLength < 5 || nameLength> 12) {
    nameLengthError.style.display = 'block';
  } else {
    nameLengthError.style.display = 'none';
  }
});

// Hide the error message initially
nameLengthError.style.display = 'none';