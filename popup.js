<<<<<<< Updated upstream
window.onload = function() {

  CountDownTimer('1/17/2015 10:26 AM', 'countdown');
  CountDownTimer('12/18/2015 12:00 AM', 'newcountdown');

  function CountDownTimer(dt, id)
  {
      var end = new Date(dt);

      var _second = 1000;
      var _minute = _second * 60;
      var _hour = _minute * 60;
      var _day = _hour * 24;
      var timer;
      var id = 'timer';

      function showRemaining() {
          var now = new Date();
          var distance = end - now;
          if (distance < 0) {

              clearInterval(timer);
              document.getElementById(id).innerHTML = 'EXPIRED!';

              return;
          }
          var days = Math.floor(distance / _day);
          var hours = Math.floor((distance % _day) / _hour);
          var minutes = Math.floor((distance % _hour) / _minute);
          var seconds = Math.floor((distance % _minute) / _second);

          document.getElementById(id).innerHTML = days + ' days - ';
          document.getElementById(id).innerHTML += hours + ' hrs - ';
          document.getElementById(id).innerHTML += minutes + ' mins - ';
          document.getElementById(id).innerHTML += seconds + ' secs';
      }

      timer = setInterval(showRemaining, 1000);
  }

  var quotation=new Array()

  quotation[0] = "The language Greedo speaks is a South American language called Quechua.";
  quotation[1] = "Yoda is the Sanskrit word for 'warrior'.";
  quotation[2] = "The only characters to appear in all 6 films are C3PO and R2D2.";
  quotation[3] = "One of the asteroids in the famous asteroid scene in The Empire Strikes Back is actually a potato.";
  quotation[4] = "in the first draft of Star Wars, the main character was named Luke Starkiller.";
  quotation[5] = "The 'Wilhelm Scream' is heard in every Star Wars movie.";
  quotation[6] = "Harrison Ford ad-libbed the line, 'i know,' in response to Leia's, 'I love you.'";
  quotation[7] = "R2D2's name comes from the term 'REEL 2, DIALOG 2'.";
  quotation[8] = "A total of 19 different plamets are shown throughout the films";
  quotation[9] = "'Return of the Jedi' was originally titled 'Revenge of the Jedi'.";
  quotation[10] = "Master Mace Windu is the only Jedi to wield a unique colored lightsaber: purple.";
  quotation[11] = "Jabba the Hut was originially meant to be a furry character.";
  quotation[12] = "C3PO had the first line in Episode iV and the last line in Episode iii.";
  quotation[13] = "Attack of the Clones was the first full length feature film to be shot digitally.";
  quotation[14] = "The osund of the TIE Fighter engines is actually the sound of an elephant call mixed with sounds of a car driving on wet pavement.";
  quotation[15] = "Many of the buildings constructed to be used in shots of Tatooine are still standing in Tunisia.";
  quotation[16] = "The Jawa language is based on a sped-up version of the Zulu language.";
  quotation[17] = "The bounty hunter Bossk's clothing is a recycled spacesuit from Doctor Who.";
  quotation[18] = "Yoda's species has never been named.";
  quotation[19] = "Yoda was originally going to played by a monkey carrying a cane and wearing a mask.";
  quotation[20] = " The word 'ewok' is never said out loud in the Star Wars movies.";
  quotation[21] = "Star Wars: Episode i - The Phantom Menace was labelled as 'The Doll House' when it shipped to theaters.";
  quotation[22] = "No physical clone trooper outfits were actually produced for the films. Every clone trooper seen in the Star Wars films was created with CGI.";
  quotation[23] = "The communicator Qui-Gon Jinn uses is actually an altered Gillete Sensor Excel women's razor.";
  quotation[24] = "Samuel L. Jackson claims that the words 'bad motherfucker' were engraved on the lightsaber he used in the Star Wars films.";
  quotation[21] = "The waterfalls cascading around the capital city of Naboo was actually salt.";
  quotation[22] = "Star Wars: Episode ii - Attack of the Clones was labelled as 'Cue Ball' when it shipped to theaters.";
  quotation[23] = "Ahmed Best, the actor that plays Jar Jar Binks, makes an appearance out of costume in the background of one scene.";
  quotation[24] = " George Lucas' daughter Katie Lucas appears as a Twi'lek dancer in Star Wars: Episode II - Attack of the Clones.";
  quotation[25] = "The in-universe name for the genre of music heard during the cantina scene is 'jizz.'";
  quotation[26] = "E.T.'s alien species are part of the Star Wars universe. A delegation of the aliens can be seen in the Galactic Senate.";
  quotation[27] = "A disco version of the Star Wars theme became a No. 1 hit in 1977, and held the spot for two weeks.";
  quotation[28] = "The voice of Yoda was provided by Frank Oz, who is also the voice of the Muppets' Miss Piggy.";
  quotation[29] = "A scuba regulator was used to achieve the sound of Darth Vader's labored breathing.";
  quotation[30] = "It took as many as 10 puppeteers using both hands to operate Jabba the Hutt.";
  quotation[31] = "John Williams won an oscar for the Star Wars score. The music was later named by the AFi as the greatest film score of all time.";
  quotation[32] = "The Chewbacca character is based on George Lucas' dog Indiana. The dog is also the inspiration for the name indiana Jones.";
  quotation[28] = "The Ewok are named after the Miwok, a Native American tribe indigenous to the Redwood forest where the Endor scenes were filmed in Return of the Jedi.";
  quotation[29] = "The Millenium Falcon was inspired by the shape of a hamburger with an olive on the side.";
  //quotation[30] = "";



  var q = quotation.length - 20;
  var whichquotation = Math.round(Math.random()*(q-1));

  var element = document.getElementById('quote');
  console.log(element);

  function showquotation(str){
      element.innerHTML = str;
  }

  var string = quotation[whichquotation];
  showquotation(string);  
}
=======
CountDownTimer('1/17/2015 10:26 AM', 'countdown');
CountDownTimer('12/18/2015 12:00 AM', 'newcountdown');

function CountDownTimer(dt, id)
{
    var end = new Date(dt);

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;
    var id = 'timer';

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById(id).innerHTML = 'EXPIRED!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById(id).innerHTML = days + 'days ';
        document.getElementById(id).innerHTML += hours + 'hrs ';
        document.getElementById(id).innerHTML += minutes + 'mins ';
        document.getElementById(id).innerHTML += seconds + 'secs';
    }

    timer = setInterval(showRemaining, 1000);
}

var quotation=new Array()

quotation[0] = "The language Greedo speaks is a South American language called Quechua.";
quotation[1] = "Yoda is the Sanskrit word for 'warrior'.";
quotation[2] = "The only characters to appear in all 6 films are C3PO and R2D2.";
quotation[3] = "One of the asteroids in the famous asteroid scene in The Empire Strikes Back is actually a potato.";
quotation[4] = "In the first draft of Star Wars, the main character was named Luke Starkiller.";
quotation[5] = "The 'Wilhelm Scream' is heard in every Star Wars movie.";
quotation[6] = "Harrison Ford ad-libbed the line, 'I know,' in response to Leia's, 'I love you.'";
quotation[7] = "R2D2's name comes from the term 'REEL 2, DIALOG 2'.";
quotation[8] = "A total of 19 different plamets are shown throughout the films";
quotation[9] = "'Return of the Jedi' was originally titled 'Revenge of the Jedi'.";
quotation[10] = "Master Mace Windu is the only Jedi to wield a unique colored lightsaber: purple.";
quotation[11] = "Jabba the Hut was originially meant to be a furry character.";
quotation[12] = "C3PO had the first line in Episode IV and the last line in Episode III.";
quotation[13] = "Attack of the Clones was the first full length feature film to be shot digitally.";
quotation[14] = "The osund of the TIE Fighter engines is actually the sound of an elephant call mixed with sounds of a car driving on wet pavement.";
quotation[15] = "Many of the buildings constructed to be used in shots of Tatooine are still standing in Tunisia.";
quotation[16] = "The Jawa language is based on a sped-up version of the Zulu language.";
quotation[17] = "The bounty hunter Bossk's clothing is a recycled spacesuit from Doctor Who.";
quotation[18] = "Yoda's species has never been named.";
quotation[19] = "Yoda was originally going to played by a monkey carrying a cane and wearing a mask.";
quotation[20] = " The word 'ewok' is never said out loud in the Star Wars movies.";
quotation[21] = "Star Wars: Episode I - The Phantom Menace was labelled as 'The Doll House' when it shipped to theaters.";
quotation[22] = "No physical clone trooper outfits were actually produced for the films. Every clone trooper seen in the Star Wars films was created with CGI.";
quotation[23] = "The communicator Qui-Gon Jinn uses is actually an altered Gillete Sensor Excel women's razor.";
quotation[24] = "Samuel L. Jackson claims that the words 'bad motherfucker' were engraved on the lightsaber he used in the Star Wars films.";
quotation[21] = "The waterfalls cascading around the capital city of Naboo was actually salt.";
quotation[22] = "Star Wars: Episode II - Attack of the Clones was labelled as 'Cue Ball' when it shipped to theaters.";
quotation[23] = "Ahmed Best, the actor that plays Jar Jar Binks, makes an appearance out of costume in the background of one scene.";
quotation[24] = " George Lucas' daughter Katie Lucas appears as a Twi'lek dancer in Star Wars: Episode II - Attack of the Clones.";
quotation[25] = "The in-universe name for the genre of music heard during the cantina scene is 'jizz.'";
quotation[26] = "E.T.'s alien species are part of the Star Wars universe. A delegation of the aliens can be seen in the Galactic Senate.";
quotation[27] = "A disco version of the Star Wars theme became a No. 1 hit in 1977, and held the spot for two weeks.";
quotation[28] = "The voice of Yoda was provided by Frank Oz, who is also the voice of the Muppets' Miss Piggy.";
quotation[29] = "A scuba regulator was used to achieve the sound of Darth Vader's labored breathing.";
quotation[30] = "It took as many as 10 puppeteers using both hands to operate Jabba the Hutt.";
quotation[31] = "John Williams won an oscar for the Star Wars score. The music was later named by the AFI as the greatest film score of all time.";
quotation[32] = "The Chewbacca character is based on George Lucas' dog Indiana. The dog is also the inspiration for the name Indiana Jones.";
quotation[28] = "The Ewok are named after the Miwok, a Native American tribe indigenous to the Redwood forest where the Endor scenes were filmed in Return of the Jedi.";
quotation[29] = "The Millenium Falcon was inspired by the shape of a hamburger with an olive on the side.";
/*quotation[30] = "";
quotation[31] = "";
quotation[32] = "";
quotation[28] = "";
quotation[29] = "";
quotation[30] = "";
quotation[31] = "";
quotation[32] = "";
quotation[28] = "";
quotation[29] = "";
quotation[30] = "";
quotation[31] = "";
quotation[32] = "";
quotation[28] = "";
quotation[29] = "";
quotation[30] = "";
quotation[31] = "";
quotation[32] = "";
*/


var q = quotation.length;
var whichquotation=Math.round(Math.random()*(q-1));
function showquotation(){document.write(quotation[whichquotation]);}
showquotation();
>>>>>>> Stashed changes
