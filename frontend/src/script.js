const loginButton = document.getElementById('loginButton');
        const loginModal = document.getElementById('loginModal');
        const closeModal = document.getElementById('closeModal');

        loginButton.addEventListener('click', () => {
            loginModal.classList.remove('hidden');
        });

        closeModal.addEventListener('click', () => {
            loginModal.classList.add('hidden');
        });

        window.addEventListener('click', (event) => {
            if (event.target === loginModal) {
                loginModal.classList.add('hidden');
            }
        });