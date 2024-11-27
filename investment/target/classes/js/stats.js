google.charts.load("current", {packages: ["corechart"]});
google.charts.setOnLoadCallback(drawAppStatuses);

function drawAppStatuses() {
    let res = [['Статус', 'Количество']];

    for (let i = 0; i < appStatusesNames.length; i++) {
        res.push([appStatusesNames[i], appStatusesValues[i]]);
    }

    var data = google.visualization.arrayToDataTable(res);

    var options = {
        title: 'Заявки по статусам'
    };

    var chart = new google.visualization.PieChart(document.getElementById('drawAppStatuses'));

    chart.draw(data, options);
}

// Формирование PDF отчета:
// На 07 строке файла stat.html добавить <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.min.js"></script>;
// На 17 строке файла stat.html в </main добавить id="page-content"
// На 38 строке файла stat.html создана кнопка <button class="dowload-button" onclick="downloadPDF()">Download as PDF</button>
function downloadPDF() {
    var element = document.getElementById('stat-page');
    html2pdf()
        .from(element)
        .save('applic_stat.pdf')
}