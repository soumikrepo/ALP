sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/app/alpv4/test/integration/FirstJourney',
		'com/app/alpv4/test/integration/pages/booksList',
		'com/app/alpv4/test/integration/pages/booksObjectPage'
    ],
    function(JourneyRunner, opaJourney, booksList, booksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/app/alpv4') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThebooksList: booksList,
					onThebooksObjectPage: booksObjectPage
                }
            },
            opaJourney.run
        );
    }
);