// Stripe payment links
const PAYMENT_LINKS = {
    '300': 'https://buy.stripe.com/8x2eVc4ITfJ33yS0Vi6Na00',
    '500': 'https://buy.stripe.com/cNifZg8Z91SdedweM86Na01', 
    '1000': 'https://buy.stripe.com/28E00ifnx0O96L4eM86Na02'
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