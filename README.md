# Landing Page

# Setup
```bash
# Install nodejs (also installs npm)
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs

# Project dependencies
npm install gh-pages --save-dev
```

# Local Development and Testing
```bash
npm start # Has hot-reloading.
```

# Deploying
```bash
npm run deploy # Puts everything into a minified build folder that gets served to gh-pages branch.
```

# Useful Links
- [Online icon tool](https://icoconvert.com/)
- https://coolcssanimation.com/how-to-trigger-a-css-animation-on-scroll/
- https://animate.style/#usage
- https://react-bootstrap.github.io/getting-started/introduction/
