/**
* Editable Inline 
* ---------------------
*/
(function ($) {

    //extend methods
    $.extend($.fn.editableContainer.Constructor.prototype, {
        containerName: 'editableform',
        innerCss: null,
                 
        initContainer: function(){
            //no init for container
            //only convert anim to miliseconds
            if(!this.options.anim) {
                this.options.anim = 0;
            }         
        },
        
        splitOptions: function() {
            this.containerOptions = {};
            this.formOptions = this.options;
        },
        
        tip: function() {
           return this.$form; 
        },
        
        show: function () {
            this.$element.hide();
            
            if(this.$form) {
                this.$form.remove();
            }
            
            this.initForm();
            this.tip().addClass('editable-container').addClass('editable-inline');            
            this.$form.insertAfter(this.$element);
            this.$form.show(this.options.anim);
            this.$form.editableform('render');
        }, 
        
        hide: function () {
            this.$form.hide(this.options.anim, $.proxy(function() {
                this.$element.show();
                //return focus on element
                if (this.options.enablefocus) {
                    this.$element.focus();
                }                
            }, this)); 
        },
        
        destroy: function() {
            this.tip().remove();
        } 
    });

    //defaults
    $.fn.editableContainer.defaults = $.extend({}, $.fn.editableContainer.defaults, {
        anim: 'fast',
        enablefocus: false
    });    


}(window.jQuery));