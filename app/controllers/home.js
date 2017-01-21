import Ember from 'ember';

export default Ember.Controller.extend({

    list:['uma','vikram','sweta','rakesh'],

    actions:{
        gototestpage : function(){
          
           console.log(this.get('model'))
           console.log(this.get('model'))
        },
        gotoanotherpage :function(){

        },
        dosomething : function(){
            alert ("you clicked");
        }
    }
});
