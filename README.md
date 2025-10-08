# Development

Best to run in a container, since this still uses a fairly old version of Node.

```bash
docker build . -t portfolio
docker run -d portfolio -v .:/usr/src/app
```

Then in the container...

```bash
cd /usr/src/app
npm i
node_modules/.bin/webpack watch --mode=development
```

Use VS Code live server to preview the site.

Check that images have been processed correctly. If not, kill webpack and try again.

## Push it live

```bash
rsync -r public/* [user]]@[domain]:[site_files_path]
```

