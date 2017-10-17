(function(window){
  'use strict';

  var FORM_SELECTOR = '[review-submission-form="form"]';
  var App = window.App;
  var FormHandler = App.FormHandler;
  var Reviews = App.Reviews;
  var DataStore = App.DataStore;


  var SERVER_URL = 'http://localhost:2403/userreview';
  var datastore = new DataStore(SERVER_URL);
  // var review = new Reviews(datastore);
  // window.review = review;
  var formhandler = new FormHandler(FORM_SELECTOR);
  //console.log('In the Server');
  formhandler.addSubmitHandler(function (data){
  // review.AddReviews.call(data);
  // var img_name=$('#imgfile').val();
  // var file_name=img_name.split("\\");
  // file_name=file_name[file_name.length-1];
    datastore.fileUpload('',function(res){
      data['imgId']=res[0].id;
      datastore.add(data);
    });
  });





})(window);
