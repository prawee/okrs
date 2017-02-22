console.log('routes.js of client is loaded.');
/**
 * import package
 */
// import { FlowRouter } from 'meteor/kadira:flow-router';
// import { BlazeLayout } from 'meteor/kadira:blaze-layout';

/**
 * import templates
 */
import '/imports/ui/layouts/app';
import '/imports/ui/layouts/header';

import '/imports/ui/components/users/header';


/**
 * route definitions
 */
BlazeLayout.setRoot('body');
FlowRouter.route('/', {
    name: 'app.home',
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    action() {
        BlazeLayout.render('defaultLayout', {
            header: 'header',
            content: 'message'
        });
    }
});
