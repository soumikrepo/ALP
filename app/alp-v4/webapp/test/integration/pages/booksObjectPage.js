sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'com.app.alpv4',
            componentId: 'booksObjectPage',
            contextPath: '/books'
        },
        CustomPageDefinitions
    );
});