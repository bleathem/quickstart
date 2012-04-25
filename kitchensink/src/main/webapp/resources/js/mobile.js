var handleHashChange = function (page) {
    var appPage = $('#app-page');
    if (appPage.data('activePage') === page) {
        slidfast.core.slideTo('app-page');
    } else {
        loadPage(page);
        appPage.data('activePage', page);
    }
}

var loadPage = function (page) {
    var hiddenInput = 'mobileForm:page';
    $(document.getElementById(hiddenInput)).val(page);

    var options = {
        execute: hiddenInput,
        render : '@form',
        onevent : function(event) {
            if(event.status == 'success') {
                slidfast.core.slideTo('app-page');
            }
        }
    }
    jsf.ajax.request(hiddenInput, null, options);
}
