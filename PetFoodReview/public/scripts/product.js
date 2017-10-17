var img_url = 'http://localhost:2403/'+'user_img/';


$(document).ready(function(){
  $('a[data-target="#dogsModal"]').each(function(){
    $(this).on('click',function(){
      loadDogsModals(this);

    });

  });


  $('a[data-target="#catsModal"]').each(function(){
    $(this).on('click',function(){
      loadCatsModals(this);
    });
  });
});
var SERVER_URL = 'http://localhost:2403/user';
var DataStore=App.DataStore;
var datastore = new DataStore(SERVER_URL);
function loadDogsModals(selector){
  var productName=$(selector).parent().siblings('.panel-heading').text();
  var product_head=$('<h4>').append(productName);
  $('#dogsModalTitle').empty();
  $('#dogsModalTitle').append(product_head);
  datastore.get(productName,dogsModalData);
}


function loadCatsModals(selector){
  var productName=$(selector).parent().siblings('.panel-heading').text();
  var product_head=$('<h4>').append(productName);
  $('#catsModalTitle').empty();
  $('#catsModalTitle').append(product_head);
  datastore.get(productName,catsModalData);
}




function dogsModalData(data){
  $('#modalBody').children().each(function(item){
    $(this).empty();
  });
  $(data).each(function(){
    var headTxt = 'Title:';
    var emailTxt = 'Email:';
    var rate = 'Rating:';
    var reviewtxt = 'Review Description:';
    var div_card=$('<div class="card">');
    var div_cardblock=$('<div class="card-block">');
    var headTitle=$('<h4 class="card-title">');
    var imgContainer=$('<div>');
    var img=$('<img>');
    imgContainer.append(img);
    if(this.imgId!=''){
      datastore.fileDownload(this.imgId, function(filename){
        img.attr('src',img_url+filename);
        img.attr({'width':'80','height':'80'});
        div_cardblock.append(imgContainer);
      });
    }
    var headEmail=$('<h6 class="card-subtitle mb-2 text-muted">');
    var headRating=$('<h6 class="card-subtitle mb-2 text-muted">');
    var reviews=$('<p class="card-text">');
    headTitle.append(headTxt + this.reviewHeading);
    headEmail.append(emailTxt + this.emailAddress);
    headRating.append(rate + this.productRating);
    reviews.append(reviewtxt + this.reviews);
    div_cardblock.append(headTitle);
    div_cardblock.append(headEmail);
    div_cardblock.append(headRating);
    div_cardblock.append(reviews);
    div_card.append(div_cardblock);
    $('#modalBody').append(div_card);
    //   var spanEmailAddress= $('<span>');
    //   var spanReviewHeading= $('<span>');
    //   var spanReviews= $('<span>');
    //   var spanRating= $('<span>');
    //   spanReviewHeading.append(this.reviewHeading);
    //   spanEmailAddress.append(this.emailAddress)
    //   spanReviews.append(this.reviews)
    //   spanRating.append(this.productRating)
    //   $('#productRatingModal').append(spanRating);
    //   $('#reviewHeadingModal').append(spanReviewHeading);
    //   $('#sectionReviewModal').append(spanReviews);
    //   $('#sectionUserEmailModal').append(spanEmailAddress);
    //   if(data.imgId!="")
    //   {
    //     datastore.fileDownload(this.imgId, function(filename){
    //       var spanImage = $('<img>').attr('src',img_url+filename);
    //       spanImage.attr({'width':'60','height':'60'});
    //       $('#sectionImgScrollModal').append(spanImage);
    //   });
    // }
  });
}


function catsModalData(data){
  $('#modalBody').children().each(function(item){
    $(this).empty();
  });
  $(data).each(function(){
    var headTxt = 'Title:';
    var emailTxt = 'Email:';
    var rate = 'Rating:';
    var reviewtxt = 'Review Description:';
    var usrImg = 'User Image:';
    var div_card=$('<div class="card">');
    var div_cardblock=$('<div class="card-block">');
    var headTitle=$('<h4 class="card-title">');
    var imgContainer=$('<div>');
    var img=$('<img>');
    imgContainer.append(img);
    if(this.imgId!=''){
      datastore.fileDownload(this.imgId, function(filename){
        img.attr('src',img_url+filename);
        img.attr({'width':'80','height':'80'});
        div_cardblock.append(imgContainer);
      });
    }
    var headEmail=$('<h6 class="card-subtitle mb-2 text-muted">');
    var headRating=$('<h6 class="card-subtitle mb-2 text-muted">');
    var reviews=$('<p class="card-text">');
    headTitle.append(headTxt +  this.reviewHeading);
    headEmail.append(emailTxt + this.emailAddress);
    headRating.append(rate + this.productRating);
    reviews.append(reviewtxt + this.reviews);
    div_cardblock.append(headTitle);
    div_cardblock.append(headEmail);
    div_cardblock.append(headRating);
    div_cardblock.append(reviews);
    div_card.append(div_cardblock);
    $('#modalBody').append(div_card);
  });
}



//   });
// }
