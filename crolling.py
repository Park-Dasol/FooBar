import selenium
from selenium import webdriver
import json

cocktail_list = []

options = webdriver.ChromeOptions()
options.add_experimental_option("excludeSwitches", ["enable-logging"])
driver = webdriver.Chrome(options=options)
# url = 'https://www.thecocktaildb.com/browse.php?b=a'
for i in [chr(x) for x in range(ord('a'), ord('z')+1)]:
    url = 'https://www.thecocktaildb.com/browse.php?b=' + i
    driver.get(url)
    driver.implicitly_wait(10) # seconds
    # items = driver.find_elements_by_tag_name('div').find_elements_by_tag_name('a')
    # items = driver.find_element_by_tag_name('input').find_element_by_tag_name('a') 
    items = driver.find_elements_by_css_selector('.row > div > a')  
    for idx in range(len(items)):
        # print(items[idx].text)
        if (items[idx].text) :
            cocktail_list.append(items[idx].text)

with open('cocktails.json', 'w', encoding='utf-8') as f:
    json.dump({'data': cocktail_list}, f, ensure_ascii=False, indent="\t")


driver.quit()