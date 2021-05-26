from PIL import Image
from pandas import pandas as pd
df = pd.read_csv('example.csv')
for index, j in df.iterrows():
  image1 = Image.open('Certificate-png/images/imi{}.png'.format(j['ID']))
  im1 = image1.convert('RGB')
  im1.save('Certificate-PDF/{}.pdf'.format(j['Name']))