import os
import sys
from image_optim import ImageOptimAPI

dir = os.path.abspath(os.path.dirname(__file__))


FILES = [
  'PANO_20140705_mars1.jpg',
  'PANO_20150101_stars.jpg',
  # 'PANO_Dione_moon_color.jpg',
  # 'PANO_Enceladus2_ps.jpg'
]


def main():
  for fn in FILES:
    print('Processing %s' % fn)
    file_path = os.path.join(dir, 'src', fn)
    api = ImageOptimAPI('zwwpvcxnbr');
    img = api.image_from_file_path(file_path, {'size': '4096x2048'})
    img.save(os.path.join(dir, 'output', fn))


if __name__ == "__main__":
    main()
