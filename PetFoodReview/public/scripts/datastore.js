(function(window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;


  function DataStore(url) {
    if (!url) {
      throw new Error('No URL');
    }
    this.serverUrl = url;
  }

  DataStore.prototype.add = function(val) {
    dpd.userreview.post(val, function(result, err) {
      if (err) return console.log(err);
      console.log(result, result);
    });

  };

  // DataStore.prototype.get = function(key){
  //   dpd.petfoodreviews.get({product:key, id:{$ne:'null'}}, function(res){
  //     console.log(res);
  //     console.log(cb);
  //   });
  // };

  DataStore.prototype.fileUpload = function(val, fn) {
    // dpd.fileupload.post({subdir:"user_img"}, function(result, err) {
    //   if(err) return console.log(err);
    //   console.log(result, result);
    //   // fn(result);
    // });
    try {
      var file = $('#imgfile')[0].files[0];
      var formData = new FormData();
      formData.append('imgfile', file, file.name);
      $.ajax({
        url: 'http://localhost:2403/fileupload',
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        cache: false,
        success: function(data) {
          fn(data);
        },
        error: function(xhr) {
          console.log(xhr.responseText);
        }
      });
    } catch (e) {
      fn([{
        'id': ''
      }]);
    }


  };



  DataStore.prototype.fileDownload = function(id, fn) {

    var query = {
      'id': id
    };
    dpd.fileupload.get(query, function(result, err) {
      console.log(result);
      fn(result.filename);
    });
  };





  // DataStore.prototype.get = function(val){
  //   dpd.user.get({product:val, id:{$ne:'null'}}, function(res){
  // dpd.user.get({product:val, id:{$ne:'null'}}, function(res)
  //     console.log(res);
  //     console.log(cb);
  //   });
  // };
  DataStore.prototype.get = function(val, fn) {
    var query = {
      'productName': val
    };
    dpd.userreview.get(query, function(result) {
      console.log(result);
      fn(result);
    });
  };

  App.DataStore = DataStore;
  window.App = App;

})(window);
