$(document).ready(function(){

  loadPetType();
  $('#petType').on('change',function(){
    var products_select=productsCollection[$(this).val()];
    $('#product').empty();
    $.each(products_select,function(index,value){
      var option=$('<option>');
      option.text(products_select[index]);
      $('#product').append(option);
    });
  });

});

var productsCollection={Cats:['NATURAL BALANCE','PURRFECT BISTRO','SCIENCE DIET','BLUE','WHOLE HEARTED','BLUE WILDERNESS'],
  Dogs:['EVO','MERRICK','PRO PLAN','HILLS','SOLID GOLDL','WHOLE HEARTED']};



function loadPetType(){
  var petType=['Dogs','Cats'];
  $.each(petType,function(index,value){
    var option=$('<option>');
    $('#petType').append(option);
    option.text(petType[index]);
  });

}
