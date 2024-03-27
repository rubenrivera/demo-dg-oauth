const { userComputed } = require("../../helpers/userUtils");
module.exports = {
    eleventyComputed: {
        permalink: (data) => {
            const { cookieConsent } = userComputed(data);
            return cookieConsent.consentUrl
        }
    }
}