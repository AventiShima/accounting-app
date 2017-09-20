var balNum = 0;
var currentBal = 0;
var prevBal = 0;

$("#confirm").click(function(){
  var change = $("select").val();
  var newBal = Number($("#newBal").val());
  var action = $("#newAction").val();
  balNum++;
  var newItem = "<tr><td>#" + balNum + "</td><td>$" + prevBal + "</td><td>" + change + "$" + newBal + "</td>";
  change === "+" ? currentBal += newBal: currentBal -= newBal;
  prevBal = currentBal;
  newItem += "<td>$" + currentBal + "</td><td>" + action + "</td></tr>";
  $("tbody").append(newItem);
  $("#newBal").val("");
  $("#newAction").val("");
  $("#currentBalDisplay").text(currentBal);
});
