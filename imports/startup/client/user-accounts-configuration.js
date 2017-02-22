/**
 * Definition fields
 */
const passwordField = AccountsTemplates.removeField('password');
const emailField = AccountsTemplates.removeField('email');
AccountsTemplates.addFields([{
    _id: 'username',
    type: 'text',
    displayName: 'username',
    required: true,
    minLength: 2
}, emailField, passwordField]);

/**
 * Configure layout
 */
AccountsTemplates.configure({
    defaultLayout: 'authLayout',
    defaultContentRegion: 'content',
    confirmPassword: false,
    enablePasswordChange: true,
    sendVerificationEmail: true,
    showForgotPasswordLink: true,
    onLogoutHook() {
        const homePage = 'app.home';
        if (FlowRouter.getRouteName() === homePage) {
            FlowRouter.reload();
        } else {
            FlowRouter.go(homePage);
        }
    }
});

/**
 * Fixed Uncaught Error: [ensureSignedIn] no signIn route configured!
 */
['signIn', 'signUp', 'resetPwd', 'forgotPwd', 'enrollAccount'].forEach(
    (routeName) => AccountsTemplates.configureRoute(routeName));


/**
 * Configure field on change password route
 */
AccountsTemplates.configure({
    texts: {
        title: {
            changePwd: '',
        }
    }
});

/**
 * Configure route of change password
 */
AccountsTemplates.configureRoute('changePwd', {
    redirect() {
        Popup.back();
    }
});