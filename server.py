import threading
import socket
import argparse
import os

class server(threading.Thread):
    def __init__(self, host, port):
        supet().__init__()
        self.connections = []
        self.host = host
        self.port = port

    def run(self):
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        sock.setsockopt(socket.SOL_SOCKET ,socket.SO_REUSEADDR)
        sock.bind((self.host,self.port))

        sock.listen(1)
        print("listening at",socket.getsockname())