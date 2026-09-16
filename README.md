# Barkada Bowl

Website for Barkada Bowl, a Filipino/poké restaurant at 8010 N. Atlantic Ave, Cape Canaveral, FL.

A simple, dependency-free static site: `index.html`, `styles.css`, `script.js`. No build step,
just open `index.html` in a browser, or serve the folder with any static file host.

## Updating the menu

Open `menu.js` in any plain text editor (Notepad, TextEdit, etc.), not `index.html`. It has
step-by-step instructions in the comments at the top, but the short version:

- A category name goes on its own line.
- Each item goes on its own line starting with `- `.
- Save the file, then refresh the page to see the change.

No other file needs to change for a menu update.

## Before this goes live

The contact info, hours, and menu items here were pulled from public listings (the restaurant's
Facebook/Instagram and review sites), **not confirmed with the owner**. Before publishing, have the
owner check:

- Phone number, address, and hours are current
- Menu items and any prices are accurate
- They're okay with the Facebook/Instagram links used

## Local preview

```
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deploying

The easiest free option is **GitHub Pages**:

1. In the repo settings, go to **Pages**.
2. Under "Build and deployment", set Source to **Deploy from a branch**, branch `main`, folder `/ (root)`.
3. Save. GitHub will publish the site at `https://<username>.github.io/barkadabowl/` within a minute or two.

Netlify or Vercel also work if you'd rather have a custom deploy pipeline, both can deploy this
folder with zero configuration since there's no build step.

## Pointing the barkadabowl.com domain at this site

If the restaurant owns `barkadabowl.com` but it currently redirects through ad sites, that almost
always means one of two things:

1. **The domain registration lapsed** and it's now parked by the registrar or picked up by a
   domain-parking/ad company, which auto-redirects visitors to monetized ad pages.
2. **DNS records point somewhere stale**, e.g. an old web host or an expired "domain forwarding"
   setting configured through the registrar, which itself now redirects to ads.

### How to check

- Run a WHOIS lookup (e.g. `whois barkadabowl.com` or a site like whois.icann.org) to see the
  registrar and expiration date. If it's expired or expiring soon, that's the likely cause.
- Ask the owner which registrar they used to buy the domain (GoDaddy, Namecheap, Google Domains/Squarespace,
  Wix, etc.) and whether they still have login access (check email for renewal notices/receipts,
  search their inbox for "barkadabowl.com").

### How to fix it

- **If they still control the registrar account**: remove any "domain forwarding" or "parking" setting,
  then point the domain at wherever the site is hosted:
  - GitHub Pages: add an `A` record for the root domain to GitHub Pages' IPs (185.199.108.153,
    185.199.109.153, 185.199.110.153, 185.199.111.153) and a `CNAME` record for `www` pointing to
    `<username>.github.io`. Add a `CNAME` file to the repo root with `barkadabowl.com` in it, or set
    the custom domain in the Pages settings.
  - Netlify/Vercel: add the custom domain in their dashboard, then update the DNS records they give you.
- **If the domain expired and was scooped up by a third party**: you may need to repurchase it (often
  possible during a grace/redemption period, sometimes not) or the owner may decide to register a new
  domain (e.g. `barkadabowlfl.com`) and use that instead, listing it on Google Business, Yelp, and
  their social pages.
- **If they never actually owned it** (someone registered it on their behalf, or it was never truly
  theirs), a new domain is the simplest path forward.

In the meantime, the free GitHub Pages / Netlify URL works fine and can be shared on their Facebook,
Instagram, and Google Business listing while the domain situation gets sorted out.
