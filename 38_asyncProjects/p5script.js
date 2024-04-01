
const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
    <div class='color'>
        <table>
            <tr>
                <th>key</th>
                <th>keyCode</th>
                <th>Code</th>
                <th>ctrlKey</th>
                </tr>
            <tr>
                <td>${e.key == ' ' ? 'SPACE' : e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
                <td>${e.ctrlKey}</td>
                </tr>
            </table>
    </div>
    `
})
