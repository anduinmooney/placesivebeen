//business logic
function Contact(name, date1, date2, note) {
  this.firstName = name;
  this.dateArrived = date1;
  this.dateDeparted = date2;
  this.notes = note;
}

// user interface logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#place-name").val();
    var dateArrived = $("input#date1").val();
    var dateDeparted = $("input#date2").val();
    var note =$("textarea#notes").val();

    var newContact = new Contact(inputtedFirstName, dateArrived, dateDeparted, note);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".place-name").text(newContact.firstName);
      $(".dateOfArrival").text(newContact.dateArrived);
      $(".dateOfDeparture").text(newContact.dateDeparted);
      $(".userNotes").text(newContact.notes);

});
    $("input#place-name").val("");
    $("input#date1").val("");
    $("input#date2").val("");
    $("textarea#notes").val("");
  });
  var dob = $("#born").val();

});
