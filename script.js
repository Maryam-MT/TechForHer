
function handleContactForm(){
    const contactForm = document.getElementById('contactForm');
    if (contactForm){
        console.log('contact form found');
        contactForm.addEventListener('submit', function(e){
            e.preventDefault();
            contactForm.submit();
            contactForm.reset();
        });
    }
}
