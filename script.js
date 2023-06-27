const a = document.getElementById('a')
const b = document.getElementById('b')
const c = document.getElementById('c')
const x = document.getElementById('x')

c.addEventListener('input', () => {
    const res = Number(c.value) * Number(b.value)
    x.value = res / Number(a.value)
})