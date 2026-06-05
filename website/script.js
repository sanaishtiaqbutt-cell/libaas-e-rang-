
document.addEventListener('DOMContentLoaded', () => {
    // Show the popup after 3 seconds
    setTimeout(() => {
        document.getElementById('popup').style.display = 'flex';
    }, 3000);

    // Dropdown menu functionality
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        const dropdownContent = dropdown.querySelector('.dropdown-content');

        link.addEventListener('click', (e) => {
            e.preventDefault();

            dropdowns.forEach(d => {
                if (d !== dropdown) {
                    const openContent = d.querySelector('.dropdown-content');
                    if (openContent) openContent.style.display = 'none';
                }
            });

            dropdownContent.style.display =
                dropdownContent.style.display === 'block' ? 'none' : 'block';
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            dropdowns.forEach(dropdown => {
                const dropdownContent = dropdown.querySelector('.dropdown-content');
                if (dropdownContent) dropdownContent.style.display = 'none';
            });
        }
    });

    // Add functionality for barcode click
    const barcodeElement = document.querySelector('.barcode');
    if (barcodeElement) {
        barcodeElement.addEventListener('click', () => {
            alert('Barcode clicked! Implement your functionality here.');
        });
    }

    // Remove the logo hover effect that changes the text
    const logoElement = document.querySelector('.logo');
    if (logoElement) {
        // Ensure the logo stays visible and no text change happens
        logoElement.addEventListener('mouseover', () => {
            // No text change here
        });

        logoElement.addEventListener('mouseout', () => {
            // No text change here either
        });
    }
});

// Function to manually show the popup
function showPopup() {
    document.getElementById('popup').style.display = 'flex';
}

// Function to close the popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
