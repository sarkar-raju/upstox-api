// The login window is a web page hosted at the following link: - https://api.upstox.com/v2/login/authorization/dialog

// client application must trigger the opening of the above URL using Webview (or similar technology) and pass the following parameters:
// 1.client_id => the api key obtain during app generation
// 2.redirect_uri => The URL to which the user will be redirected post authentication; must match the URL provided during app generation.
// 3.state  => An optional parameter.
// 4.response_type => This value must always be "code"
// Sameple URL:- https://api.upstox.com/v2/login/authorization/dialog?response_type=code&client_id=615b1297-d443-3b39-ba19-1927fbcdddc7&redirect_uri=https%3A%2F%2Fwww.trading.tech%2Flogin%2Fupstox-v2&state=RnJpIERlYyAxNiAyMDIyIDE1OjU4OjUxIEdNVCswNTMwIChJbmRpYSBTdGFuZGFyZCBUaW1lKQ%3D%3D

// client_id means API Key (not customer UCC) and client_secret means API Secret.