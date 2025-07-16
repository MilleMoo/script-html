document.addEventListener("DOMContentLoaded", (() => {
    const form = document.getElementById("dropForm");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const errMsg = document.getElementById("error");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        errMsg.textContent = "";

        if(username.value.trim() === "" || email.value.trim() === "" || password.value.trim() === ""){
            errMsg.textContent = "กรุณากรอกข้อมูลให้ครบทุกช่อง";
            return;
        }

        if(password.value.length < 6){
            errMsg.textContent = "กรอกรหัสผ่านอย่างน้อย 6 ตัว";
            return;
        }

        if(!validatePassword(password.value)){
            errMsg.textContent = "รหัสผ่านสามารถใช้ได้เพียง A-Z, a-z และ 0-9 เท่านั้น";
            return;
        }
        alert("ถอนรายวิชา web service สำเร็จ")
    });

    function validatePassword(password){
        const reg = /^[a-zA-Z0-9]+$/
        return reg.test(password)
    }
}))