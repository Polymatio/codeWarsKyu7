// Create a function that list a likes and dislikes
// Use a for loop to have a condition if the array have no likes or dislikes

function  likeOrDislike(button) {
    let blank = Nothing;
    for(let i = 0; i < button.length; i++) {
        if(button[i] == blank) {
            blank = 'Nothing'
        }else {
            blank = button[i]
        }
    }
    return blank;
}