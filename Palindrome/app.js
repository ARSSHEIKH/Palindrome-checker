function chekingPalindrome(str1){
    let ind = 0;
    let mid1 = parseInt(str.length / 2)
    let mid2;
    var chArray = str1;
    // mainInput = ""
    // document.write(mainInput);
    if(mid1 == 0){
        document.write("<div id='result'><h3>Yes</h3></div>")
        return;
    }
    if(mid1 != str.length / 2){
    
        mid2 = mid1+1
        while(ind < mid2){
            if(mid2 == ind){
                break;
            }
            if(str.charAt(ind) == str.charAt(str.length-(ind+1))){
                ind++;
                check = true;
            }
            else{
                document.write("<div id='result'><h3>No</h3></div>")
                break;
            }
            if(mid1 == ind){
                if(check == true){
                    document.write("<div id='result'><h3>Yes</h3></div>")
                }
                break;
            }       
            if(mid2 == ind+1){
                if(check == true){
                    document.write("<div id='result'><h3>Yes</h3></div>")
                }
                break;
            }
        }
    }
    else{
        while(ind < mid1){
            if(mid1 == ind){
                break;
            }
            if(str.charAt(ind) == str.charAt(str.length-(ind+1))){
                ind++;
                check = true;
            }
            else{
                document.write("<div id='result'><h3>No</h3></div>")
                break;
            }
            if(mid1 == ind){
                if(check == true){
                    document.write("<div id='result'><h3>Yes</h3></div>")
                }
                break;
            }
        }
    }
    
}

// var str = prompt("Enter string (to check Palindrome or not)");
var allelments;
allelments = document.getElementById('main-container').innerHTML;

function mainFunc(){
    str = document.getElementById('str').value;
    chekingPalindrome(str);

    var linkBack = document.createElement("a");
    linkBack.textContent = "Go Back";
    linkBack.style.cursor ="pointer";
    // linkBack.setAttribute("onclick", "goBack()")
    linkBack.setAttribute("href", "index.html")

    document.getElementById("result").appendChild(linkBack);

}

// function goBack(){
//     document.getElementById("result").
//     document.write(allelments);
// }
