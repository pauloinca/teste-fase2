const API = "https://api.npoint.io/cbf47d996930ba758a04";

$(document).ready(function () {
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function () {
        "use strict";

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll(".needs-validation");

        // Loop over them and prevent submission
        Array.prototype.slice.call(forms).forEach(function (form) {
            form.addEventListener(
                "submit",
                function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault();
                        event.stopPropagation();
                    }

                    form.classList.add("was-validated");
                },
                false
            );
        });
    })();

    $(function populateBairroDropdown() {
        $.getJSON(API, function (data) {
            $.each(data, function (i, option) {
                $("#bairro").append($("<option/>").attr("value", option.id).text(option.nome));
            });
        });
    });
});
