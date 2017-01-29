import Ember from 'ember';
//import utilmixin from '..';

export default Ember.Controller.extend(/*utilmixin,*/ {

    list:['uma','vikram','sweta','rakesh'],
    testlist : ['programming fundamentals', 'JAVA'],

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
