const API = "https://api.npoint.io/cbf47d996930ba758a04";

//Comparer Function
function GetSortOrder(prop) {
    return function (a, b) {
        if (a[prop] > b[prop]) {
            return 1;
        } else if (a[prop] < b[prop]) {
            return -1;
        }
        return 0;
    };
}

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
            data.sort(GetSortOrder("nome"));
            $.each(data, function (i, option) {
                $("#bairro").append($("<option/>").attr("value", option.id).text(option.nome));
            });
        });
    });
});

$(document).ready(function () {
    $("#phone").keypress(function (e) {
        if (e.keyCode != 8 && e.keyCode != 46) {
            var text = this.value;
            if (text.length == 0) {
                this.value = text + "(";
            }
            if (text.length == 3) {
                this.value = text + ")";
            }
        }
    });
});
