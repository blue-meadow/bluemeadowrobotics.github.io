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

# Custom Domain Hosting

Add this `CNAME` entry to DNS records:
```
CNAME     www     bluemeadowrobotics.github.io      30 min
```

**NOTE**: Need to have a file in the top level directory called `CNAME` with the following entry:
```
www.bluemeadow.ai
```
- This file is created/deleted on the `gh-pages` branch when you add a custom domain in `Settings > Pages > Custom domain`.
- I had problems before due to the fact that `npm run deploy` will overwrite everything on the `gh-pages` branch, overwriting the `CNAME` file there.
- As of `7/25/2021`, there is a `CNAME` file on the `main` branch.


# Useful Links
- [Online icon tool](https://icoconvert.com/)
- https://coolcssanimation.com/how-to-trigger-a-css-animation-on-scroll/
- https://animate.style/#usage
- https://react-bootstrap.github.io/getting-started/introduction/
