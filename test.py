import requests

print('People', requests.get('http://localhost:3000/api/search?name=Luke').text, end='\n\n\n')
print('Planet', requests.get('http://localhost:3000/api/search?name=Tund').text, end='\n\n\n')
print('Starships', requests.get('http://localhost:3000/api/search?name=Slave').text, end='\n\n\n')
