from PIL import Image
from pandas import pandas as pd
df = pd.read_csv(r"C:\Users\Sherin Sneha\Documents\GitHub\certificate-generator\mainpy\example.csv")
for index, j in df.iterrows():
  image1 = Image.open(r"C:\Users\Sherin Sneha\Documents\GitHub\certificate-generator\mainpy\Certificate-png\images\imi{}.png".format(j['ID']))
  im1 = image1.convert('RGB')
  im1.save(r"C:\Users\Sherin Sneha\Documents\GitHub\certificate-generator\mainpy\Certificates-PDF/{}.pdf".format(j['Name']))