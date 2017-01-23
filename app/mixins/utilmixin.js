import Ember from 'ember';

export default Ember.Mixin.create({

    actions: {
        sayhello : function(name){
            alert ("hello "+name);
        }
    }
});
