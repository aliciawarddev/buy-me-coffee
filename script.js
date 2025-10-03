// Stripe payment links
const PAYMENT_LINKS = {
    '300': 'https://buy.stripe.com/test_fZueVc3MHew4bntcpG9MY01',
    '500': 'https://buy.stripe.com/test_dRm6oG5UPds03V1fBS9MY02', 
    '1000': 'https://buy.stripe.com/test_00w28q82X9bK4Z5dtK9MY03'
};

// Get all coffee buttons
const coffeeButtons = document.querySelectorAll('.coffee-btn');

// Add click event to each button 
coffeeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const amount = button.getAttribute('data-amount');
        handlePayment(amount);
    });
});

// Handle the payment process
function handlePayment(amount) {
    const paymentLink = PAYMENT_LINKS[amount];

    if (paymentLink) {
        // Show loading state
        event.target.style.opacity = '0.7';

        // Redirect to Stripe Checkout
        window.location.href = paymentLink;
    } else {
        console.error('Payment link not found for amount:', amount);
        alert('Payment option not available yet!');
    }
}