# Natural Essentials Inc.®

This repo hosts the landing site for Natural Essentials Inc.

## Upgrading from GoDaddy's site generator 

Our current site at <https://naturalessentialsinc.com> is hosted on, and
generated by, GoDaddy. The advantage of this configuration is that it allowed
us to use GoDaddy's CMS to create and maintain the site via their no/low-code
interface. The site generated by this tool performed well on mobile lighthouse
tests, but the desktop site's performance suffered, and "best practices" and
accessibility scores were suboptimal for both versions.

### Lighthouse scores, GoDaddy mobile site

![Old site (GoDaddy), lighthouse scores, mobile][1]

- Performance: **95**
- Accessibility: **45**
- Best Practices: **79**
- SEO: **92**
- PWA: **N/A**

### Lighthouse scores, GoDaddy desktop site

![Old site (GoDaddy), lighthouse scores, desktop][2]

- Performance: **85**
- Accessibility: **72**
- Best Practices: **86**
- SEO: **82**
- PWA: **N/A**

## JAMStack with Gatsby and Netlify

We could probably make changes through the GoDaddy CMS and address many of these
lighthouse scores, but, as this is, for the most part, a completely static site,
and we had limited access to the GoDaddy CMS internally, it seemed an excellent
opportunity to try out Gatsby, the static site generator and to dip our toe into
the JAMStack.

### Setup for local development

1. Download and install [nodejs][3] and npm if you don't have them running
   already.
2. Install the gatsby-cli with `npm install gatsby-cli -g`
3. Clone this repository to your local machine with `git clone
   https://github.com/NaturalEssentialsInc/naturalessentialsinc-site.git
   naturalessentials`
4. Install development dependencies with `cd ./naturalessentials && npm install`
5. Start the development server by running `gatsby develop`
6. Navigate to <http://localhost:8000> to see your local instance.
7. Changes made to the `src` directory will be hot reloaded so you can see your
   work in real time.
8. Run `npm run format` between changes to keep the code formatted and prevent
   errors.

### Deploy to Netlify

1. Create an account at <https://netlify.com>
2. Choose to deploy a [new site from git][4] (with default settings)
3. From "Site overview" --> "Build & deploy" --> "Asset optimization", choose to
   "Edit settings."
4. Select "Minify CSS", "Minify JS", and "Compress Images" (bundling our CSS and
   JS actually causes os a performance hit in this case)
5. To set up our contact form to email us, we need to set up a Mailgun account.

### Set up a Mailgun account

1. Head to <https://www.mailgun.com/> and set up an account there.
2. You will have to link a payment card, but the free tier is very generous
   (6,000+/month).
3. You can choose to set up a custom domain if you would like, but for our
   purposes, the important parts are the "Private API Key" and the "Mailgun
   domain" (by default, starts with "sandbox," the "host" part of the path is
   not important).

### Finish configuring our Netlify site

1. Now that we have our Mailgun account setup, return to the "Build & deploy"
   section of "Site settings" page on our Netlify dashboard.
2. From the "Environment" section, choose to add three new environmental
   variables:
   - MAILGUN_API_KEY (received when we set up our Mailgun account)
   - MAILGUN_DOMAIN (generally starts with "sandbox")
   - TARGET_EMAIL (this should be the email address where you would like to
     receive your contact form submissions)
3. \*Optional: our contact form will handle form submissions even if Javascript
   is disallowed.  In these cases, the form submissions are collected by the
   "form" section of out Netlify dashboard.  You may want to set up email alerts
   of new form submissions from here to handle cases where Javascript has been
   disabled in the browser.

## The result

Netlify makes CI with github a breeze.  Simply push changes to your "main"
branch and watch as Netlify automatically build and optimizes your changes to be
served directly from their CDN.  After switching our site generator to Gatsby,
we saw a big improvement in our lighthouse scores.

### Lighthouse scores, Gatsby mobile site

![New site (Gatsby), lighthouse scores, mobile][5]

- Performance: **97**
- Accessibility: **100**
- Best Practices: **100**
- SEO: **100**
- PWA: **Yes**

### Lighthouse scores, Gatsby desktop site

![New site (Gatsby), lighthouse scores, desktop][6]

- Performance: **100**
- Accessibility: **100**
- Best Practices: **100**
- SEO: **100**
- PWA: **Yes**

### The impact

We saw improvement in every Lighthouse category, even earning a perfect score
for our dekstop site.  Gatsby makes it so easy to create a PWA with a couple of
plugins, that we couldn't help taking that step as well.  Gatsy and Netlify
provided a turn-key solution to developing a static site that was both
accessible and fast!

[1]: ./src/images/mobile-tests-old-site.webp (Mobile scores)
[2]: ./src/images/desktop-performance-old-site.webp (Desktop scores)
[3]: <https://nodejs.org/en/download/package-manager/> "NodeJS"
[4]: <https://app.netlify.com/start> "New site from Git"
[5]: ./src/images/mobile-test-new-site.jpg (Mobile scores)
[6]: ./src/images/desktop-performance-new-site.jpg (Desktop scores)
