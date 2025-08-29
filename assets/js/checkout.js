let tripsForm = document.querySelector(".trips-form"),
      tripsCompanyBtn = document.getElementById("tripsCompanyFormBtn"),
      personalName = document.getElementById("personalName"),
      personalName2 = document.getElementById("personalName2"),
      personalName3 = document.getElementById("personalName3"),
      nationalId = document.getElementById("nationalId"),
      City = document.getElementById("City"),
      phoneNumber = document.getElementById("phoneNumber"),
      extraNumber = document.getElementById("extraNumber"),
      tripsFormBtn = document.getElementById("tripsFormBtn");
let valid1 = false,
      valid2 = false,
      valid3 = false,
      valid6 = false;

let nationalId2 = document.getElementById("nationalId2"),
      methodPayment1 = document.getElementById("methodPayment1"),
      methodPayment2 = document.getElementById("methodPayment2"),
      trans = document.getElementsByName("trans"),
      City2 = document.getElementById("City2"),
      phoneNumber2 = document.getElementById("phoneNumber2"),
      extraNumber2 = document.getElementById("extraNumber2"),
      nationalId3 = document.getElementById("nationalId3"),
      City3 = document.getElementById("City3"),
      phoneNumber3 = document.getElementById("phoneNumber3"),
      extraNumber3 = document.getElementById("extraNumber3"),
      cardNumber = document.getElementById("cardNumber"),
      exp = document.querySelector(".exp"),
      month = document.getElementById("month"),
      year = document.getElementById("year"),
      cvv = document.getElementById("cvv"),
      payForm = document.querySelector(".pay-by-visa"),
      payForm2 = document.querySelector(".pay-by-trans"),
      payBtn = document.getElementById("payBtn"),
      pay2Btn = document.getElementById("pay2Btn"),
      pay2 = document.getElementById("pay2"),
      acountTransferName = document.getElementById("name"),
      imageTrans = document.getElementById("imageTrans");

let installmentBy = document.getElementById("installmentBy");
let installmentBy2 = document.getElementById("installmentBy2");
let installmentBy3 = document.getElementById("installmentBy3");
let firstPayment = document.getElementById("firstPayment");
let firstPayment2 = document.getElementById("firstPayment2");
let monthlyPayment2 = document.getElementById("monthlyPayment2");
let monthlyPayment3 = document.getElementById("monthlyPayment3");
let monthlyPayment = document.getElementById("monthlyPayment");
let residual = document.getElementById("residual");
let tableMonthlyPayment = document.getElementById("tablePayment")
let installmentForm = document.getElementById("installmentForm")


function stopForm(event) {
      event.preventDefault();
}

let setSuccess = (ele) => {
      let parent = ele.parentElement;
      let error = parent.querySelector(".errorMassege")
      error.innerHTML = ""

      ele.classList.add("success")
      ele.classList.remove("error")
}

let setError = (ele, errorMa) => {
      let parent = ele.parentElement;
      let error = parent.querySelector(".errorMassege")
      error.innerHTML = errorMa

      ele.classList.remove("success")
      ele.classList.add("error")
}




let total = +(document.querySelector(".total").innerHTML);
finalTotal.innerHTML = total;

let couponValid = false;
let couponCode = document.getElementById("couponCode");
let couponBtn = document.getElementById("couponBtn");

let couponCodeCheck = couponCode.onchange = () => {
      if (couponCode.value.trim() == "") {
            setError(couponCode, "من فضلك أدخل الرمز")
            couponValid = false;
      } else {
            setSuccess(couponCode)
            couponValid = true;
      }
}

couponBtn.onclick = () => {
      couponCodeCheck()
      if (couponValid) {
            Swal.fire({
                  position: "top-start",
                  icon: "success",
                  title: "مبروك، لقد حصلت علي الخصم",
                  showConfirmButton: false,
                  timer: 1500
            });
      }
}

function openCoupon() {
      document.querySelector('.coupon').classList.toggle('active');
}

function openCartSummry() {
      document.querySelector('.cart-summry').classList.toggle('active');
}



let personalNameCheck = personalName.onchange = () => {
      if (personalName.value.trim() == "") {
            setError(personalName, "من فضلك أدخل اسم الدولة")
            valid1 = false
      } else {
            setSuccess(personalName)
            valid1 = true
      }
}

let nationalIdCheck = nationalId.onchange = () => {
      if (nationalId.value.trim() == "") {
            setError(nationalId, "من فضلك أدخل رقم الهوية")
            valid2 = false
      } else if (nationalId.value.trim().length < 5) {
            setError(nationalId, "البيانات المدخلة خطأ (تحتوي الهوية علي 5 أرقام)")
            valid2 = false
      } else {
            setSuccess(nationalId)
            valid2 = true
      }
}

let CityCheck = City.onchange = () => {
      if (City.value.trim() == "") {
            setError(City, "من فضلك أدخل اسم المدينة")
            valid3 = false
      } else {
            setSuccess(City)
            valid3 = true
      }
}

let phoneNumberCheck = phoneNumber.onchange = () => {
      if (phoneNumber.value.trim() == "") {
            setError(phoneNumber, "من فضلك أدخل رقم الهاتف")
            valid6 = false
      } else {
            setSuccess(phoneNumber)
            valid6 = true
      }
}

tripsFormBtn.onclick = () => {
      personalNameCheck()
      nationalIdCheck()
      CityCheck()
      phoneNumberCheck()

      if (valid1 && valid2 && valid3  && valid6) {
            document.querySelector(".trips").classList.remove("active");
            document.querySelector(".trips-content").classList.remove("active");
            document.querySelector(".trips-company").classList.add("active");
            document.querySelector(".contetn-trips-company").classList.add("active");
      }
}

tripsCompanyBtn.onclick = () => {
      document.querySelector(".contetn-trips-company").classList.remove("active")
      document.querySelector(".trips-company").classList.remove("active")
      document.querySelector(".pay").classList.add("active");
      document.querySelector(".pay-content").classList.add("active")
}

tripsForm.onchange = () => {
      if (valid1 && valid2 && valid3 && valid6) {
            tripsFormBtn.classList.add("active")
      } else {
            tripsFormBtn.classList.remove("active")
      };

      personalName2.value = personalName.value;
      personalName3.value = personalName.value;
      nationalId2.value = nationalId.value;
      City2.value = City.value;
      nationalId3.value = nationalId.value;
      City3.value = City.value;
      phoneNumber3.value = phoneNumber.value;
}
let valid7 = false,
      valid8 = false,
      valid9 = false,
      valid10 = false;

let cardNumberCheck = cardNumber.onchange = () => {
      if (cardNumber.value.trim() == "") {
            setError(cardNumber, "رقم البطاقة مطلوب")
            valid7 = false;
      } else if (cardNumber.value.trim().length != 16) {
            setError(cardNumber, "البيانات المدخلة خطأ (تحتوي البطاقة علي 16 رقم)")
            valid7 = false;
      } else {
            setSuccess(cardNumber);
            valid7 = true;
      }
}

let monthCheck = month.onchange = () => {
      if (month.value.trim() == "") {
            valid8 = false;
            exp.classList.add("error")
            exp.classList.remove("success")
      } else if (month.value.trim().length > 2 || month.value.trim().length <= 0) {
            exp.classList.add("error")
            exp.classList.remove("success")
            valid8 = false;
      } else {
            exp.classList.add("success")
            exp.classList.remove("error")
            valid8 = true;
      }
}

let yearCheck = year.onchange = () => {
      if (year.value.trim() == "") {
            valid9 = false;
            exp.classList.add("error")
            exp.classList.remove("success")
      } else if (year.value.trim().length > 4 || year.value.trim().length < 0) {
            exp.classList.add("error")
            exp.classList.remove("success")
            valid9 = false;
      } else {
            exp.classList.add("success")
            exp.classList.remove("error")
            valid9 = true;
      }
}

let cvvCheck = cvv.onchange = () => {
      if (cvv.value.trim() == "") {
            setError(cvv, "هذا الحقل مطلوب")
            valid10 = false;
      } else if (cvv.value.trim().length != 3) {
            setError(cvv, "البيانات المدخلة خطأ (يتكون من 3 أرقام)")
            valid10 = false;
      } else {
            setSuccess(cvv);
            valid10 = true;
      }
}

payForm.onsubmit = (e) => {
      if (!(valid1 && valid2 && valid3 && valid6 && valid7 && valid8 && valid9 && valid10)) {
            e.preventDefault()
      }
}

payForm.onchange = () => {
      if (valid7 && valid8 && valid9 && valid10) {
            payBtn.classList.add("active")
      } else {
            payBtn.classList.remove("active")
      }

      for (let i = 0; i < trans.length; i++) {
            if (trans[i].checked) {
                  methodPayment1.value = trans[i].value;
                  break;
            }
      }

      if (installmentBy.value == "نقدا") {
            installmentBy.value = null;
      }

      installmentBy2.value = installmentBy.value;
}

payForm2.onchange = () => {
      for (let i = 0; i < trans.length; i++) {
            if (trans[i].checked) {
                  methodPayment2.value = trans[i].value;
                  break;
            }
      }

      if (installmentBy.value == "نقدا") {
            installmentBy.value = null;
      }

      installmentBy3.value = installmentBy.value;
}

payBtn.onclick = () => {
      cardNumberCheck()
      monthCheck()
      yearCheck()
      cvvCheck()
}

let trnasInputs = document.querySelectorAll("input[name='trans']")
payForm2.style.display = "none"
trnasInputs.forEach((i) => {
      i.onclick = () => {
            if (i.value == "transfare") {
                  payForm.style.display = "none";
                  payForm2.style.display = "block";
            } else {
                  payForm.style.display = "flex";
                  payForm2.style.display = "none";
            }
      }
})
let btn = document.querySelectorAll(".section-title");

btn.forEach((i) => {
      i.onclick = () => {
            let parent = i.parentElement;
            parent.classList.toggle("active");
            let ele = parent.querySelector(".content")
            ele.classList.toggle("active")
      }
})



let nameValid = false;


pay2.addEventListener("submit", (e) => {
      e.preventDefault();
      acountTransferNameCheck();

      if (!(nameValid && valid1 && valid2 && valid3 && valid6)) {
            pay2Btn.classList.remove("active");
      } else {
            pay2Btn.classList.add("active");
            pay2.submit();
      }
});




if (total >= 1000) {
      const defaultOption = document.createElement("option");
      defaultOption.value = "";
      defaultOption.innerHTML = "اختر طريقة التقسيط";
      defaultOption.disabled = true;
      defaultOption.selected = true;
      installmentBy.appendChild(defaultOption);
      monthlyPayment.parentElement.style.display = "none";
      residual.parentElement.style.display = "none";
      firstPayment.parentElement.style.display = "none";
      tableMonthlyPayment.style.display = "none";

      const cashOption = document.createElement("option");
      cashOption.value = "نقدا";
      cashOption.innerHTML = "نقدا";
      installmentBy.appendChild(cashOption);

      for (let i = 1; i <= 24; i++) {
            const option = document.createElement("option");
            option.value = i;
            option.innerHTML = `${i} شهر`;
            installmentBy.appendChild(option);
      }

      function updateInstallment() {
            if (installmentBy.value == "نقدا") {
                  monthlyPayment.parentElement.style.display = "none";
                  residual.parentElement.style.display = "none";
                  firstPayment.parentElement.style.display = "none";
                  tableMonthlyPayment.style.display = "none";
                  return;
            } else {
                  monthlyPayment.parentElement.style.display = "block";
                  residual.parentElement.style.display = "block";
                  firstPayment.parentElement.style.display = "block";
                  tableMonthlyPayment.style.display = "table";
            }

            const today = new Date();
            let year = today.getFullYear();
            let month = today.getMonth() + 1;
            let day = today.getDate();

            const firstPay = +firstPayment.value || 0;
            const residualAmount = total - firstPay;
            residual.value = residualAmount;

            const monthsCount = parseInt(installmentBy.value);
            const monthlyInstallment = residualAmount / monthsCount;

            monthlyPayment.value = `${monthlyInstallment.toFixed(2)} ر.س`;
            firstPayment2.value = firstPayment.value;
            monthlyPayment2.value = monthlyPayment.value;

            let table = "";
            for (let i = 1; i <= monthsCount; i++) {
                  month++;
                  if (month > 12) {
                        month = 1;
                        year++;
                  }

                  let date = `${day} / ${month} / ${year}`;
                  table += `
                        <tr style="border-bottom: 1px solid #ccc;">
                              <td>${i}</td>
                              <td dir="ltr">${date}</td>
                              <td>${monthlyInstallment.toFixed(2)} ر.س</td>
                        </tr>
                  `;
            }
            document.getElementById("tbody").innerHTML = table;
      }

      installmentForm.onchange = updateInstallment;

      firstPayment.oninput = updateInstallment;

} else {
      const cashOption = document.createElement("option");
      cashOption.value = "نقدا";
      cashOption.innerHTML = "نقدا";
      installmentBy.appendChild(cashOption);
      monthlyPayment.parentElement.style.display = "none";
      residual.parentElement.style.display = "none";
      firstPayment.parentElement.style.display = "none";
      tableMonthlyPayment.style.display = "none";
}



let closeAlert = document.getElementById("closeAlert");
let copyLink = document.getElementById("copyLink");

closeAlert.onclick = () => {
      let parent = closeAlert.parentElement.style.display = "none";
}

function copyURL() {
      var currentURL = window.location.href;

      var tempInput = document.createElement("input");
      tempInput.value = currentURL;
      document.body.appendChild(tempInput);

      tempInput.select();
      document.execCommand("copy");

      document.body.removeChild(tempInput);

      copyLink.innerHTML = "تم نسخ الرابط"
}



