function tabuada() {
    let num = document.querySelector('#txtn')
    let tab = document.querySelector('#seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número')
    } else {
        tab.innerHTML = ''
        let n = Number(num.value)
        for (let c = 1; c <= 10; c += 1) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }

}