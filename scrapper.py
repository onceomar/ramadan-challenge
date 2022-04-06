from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager

email = input(str("Email:"))
password = input("Password:")

browser = webdriver.Chrome(ChromeDriverManager().install())

browser.get("https://facebook.com/login/")
browser.find_element_by_css_selector(".inputtext _55r1 inputtext _1kbt inputtext _1kbt").send_keys(email)
browser.find_element_by_css_selector("inputtext _55r1 inputtext _9npi inputtext _9npi").send_keys(password)
# browser.find_element_by_css_selector(".results-container .result-box:first-of-type h3 a").click()
# views_count = browser.find_element_by_css_selector(".search-submit").click()
# browser.add_experimental_option("detach", True)
while True:
    pass
browser.print_page()