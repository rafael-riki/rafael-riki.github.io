const form = document.getElementById('name')
const sendMail = document.getElementById('emailA')
function handleSendEmail(event) {
event.preventDefault()
const fd = new FormData(this)
handleSendEmail.setAttribute(
    'href'
    `mailTo:rafaelmosquera911@gmail.com?name=${fd.get('name')}body=${fd.get('name')}`
)

sendMail.click
}
form.addEventListener('submit', handleSendEmail)