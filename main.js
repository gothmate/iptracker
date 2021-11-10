const ipBusca = document.getElementById('ip-busca')

function getIP() {
  const ip = document.getElementsByTagName('input')[0].value
  ipBusca.innerText = ip

  const apiRequest = `https://geo.ipify.org/api/v2/country?apiKey=at_Sc05p9p1UIwJ0Si5pE7lVSzaScnkf&ipAddress=${ip}`

  main(apiRequest)
}

function requestGET(url) {
  let request = new XMLHttpRequest()
  request.open('GET', url, false)
  request.send()

  return request.response
}

async function main(apiRequest) {
  const isp = document.getElementById('isp')
  const location = document.getElementById('location')

  let data = requestGET(apiRequest)
  let resposta = await JSON.parse(data)

  location.innerText = `${resposta.location.country}-${resposta.location.region} ${resposta.location.timezone}`
  isp.innerText = resposta.isp

  console.log(resposta)
  return resposta
}
