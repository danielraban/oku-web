// CloudFront Functions (viewer-request): map pretty URLs to S3 object keys.
// S3 REST + OAC has no "directory index"; /privacy must become /privacy/index.html.
function handler(event) {
  var request = event.request;
  var uri = request.uri;
  if (uri.endsWith("/")) {
    request.uri += "index.html";
  } else if (uri.indexOf(".") === -1) {
    request.uri += "/index.html";
  }
  return request;
}
