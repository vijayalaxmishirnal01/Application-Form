document.getElementById('jobApplicationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const position = document.getElementById('position').value.trim();
    const coverLetter = document.getElementById('coverLetter').value.trim();
    const resume = document.getElementById('resume').files[0];

    if (fullName && email && phone && position && coverLetter && resume) {
        document.getElementById('successMessage').classList.remove('hidden');
        document.getElementById('jobApplicationForm').reset();
    } else {
        alert('Please fill out all fields and upload your resume.');
    }
});
