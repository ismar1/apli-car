document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#btn').addEventListener('click', function () {
    let apli = document.querySelector('#apli').value
    
    if (apli)
      document.querySelector('#apliConverted').innerHTML = apli.replace(/; /g, '<br>')
  })

  document.querySelector('#clear').addEventListener('click', function () {
    document.querySelector('#apli').value = ''
  })
})
