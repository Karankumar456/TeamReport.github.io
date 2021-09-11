//get signup page data & transfer data in local storage
function signup() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  localStorage.setItem(
    email,
    JSON.stringify({
      Sname: name,
      Semail: email,
      Spassword: password,
    })
  );

  if (name == "" || email == "" || password == "") {
    alert("please fill required feild");
  } else {
    location.href = "../index.html";
  }
}
//LOGIN FUNCTION

function login() {
  //get login page data
  let Lemail = document.getElementById("Lemail").value;
  let Lpassword = document.getElementById("Lpassword").value;
  //fill req field condition
  if (Lemail == "" || Lpassword == "") {
    alert("please fill all required feild");
  } else {
    let getdata = localStorage.getItem(Lemail);
    if (getdata == null) {
      alert("Please Create an account first");
      return true;
    }
    localStorage.setItem(
      "Loginuser",
      JSON.stringify({
        person1: Lemail,
      })
    );
    let convertGetData = JSON.parse(getdata);
    //get signup email and pass
    let Semail = convertGetData.Semail;
    let Spassword = convertGetData.Spassword;

    // compare local storage signup value and login value
    if (Lemail === Semail && Lpassword === Spassword) {
      location.href = "./HTML/home.html";
    } else {
      alert("incorrect Email or Password");
    }
  }
}

//LOGOUT FUNCTION
function logout() {
  location.href = "../index.html";
}

//HOME PAGE CREATE TEAM

//show more slots
function showmore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("showmore");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = 'More Slots <i id="showmoreicon"class="fa fa-chevron-circle-down" aria-hidden="true"></i>'; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = 'Less Slots <i class="fa fa-chevron-circle-up" aria-hidden="true"></i> '; 
    moreText.style.display = "inline";
  }
}
 function teamdetail() {
  //get team memeber detail
  let AdminEmail=document.getElementById("Adminemail").value;
  let Tname = document.getElementById("Tname").value;
  let TmemeberEmail1 = document.getElementById("TmemeberEmail1").value;
//multiple email
 let TmemeberEmail2 = document.getElementById("TmemeberEmail2").value;
 let TmemeberEmail3 = document.getElementById("TmemeberEmail3").value;
  
  if (Tname == "" || TmemeberEmail1 == "" || AdminEmail == "") {
    alert("please fill required feild");
  } else {
    //set data in local storage;
    localStorage.setItem(
      Tname,
      JSON.stringify({
        adminemail:AdminEmail,
        teamName: Tname,
        MemeberEmail1: TmemeberEmail1,
        MemeberEmail2: TmemeberEmail2,
        MemeberEmail3: TmemeberEmail3,
      }));
  }
  //clear input filled
  document.getElementById("Tname").value = "";
  document.getElementById("TmemeberEmail1").value = "";
  document.getElementById("TmemeberEmail2").value= "";
  document.getElementById("TmemeberEmail3").value= "";
  document.getElementById("Adminemail").value="";
  location.reload();
  return false;

}
