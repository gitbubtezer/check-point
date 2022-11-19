//Bài 1: Viết một function có tên là student cóp dạng như sau student(name, age, address), 
//khi chạy function này trả về một bộ thông tin của học viên ở dạng object; bộ thông tin sẽ hiển thị 
//ở cửa sổ console với câu lệnh console.log.


function student(name, age, address) {
    data = [name, age, address];
    console.log(data);
}

//student("Son", 13, "Quang Ninh")

//Bài 2: Cho một mảng như sau: var smartPhones = [ 
//    { name: 'iphone', price: 649 }, 
//    { name: 'Galaxy S6', price: 576 }, 
//    { name: 'Galaxy Note 5', price: 489 } 
//];
//viết hàm khi để trả về giá của các sản phẩm.

var smartPhones = [
    { name: 'iphone', price: 649 },
    { name: 'Galaxy S6', price: 576 },
    { name: 'Galaxy Note 5', price: 489 }
];

function getPrice() {
    price_data = []
    for (var i = 0; i < smartPhones.length; i++) {
        price_data.push(smartPhones[i].price)
    }
    console.log(price_data);
}

//getPrice();

// chuyen sang dang es6

const foo = (x, y, z) => { console.log(x, y, z); }

const foo_1 = () => {
    alert("Hello")
}

const foo_2 = (a, b) => {
    let m = a + b * 100
    return m
}

//Bài 4: Sử dụng HTML và CSS,... để tạo form Sign In tương tự như sau:

//Bài 5: Tự tạo một array chứa thông tin về 3 tài khoản có các trường thông tin:
//	Email
//	Phone
//	Password
//	UserName
//Lưu trữ array được tạo vào Local Storage. (Chú ý: học viên chủ động thiết kế array có tính chất đa dụng, không chỉ sử dụng để đăng nhập)

let account = [{
        email: 'Son',
        phone: 123456,
        password: 24,
        username: 'Son',
    },
    {
        name: 'Hung',
        phone: 234567,
        password: 24,
        username: 'Hung',
    },
    {
        name: 'Thanh',
        phone: 345678,
        password: 12,
        username: 'Thanh',
    },
]

localStorage.setItem("account", JSON.stringify(account))

let Data_account = JSON.parse(localStorage.getItem("account"))

const formlog = document.getElementById("login-form");
const BtnLog = document.getElementById("login-form-submit");
const sign_up_form = document.getElementById("su_form");
const sign_up_log = document.getElementById("sign_up_btn");

BtnLog.addEventListener("click", (e) => {
    e.preventDefault()
    const email = formlog.email.value;
    const password = formlog.password.value;

    for (i = 0; i <= account.length; i++) {
        if (email === account[i][0] && password === account[i][1]) {
            alert("You have successfully logged in.");
            window.location.replace("/Back-2-School/index_logged.html");
            //location.reload();
        }
    }
})