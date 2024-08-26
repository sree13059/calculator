let balance = 1000; // Initial balance
let currentTransaction = null;

function updateMessage(message) {
    document.getElementById('message').innerText = message;
}

function checkBalance() {
    updateMessage(`Your current balance is $${balance}`);
}

function deposit() {
    currentTransaction = 'deposit';
    document.getElementById('form-container').classList.remove('hidden');
}

function withdraw() {
    currentTransaction = 'withdraw';
    document.getElementById('form-container').classList.remove('hidden');
}

function submitTransaction() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (isNaN(amount) || amount <= 0) {
        updateMessage('Please enter a valid amount');
        return;
    }

    if (currentTransaction === 'deposit') {
        balance += amount;
        updateMessage(`You have deposited $${amount}. Your new balance is $${balance}`);
    } else if (currentTransaction === 'withdraw') {
        if (amount > balance) {
            updateMessage('Insufficient funds');
        } else {
            balance -= amount;
            updateMessage(`You have withdrawn $${amount}. Your new balance is $${balance}`);
        }
    }

    document.getElementById('form-container').classList.add('hidden');
    document.getElementById('amount').value = '';
    currentTransaction = null;
}

function cancelTransaction() {
    document.getElementById('form-container').classList.add('hidden');
    document.getElementById('amount').value = '';
    updateMessage('Transaction cancelled');
    currentTransaction = null;
}
