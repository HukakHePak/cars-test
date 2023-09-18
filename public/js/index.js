async function request(url) {
  try {
    const response = await fetch(url)
      .then((d) => d.text())
      .catch(console.error)

    return JSON.parse(response)
  } catch (e) {
    console.error(e)
    return null
  }
}

;(async () => {
  let programs = (await request("https://note-lawn.ru/help")) || (await request("http://localhost:5000/help"))

  if (programs) {
    const codeSection = document.querySelector(".commands")
    const commandTemplate = document.querySelector(".command-template")

    const createLine = (com, desc) => {
      const command = commandTemplate.content.cloneNode(true)
      const spans = command.querySelectorAll("span")

      spans[0].innerText = com
      spans[1].innerText = desc

      return command
    }

    const commands = document.createElement("ul")

    programs.forEach((item) => {
      const command = createLine(item.name, item.description || "")

      const parameters = command.querySelector("ul")

      item.parameters?.forEach((par) => {
        parameters.appendChild(createLine(`${par.name}${par.short ? `, -${par.short}` : ""}`, par.description || ""))
      })

      commands.appendChild(command)
    })

    codeSection.appendChild(commands)
  }

  const os = window.navigator.userAgentData?.platform
  
  if(os !== "Windows") {
      const button = document.querySelector(".download-btn")
      
      button.setAttribute('href', 'https://note-lawn.ru/app/setup')
  }
})()
