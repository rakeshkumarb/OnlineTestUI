import Ember from 'ember';

export default Ember.Route.extend({

model(){

   
  return Ember.$.get( "http://services.groupkt.com/country/get/all", function( data ) {
            
           
    });


}

});
