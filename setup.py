import json
from setuptools import setup


with open('package.json') as f:
    package = json.load(f)

package_name = package["name"].replace(" ", "_").replace("-", "_")

long_description = """
# dash ace

dash ace is a Dash component for Ace Editor.

```
    $ pip install dash-ace
```
"""

setup(
    name=package_name,
    version=package["version"],
    author=package['author'],
    author_email="xu@reasoned.ai",
    long_description=long_description,
    long_description_content_type='text/markdown',
    python_requires='>=3.6.0',
    url=package['homepage'],
    packages=[package_name],
    include_package_data=True,
    license=package['license'],
    description=package.get('description', package_name),
    install_requires=[],
    classifiers=[
        'Framework :: Dash',
    ],    
)
