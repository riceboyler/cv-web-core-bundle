const load = (src: string) =>
    new Promise((resolve, reject) => {
        const script = document.createElement("script")
        script.src = src
        script.defer = true
        script.addEventListener("load", resolve)
        script.addEventListener("error", reject)
        document.body.appendChild(script)
    })

export default load
