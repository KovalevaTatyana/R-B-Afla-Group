let formLabels = document.querySelectorAll(".form__indent_label"),
    totalPrice = document.querySelector("#form__sum_total-price"),
    selectedPlan = document.querySelector("#form__inner_selected-plan"),
    amountLicense = document.querySelector("#amount-license");
for (let e = 0; e < formLabels.length; e++)
    formLabels[e].onchange = function () {
        let e = this.querySelector(".form__text-license"),
            t = this.querySelector(".form__subtext_price");
        function n() {
            totalPrice.textContent = t.textContent * amountLicense[amountLicense.selectedIndex].textContent;
        }
        (selectedPlan.textContent = e.textContent), n(), (amountLicense.onchange = n);
    };
