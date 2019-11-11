FROM atf.intranet.bb.com.br:5001/node:8

WORKDIR /usr/src/app

COPY . .

RUN npm install --verbose --production

RUN rm -rf ./logs

RUN mkdir logs

RUN chmod 777 -R ./logs

RUN cd ./logs

RUN > logs-error.json
RUN > logs-info.json
RUN > logs-warn.json

RUN cd ..

EXPOSE 5000

CMD [ "npm", "start" ]
