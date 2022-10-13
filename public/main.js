document.querySelector("#keywordButton").addEventListener('click', getMemberInfo)

function getMemberInfo() {
  const member = document.querySelector('#keyword').value.toLowerCase()
  const ul = document.querySelector('ul')

  const url = `http://localhost:8000/api/${member}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector("p").innerHTML = ""
        document.querySelector("ul").innerHTML = ""

          for (const obj in data) {
            const li = document.createElement('li')

            li.innerHTML = `${obj}: ${data[obj]}`

            document.querySelector('ul').appendChild(li)
          }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });


}

