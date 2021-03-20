let arr = [];
$(".btn").click(function () {
   let a = $(".inpt").val();
   $(".list").append("<li>" + a + "</li>");
   arr.push(a);
   console.log(arr);
});