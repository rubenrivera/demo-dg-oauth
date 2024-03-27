// Put your computations here.

function userComputed(data) {
    
  return {
    cookieConsent: {
      required: true,
      consentUrl: "/cookies.html"
    }
  };
}

exports.userComputed = userComputed;
