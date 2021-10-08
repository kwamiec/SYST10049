
function myFunction() {

    // taking the values from the HTML using their ID
    var lName = document.getElementById('lname').value;
    var fName = document.getElementById('fname').value;
    var studentNum = document.getElementById('studentnum').value;
  
    alert('Student: '+ fName +' ' +lName +' ' +studentNum);
    
  };