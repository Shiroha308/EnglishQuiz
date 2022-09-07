import requests
from bs4 import BeautifulSoup
page_url = "https://www.google.com/search?q=fruit+pulp&source=lnms&tbm=isch&sa=X&ved=2ahUKEwipgOWUsOn5AhUGQ_UHHYn6ALgQ_AUoAXoECAEQAw&biw=1440&bih=614&dpr=2"

r = requests.get(page_url)
soup = BeautifulSoup(r.text , features="html.parser")

soup.find_all("img", attrs={"alt": "Fruit Pulp"})

img_tags = soup.find_all("img", attrs={"alt": "Fruit Pulp"})
img_urls = []

for img_tag in img_tags:
    url = img_tag.get("src")

img_urls.append(url)

print(url)


