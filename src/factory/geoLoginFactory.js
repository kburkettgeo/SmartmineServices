var LoginStatusModel = function() {
    return {
        RequestSucceeded: true,
        ErrorMessage: '',
        Payload: null,
        AuthenticatedUser: {
            ApiToken: '',
            UserInfo: {
                Id: 0,
                Guid: '',
                GeoCustomerId: 0,
                OrganizationContactId: 0,
                UserRole: '',
                GeoCustomerLicenseId: 0,
                FirstName: '',
                LastName: '',
                FullName: '',
                Email: '',
                PhoneNumber: '',
                Active: false
            },
            Permissions: {},
            UserEvents: {}
        }
    };
}

exports.buildNewLoginStatusModel = function(email) {
    var retval = new LoginStatusModel();
    retval.AuthenticatedUser.UserInfo.Email = email;

    return retval;
}