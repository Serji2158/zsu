// (() => {
// 	const menuBtnRef = document.querySelector('[data-menu-button]')
// 	const mobileMenuRef = document.querySelector('[data-menu]')

// 	menuBtnRef.addEventListener('click', () => {
// 		const expanded =
// 			menuBtnRef.getAttribute('aria-expanded') === 'true' || false

// 		menuBtnRef.classList.toggle('is-hidden')
// 		menuBtnRef.setAttribute('aria-expanded', !expanded)

// 		mobileMenuRef.classList.toggle('is-hidden')
// 	})
// })()
(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-backdrop]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
})();

