// const main = () => {
//   document.querySelector('h1').textContent += '?'
// }
//
// document.addEventListener('DOMContentLoaded', main)
var $

$('#btn').click(function () {
  $.getJSON('http://random.cat/meow')
    .done(function (data) {
      $('#catRandomImage').attr('src', data.file)
      console.log(data.file)
    })
})

var axios

var url = 'https://opentdb.com/api.php?amount=1'
axios.get(url)
  .then(function (res) {
    console.log(res.data.results[0].question)
  })
  .catch(function () {
    console.log('ERROR')
  })

var url1 = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes'

var xhrbtn = document.querySelector('#xhr')
var fetchbtn = document.querySelector('#fetch')
var jquerybtn = document.querySelector('#jquery')
var axiosbtn = document.querySelector('#axios')
var display = document.querySelector('#quote')

var XMLHttpRequest

xhrbtn.addEventListener('click', function () {
  var XHR = new XMLHttpRequest()
  XHR.onreadystatechange = function () {
    if (XHR.readyState === 4 && XHR.status === 200) {
      var quote = JSON.parse(XHR.responseText)[0]
      console.log(quote)
      display.innerText = quote
    }
  }
  XHR.open('GET', url1)
  XHR.send()
})

var fetch
var alert

fetchbtn.addEventListener('click', function () {
  fetch(url1)
    .then(function (req) {
      req.json().then(function (data) {
        display.innerText = data[0]
      })
    })
    .catch(function () {
      alert('ERROR')
    })
})

$('#jquery').click(function () {
  $.getJSON(url1)
    .done(function (data) {
      console.log(data[0])
      $('#quote').text(data[0])
    })
})

axiosbtn.addEventListener('click', function () {
  axios.get(url1)
    .then(function (res) {
      display.innerText = res.data[0]
    })
})
