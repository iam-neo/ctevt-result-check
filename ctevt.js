        document.getElementById("urlForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent the form from submitting normally

            const prefix = document.getElementById("prefix").value;
            const additionalPrefix = document.getElementById("additionalPrefix").value;
            const segment1 = document.getElementById("segment1").value;
            const segment2 = document.getElementById("segment2").value;

            // Combine the segments with the selected prefixes to form the new URL
            const newURL = `${prefix}/${additionalPrefix}/${segment1}/${segment2}`;

            // Redirect to the new URL
            window.location.href = newURL;
        });