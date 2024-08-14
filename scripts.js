<script>
document.addEventListener('DOMContentLoaded', function() {
    // URL of your PDF file
    var url = 'yu_chen_lin_cv.pdf';

    // Loading PDF.js library
    var pdfjsLib = window['pdfjs-dist/build/pdf'];
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://github.com/mozilla/pdf.js/blob/master/src/pdf.worker.js';

    // Asynchronous download of the PDF
    var loadingTask = pdfjsLib.getDocument(url);
    loadingTask.promise.then(function(pdf) {
        console.log('PDF loaded');

        // Fetch the first page
        pdf.getPage(1).then(function(page) {
            console.log('Page loaded');

            var scale = 1.5;
            var viewport = page.getViewport({scale: scale});

            // Prepare canvas using PDF page dimensions
            var canvas = document.getElementById('pdf-canvas');
            var context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            // Render PDF page into canvas context
            var renderContext = {
                canvasContext: context,
                viewport: viewport
            };
            var renderTask = page.render(renderContext);
            renderTask.promise.then(function() {
                console.log('Page rendered');
            });
        });
    }, function (reason) {
        // PDF loading error
        console.error(reason);
    });
});
</script>