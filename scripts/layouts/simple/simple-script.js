{/* <script> */}
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
$(document).ready(function() {

    // Run the function when a new page is loaded
    Qualtrics.SurveyEngine.addOnload(function() {
        function removeSliderProgressContainers() {
            while ($('.slider-progress-container').length > 0) {
                $('.slider-progress-container').each(function() {
                    $(this).remove(); // Safely remove the container if it exists
                });
            }
        }
        removeSliderProgressContainers();
    });

});
{/* </script> */}