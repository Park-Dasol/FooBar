import selenium
from selenium import webdriver
import json

cocktail_list = []

options = webdriver.ChromeOptions()
options.add_experimental_option("excludeSwitches", ["enable-logging"])
driver = webdriver.Chrome(options=options)

for i in [chr(x) for x in range(ord('a'), ord('z')+1)]:
    url = 'https://www.thecocktaildb.com/browse.php?b=' + i
    driver.get(url)
    driver.implicitly_wait(10) # seconds
    # items = driver.find_elements_by_css_selector('.row > div > a')  
    items = driver.find_elements_by_css_selector('.row > div> a')  
    for idx in range(len(items)):
        # print(items[idx].text)
        if (items[idx].text) :
            address = items[idx].get_attribute('href')
            url_length = len('https://www.thecocktaildb.com/drink/')
            address = address[url_length:]
            splited_list = address.split('-')
            id = splited_list[0]
            name = ' '.join(splited_list[1:])
            cocktail_list.append({'id' : id, 'name' : name})
with open('cocktails.json', 'w', encoding='utf-8') as f:
    json.dump({'data': cocktail_list}, f, ensure_ascii=False, indent="\t")


driver.quit()