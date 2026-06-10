import http.server, os
os.chdir('/Users/kamiya/Desktop/kopankopinu')
http.server.test(HandlerClass=http.server.SimpleHTTPRequestHandler, port=3456, bind='127.0.0.1')
