sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.app.alpv4',
            componentId: 'booksList',
            contextPath: '/books'
        },
        CustomPageDefinitions
    );
});