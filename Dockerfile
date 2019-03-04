FROM cypress/browsers:chrome67

COPY package.json .
COPY package-lock.json .

# ENV CI=1
RUN npm ci

COPY cypress cypress
COPY cypress.json .

VOLUME /cypress/screenshots
VOLUME /cypress/videos
