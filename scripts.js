document.getElementById('nounForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nounInput = document.getElementById('nounInput').value.trim();
    const message = document.getElementById('message');
    
    if (nounInput.toLowerCase() === 'cat') {
        message.textContent = 'Correct! You may proceed.';
        message.style.color = 'green';
        // You can add more logic here to proceed to the next step
    } else {
        message.textContent = 'Incorrect. Please try again.';
        message.style.color = 'red';
    }
});