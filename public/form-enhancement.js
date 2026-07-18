(() => {
  const menuButton = document.querySelector('.menu-button');
  const nav = document.querySelector('#primary-nav');
  if (menuButton && nav) menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('open', !open);
  });

  for (const form of document.querySelectorAll('.governed-form')) {
    const status = form.querySelector('.form-status');
    form.addEventListener('submit', async (event) => {
      if (!window.fetch || !form.reportValidity()) return;
      event.preventDefault();
      const button = form.querySelector('button[type="submit"]');
      button.disabled = true;
      status.className = 'form-status';
      status.textContent = 'Submitting securely…';
      try {
        const response = await fetch(form.action, {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: new FormData(form),
          credentials: 'same-origin'
        });
        const data = await response.json().catch(() => ({}));
        if (!response.ok || !data.ok) throw new Error(data.message || 'Submission failed.');
        status.classList.add('success');
        status.textContent = `Your request was received for review. Reference: ${data.reference}`;
        form.reset();
      } catch (error) {
        status.classList.add('error');
        status.textContent = error instanceof Error ? error.message : 'We could not record your request. Please try once more.';
      } finally { button.disabled = false; }
    });
  }
})();
