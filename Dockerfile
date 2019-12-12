FROM adoptopenjdk/openjdk8:alpine-slim as build
COPY . /tmp
RUN apk add --no-cache git python2 alpine-sdk git unzip wget nodejs npm gradle
WORKDIR /tmp


ENV SDK_TOOLS "4333796"
ENV ANDROID_HOME "/opt/sdk"
ENV PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/tools/bin:$ANDROID_HOME/platform-tools

# Download and extract Android Tools
RUN wget -q https://dl.google.com/android/repository/sdk-tools-linux-${SDK_TOOLS}.zip -O /tmp/tools.zip && \
    mkdir -p ${ANDROID_HOME} && \
    unzip -qq /tmp/tools.zip -d ${ANDROID_HOME} && \
    rm -v /tmp/tools.zip

# Install SDK Packages
RUN mkdir -p ~/.android/ && touch ~/.android/repositories.cfg && \
    yes | ${ANDROID_HOME}/tools/bin/sdkmanager "--licenses" && \
    ${ANDROID_HOME}/tools/bin/sdkmanager "platform-tools" "extras;android;m2repository" "extras;google;m2repository" "extras;google;instantapps" && \
    ${ANDROID_HOME}/tools/bin/sdkmanager "--update"

ENV BUILD_TOOLS "27.0.3"
ENV TARGET_SDK "27"

# Install SDK Packages
RUN ${ANDROID_HOME}/tools/bin/sdkmanager "build-tools;${BUILD_TOOLS}" "platforms;android-${TARGET_SDK}"

RUN npm install -g @angular/cli ionic cordova angular typescript
RUN npm i -g cordova-res cordova-hot-code-push-cli --unsafe-perm
WORKDIR /tmp/modular-app/
RUN npm install && ionic cordova platform add android
#RUN npm run config -- --environment=prod && ionic cordova build android --prod
