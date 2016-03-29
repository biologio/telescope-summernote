Package.describe({
    name: 'biolog:telescope-summernote',
    version: '0.1.3_2',
    // Brief, one-line summary of the package.
    summary: 'Summernote WYSIWYG editor with embedded images support for Telescope app',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/biologio/telescope-summernote.git',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.1');
    api.use(["telescope:core@0.25.5", "summernote:summernote@0.5.10", "vazco:universe-html-purifier@1.2.3"]);


    api.addFiles([
        'client/templates/custom_post_body.html',
        'client/js/summernote.js',
        'client/scss/summernote.scss'

    ], ['client']);
    api.addFiles([
        'lib/post.js'

    ], ['server', 'client']);
    api.addFiles('telescope-summernote.js');

});

Package.onTest(function(api) {
    api.use('ecmascript');
    api.use('tinytest');
    api.use('biolog:telescope-summernote');
    api.addFiles('telescope-summernote-tests.js');
});