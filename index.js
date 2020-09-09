const https = require('https')

const dataS = {
    value1: 1,
    value2: 2,
  };
const data = JSON.stringify(dataS);
console.log(data);
const options = {
  hostname: '5299110-sb1.extforms.netsuite.com',
  path: '/app/site/hosting/scriptlet.nl?script=1050&deploy=1&compid=5299110_SB1&h=58555993adcefd0458a4',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'User-Agent': 'Mozilla/5.0'
  }
}

const req = https.request(options, res => {
  console.log(res.statusCode);
  res.on('data', d => {
    process.stdout.write(d)
  })
})
req.on('error', error => {
  console.error(error)
})

req.write(data)
req.end()