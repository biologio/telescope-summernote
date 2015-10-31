Template.post_submit.rendered = function() {
    Meteor.setTimeout(function() {
        var $summernote = $("textarea[name='body']");
        $summernote.summernote({
            height: 400,
            maxHeight: 1800,
            minHeight: 250

        });
    }, 1000)

}
Template.post_edit.rendered = function() {

    Meteor.setTimeout(function() {
        var $summernote = $("textarea[name='body']");
        $summernote.summernote({
            height: 400,
            maxHeight: 1800,
            minHeight: 250

        });
    }, 1000)


};

Template.registerHelper("HTMLPurify", function(html) {
    if (html) {
        return UniHTML.purify(html)
    }
    return null;

})

Telescope.callbacks.add("postSubmitClient", function(postObject) {
    postObject.body = UniHTML.purify(postObject.body);
    return postObject;
})
Telescope.callbacks.add("postEditClient", function(postObject) {
    postObject.$set.body = UniHTML.purify(postObject.$set.body);
    return postObject;
})