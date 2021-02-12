var text="cloUd naTive computinG"
text=text.toLowerCase();
word=text.split(" ");

for (i = 0; i <word.length; i++) {
    word[i] = word[i][0].toUpperCase() + word[i].substr(1);
   
}
word=word.join(" ");
alert(word);