// Privacy alert

function checkPrivacyAlert() {
  const privacyAlert = localStorage.getItem('privacy-alert')
  const el = document.querySelector('.privacy-alert')

  if (privacyAlert === 'agree')
    el.style.display = 'none'
  else
    el.style.display = 'block'
}

window.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.privacy-alert button')

  btn.addEventListener('click', (e) => {
    localStorage.setItem('privacy-alert', 'agree')
    checkPrivacyAlert()
  })

  checkPrivacyAlert()
})

